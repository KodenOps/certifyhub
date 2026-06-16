import Parser from "rss-parser";
import fs from "fs";
import path from "path";

const parser = new Parser();

const FEED_URL = "https://kodenops.hashnode.dev/rss.xml";
const OUTPUT_PATH = path.join(process.cwd(), "public", "blog.json");

async function build() {
	let posts = [];
	let feed;

	try {
		feed = await parser.parseURL(FEED_URL);
	} catch (err) {
		console.warn(`Warning: could not fetch RSS feed (${FEED_URL}):`, err.message || err);
		if (fs.existsSync(OUTPUT_PATH)) {
			const existing = JSON.parse(fs.readFileSync(OUTPUT_PATH, "utf-8"));
			posts = Array.isArray(existing) ? existing : [];
			console.warn(`Using existing blog.json with ${posts.length} posts.`);
		} else {
			console.warn("No existing blog.json found; generating empty blog data fallback.");
		}
	}

	if (feed?.items?.length) {
		posts = feed.items.map((item) => ({
			title: item.title ?? "",
			slug: item.link?.split("/").pop() ?? "",
			brief: item.contentSnippet ?? "",
			publishedAt: item.pubDate ?? "",
			url: item.link ?? "",
			coverImage: item.enclosure?.url ? { url: item.enclosure.url } : null,
		}));
	}

	if (!fs.existsSync(path.dirname(OUTPUT_PATH))) {
		fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
	}

	fs.writeFileSync(OUTPUT_PATH, JSON.stringify(posts, null, 2));

	console.log(`✔ Generated ${posts.length} posts`);
}

build().catch((err) => {
	console.error("Unexpected build failure:", err);
	process.exit(1);
});