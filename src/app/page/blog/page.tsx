import NavBar from '@/app/components/NavBar';
import { fetchHashnode } from '@/app/api/hashnode/hashnode';
import { ALL_POSTS_WITH_COVER } from '@/app/api/hashnode/queries';
import Link from 'next/link';
import Footer from '@/app/components/Footer';

type Post = {
	title: string;
	slug: string;
	brief: string;
	publishedAt: string;
	url: string;
	coverImage?: {
		url: string;
	} | null;
};
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const page = async () => {
	const data = await fetchHashnode<{
		publication: {
			posts: {
				edges: { node: Post }[];
			};
		};
	}>(ALL_POSTS_WITH_COVER, { first: 10 });

	const posts = data.publication.posts.edges.map((e) => e.node);

	return (
		<div className='h-screen w-full'>
			<NavBar />
			<div className='main w-full pb-40 md:pb-10 '>
				<h2 className='md:text-2xl lg:text-3xl text-xl font-bold text-center mt-8 text-[#2660A4]'>
					Welcome to My Blog
				</h2>
				<p className='w-[80%] mx-[10%] text-center text-lg mt-4'>
					Here are some of my latest blog posts on Hashnode. Click on any post,
					and dive into the world of coding, technology, and more!
				</p>
				<div className='bloglist flex flex-wrap justify-center mt-8 gap-8 px-4'>
					{posts.map((post) => (
						<Link
							key={post.slug}
							href={post.url}
							target='_blank'
							className='blog-item border-[#c4c4c4] border-2 rounded-lg p-4 w-[300px] hover:shadow-lg hover:border-[#2660A4] transition-all duration-300'>
							<img
								src={post.coverImage?.url || ''}
								className='h-50 w-100'
								alt={post.title}
							/>
							<h3 className='text-lg font-medium'>{post.title}</h3>
						</Link>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default page;
