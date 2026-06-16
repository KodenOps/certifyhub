"use client";

import { useMemo, useState } from "react";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { blogPosts } from "./blog";

type Post = {
	title: string;
	slug: string;
	brief: string;
	publishedAt: string;
	url: string;
	coverImage?: { url: string } | null;
};

export const dynamic = "force-static";

const POSTS_PER_PAGE = 10;

export default function Page() {
	const posts: Post[] = blogPosts;
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));

	const pagePosts = useMemo(
		() => posts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE),
		[currentPage, posts],
	);

	return (
		<div className="min-h-screen w-full bg-slate-50">
			<NavBar />

			<div className="main mx-auto max-w-8xl px-4 pb-20 pt-8 md:px-6">
				<h2 className="text-center text-2xl font-bold text-[#2660A4] md:text-3xl">
					Welcome to My Blog
				</h2>
				<p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600 sm:text-base">
					Browse the latest posts from the Kodenops publication, with responsive cards and page navigation.
				</p>

				{posts.length === 0 ? (
					<p className="mt-12 text-center text-gray-500">
						No blog posts are available right now. Please try again later.
					</p>
				) : (
					<div className="flex items-center justify-center flex-col w-full">
						<div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
							{pagePosts.map((post) => (
								<Link
									key={post.slug}
									href={post.url}
									target="_blank"
									className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
								>
									{post.coverImage?.url && (
										<div className="h-48 overflow-hidden bg-gray-100 sm:h-52">
											<img
												className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
												src={post.coverImage.url}
												alt={post.title}
											/>
										</div>
									)}
									<div className="p-5 sm:p-6">
										<h3 className="text-lg font-semibold text-slate-900">{post.title}</h3>
										<p className="mt-3 text-sm w-full leading-6 text-slate-600 line-clamp-3">
											{post.brief}
										</p>
										<div className="mt-5 flex items-center justify-between text-xs text-slate-500">
											<span>{post.publishedAt}</span>
											<span className="font-medium text-[#2660A4]">Read post</span>
										</div>
									</div>
								</Link>
							))}
						</div>

						<div className="mt-10 flex flex-col items-center justify-between gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-4 shadow-sm sm:flex-row">
							<p className="text-sm text-slate-600">
								Page {currentPage} of {totalPages}
							</p>
							<div className="flex items-center gap-2">
								<button
									type="button"
									onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
									disabled={currentPage === 1}
									className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 disabled:cursor-not-allowed disabled:opacity-50"
								>
									Previous
								</button>
								<button
									type="button"
									onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
									disabled={currentPage === totalPages}
									className="rounded-full bg-[#2660A4] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1f4f8d] disabled:cursor-not-allowed disabled:opacity-50"
								>
									Next
								</button>
							</div>
						</div>
					</div>
				)}
			</div>

			<Footer />
		</div>
	);
}