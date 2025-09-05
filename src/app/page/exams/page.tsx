// import React from 'react';

// const page = () => {
// 	let exams = [
// 		{
// 			path: '/page/itil-exam',
//
// 			mode: 'Full Exam Mode',
// 		},
// 		{
// 			path: '/page/itil-practise',
//
// 			mode: 'Partial Exam Mode',
// 		},
// 		{
// 			path: '/page/itil-practise-extended',
//
// 			mode: 'Extended Question Bank',
// 		}
// 	];
// 	return <div>page</div>;
// };

// export default page;
// app/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '@/app/components/NavBar';
import { FaThermometerFull } from 'react-icons/fa';

const Page = () => {
	const [loading, setLoading] = useState(true);
	const [authenticated, setAuthenticated] = useState(false);
	const router = useRouter();

	const handleNavigation = (path: string) => {
		localStorage.clear();
		router.push(path);
	};

	return (
		<div>
			<NavBar />
			<div className='w-full h-full flex  md:items-start mt-[40px] overflow-auto min-h-screen justify-center'>
				{/* The rest of your protected content */}
				<div className='title items-center flex flex-col'>
					<h3 className='text-[#2660A4] font-bold md:text-4xl text-2xl text-center'>
						Welcome To Your Exam Section
					</h3>
					<p className='md:text-xl text-center mt-4 md:px-10 px-6 md:w-[70vw] w-full text-[#696969] font-medium'>
						Get ready for your ITIL exam your way. Take a full timed simulation,
						try a quick practice with instant feedback, or drill through the
						entire question bank for maximum prep.
					</p>

					<div className='flex flex-wrap items-center justify-center w-full mt-6 gap-4'>
						{[
							{
								path: '/page/itil-exam',

								mode: 'Full Exam Mode',
								IconName: FaThermometerFull,
								colour: '#2660A4',
							},
							{
								path: '/page/itil-practise',

								mode: 'Partial Exam Mode',
								IconName: FaThermometerFull,
								colour: '#26a465',
							},
							{
								path: '/page/itil-practise-extended',

								mode: 'Extended Question Bank',
								IconName: FaThermometerFull,
								colour: '#333',
							},
						].map(({ path, mode, IconName, colour }) => (
							<div
								key={mode}
								onClick={() => handleNavigation(path)}
								style={{ backgroundColor: colour }}
								className='cursor-pointer h-[180px] md:w-[200px] w-[160px]  rounded-sm   font-bold text-[#696969]  relative px-2'>
								<div className=' h-full flex items-center justify-center flex-col w-full'>
									<IconName
										size={40}
										color='#fff'
										className='mb-8'
									/>
									<h3 className='text-[#ffffff] md:text-2xl text-xl  w-full bottom-8 text-center'>
										{mode}
									</h3>
								</div>
							</div>
						))}
					</div>
					<a
						href='/'
						className='text-lg text-blue-600 underline mt-6 p-4 cursor-pointer'>
						Go back Home
					</a>
				</div>

				<p className='fixed bottom-0 py-4 text-center bg-[#f4f4f4] w-full'>
					Created by{' '}
					<a
						href='https://www.linkedin.com/in/femi-fadiya-segun-pelumi'
						className='underline text-blue-600'>
						Kode-N-Ops
					</a>
					❤
				</p>
			</div>
		</div>
	);
};

export default Page;
