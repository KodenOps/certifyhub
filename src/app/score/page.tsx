'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
	const router = useRouter();
	const [finalScore, setFinalScore] = useState<number | null>(null);
	const [totalQuestions, setTotalQuestions] = useState<number | null>(null);

	useEffect(() => {
		// Retrieve score and total questions from localStorage
		const storedScore = localStorage.getItem('finalScore');
		const storedTotal = localStorage.getItem('totalQuestions');

		if (storedScore && storedTotal) {
			setFinalScore(JSON.parse(storedScore));
			setTotalQuestions(JSON.parse(storedTotal));
		} else {
			// If no data found, redirect to home
			router.push('/');
		}
	}, [router]);

	const percentage =
		finalScore !== null && totalQuestions !== null
			? (finalScore / totalQuestions) * 100
			: null;

	return (
		<div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
			<h1 className='text-3xl font-bold text-[#2660A4]'>Exam Completed!</h1>

			{/* {percentage !== null && (
				<div className=' h-[250px] bg-slate-400 '>
					<p className='font-bold text-2xl p-4 my-4 bg-green-400'>
						Score: {percentage.toFixed()}%
					</p>
					<p className='mt-4 text-xl'>
						Correct Answer: {finalScore}
						<br />
						Total Questions: {totalQuestions}
					</p>
				</div>
			)} */}
			{percentage !== null ? (
				percentage < 65 ? (
					<p className='text-xl italic mt-4'>Olodo! You fail o! </p>
				) : (
					<p className='text-xl italic mt-4'>
						Smart Chap! Keep it up. Keep practicing
					</p>
				)
			) : (
				<p className='text-xl mt-6'>Loading...</p>
			)}
			<div className='md:w-[500px] flex justify-center gap-8  w-[90%] shadow-md shadow-blue-200   h-[160px] my-8'>
				<div className='flex flex-col justify-center w-[140px] bg-[#212932] px-4 py-10 rounded-b-full'>
					<h4 className='text-lg font-semibold w-full  text-center text-[#b4d7ff]'>
						Your Score:
					</h4>
					<h2 className='text-4xl font-bold w-full text-center text-[#f4f4f4] '>
						{finalScore}/{totalQuestions}
					</h2>
				</div>
				<div className='flex flex-col justify-center w-[140px] bg-[#323260] px-4 py-10 rounded-t-full'>
					<h4 className='text-lg font-semibold w-full  text-center text-[#b4d7ff]'>
						Percentage:
					</h4>
					{percentage !== null && (
						<h2 className='text-4xl font-bold w-full text-center text-[#f4f4f4] '>
							{percentage.toFixed()}%
						</h2>
					)}
				</div>
			</div>

			<button
				onClick={() => {
					localStorage.clear(); // Clear all data from localStorage
					router.push('/'); // Navigate to home
				}}
				className='mt-6 px-6 py-3 bg-[#2660A4] font-semibold text-white rounded-lg md:w-auto w-[80vw]'>
				Go to Home
			</button>
		</div>
	);
};

export default Page;
