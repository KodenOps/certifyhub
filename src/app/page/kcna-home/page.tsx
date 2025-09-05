// app/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '@/app/components/NavBar';
import { GiPaper } from 'react-icons/gi';
import { BiBook } from 'react-icons/bi';
import { MdOutlineQuiz } from 'react-icons/md';

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
			<div className='w-full min-h-screen flex  md:items-start mt-[40px] overflow-hidden justify-center'>
				{/* The rest of your protected content */}
				<div className='title items-center flex flex-col'>
					<h3 className='text-[#2660A4] font-bold md:text-4xl text-2xl md:px-10 px-6 text-center'>
						KCNA Exam Prep Corner
					</h3>
					<p className='md:text-xl text-center mt-4 md:px-10 px-6 md:w-[70vw] w-full text-[#696969] font-medium'>
						This is a solution to properly prepare you for your KCNA exam. You
						have access to full and partial exam modes, an extended question
						bank, and study materials to help you prepare well for you upcoming
						exams. The class slide is present in the study material page.
					</p>

					<div className='flex flex-wrap items-center justify-center w-full mt-6 gap-4'>
						{[
							{
								path: '/page/kcna-exam',
								label: 'Full Exam Mode',
								IconName: MdOutlineQuiz,
								colour: '#2660A4',
							},
							{
								path: '/page/kcna-practice',
								label: 'Partial Exam Mode',
								IconName: MdOutlineQuiz,
								colour: '#212932',
							},
							{
								path: '/page/not-available',
								label: 'Study Material',
								IconName: BiBook,
								colour: '#26a465',
							},
						].map(({ path, label, IconName, colour }) => (
							<div
								key={label}
								onClick={() => handleNavigation(path)}
								style={{ backgroundColor: colour }}
								className='cursor-pointer h-[160px] md:w-[200px] w-[160px]  rounded-sm   font-bold text-[#696969]  relative px-2'>
								<div className=' h-full flex items-center justify-center flex-col w-full'>
									<IconName
										size={60}
										color='#fff'
										className='mb-4'
									/>
									<h3 className='text-[#ffffff] text-xl  w-full bottom-8 text-center'>
										{label}
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
