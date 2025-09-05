'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../NavBar';

interface Question {
	question: string;
	options: string[];
	answer: number; // index of the correct option
	short_explanation: string; // rename here to match your data
}

interface PractiseProps {
	questionBank: Question[];
	qnumber: number;
	duration?: number;
}

const LOCAL_STORAGE_KEY = 'quizState';

const Practise = ({
	questionBank,
	qnumber,
	duration = 3600,
}: PractiseProps) => {
	const router = useRouter();
	const [timeLeft, setTimeLeft] = useState<number>(duration);
	const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [selectedAnswers, setSelectedAnswers] = useState<{
		[key: number]: string;
	}>({});
	const [submittedQuestions, setSubmittedQuestions] = useState<{
		[key: number]: boolean;
	}>({});
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
	const [score, setScore] = useState<number>(0);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	// shuffle helper
	const shuffle = (array: Question[]) => {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	};

	// restore state or shuffle questions
	useEffect(() => {
		const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (saved) {
			const parsed = JSON.parse(saved);
			setShuffledQuestions(parsed.shuffledQuestions);
			setCurrentIndex(parsed.currentIndex);
			setSelectedAnswers(parsed.selectedAnswers);
			setSubmittedQuestions(parsed.submittedQuestions || {});
			setIsSubmitted(!!parsed.submittedQuestions?.[parsed.currentIndex]);
			setTimeLeft(parsed.timeLeft);
			setScore(parsed.score);
		} else {
			const shuffled = shuffle(questionBank).slice(0, qnumber);
			setShuffledQuestions(shuffled);
		}
	}, [questionBank, qnumber]);

	// persist state
	useEffect(() => {
		if (shuffledQuestions.length > 0) {
			localStorage.setItem(
				LOCAL_STORAGE_KEY,
				JSON.stringify({
					shuffledQuestions,
					currentIndex,
					selectedAnswers,
					submittedQuestions,
					score,
					timeLeft,
				})
			);
		}
	}, [
		shuffledQuestions,
		currentIndex,
		selectedAnswers,
		submittedQuestions,
		score,
		timeLeft,
	]);

	// countdown
	useEffect(() => {
		if (timeLeft === 0) {
			handleFinish();
			return;
		}
		const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
		return () => clearInterval(timer);
	}, [timeLeft]);

	const formatTime = (t: number): string =>
		[Math.floor(t / 3600), Math.floor((t % 3600) / 60), t % 60]
			.map((v) => (v < 10 ? `0${v}` : v))
			.join(':');

	const handleOptionSelect = (option: string) => {
		if (isSubmitted) return;
		setSelectedAnswers((prev) => ({
			...prev,
			[currentIndex]: option,
		}));
	};

	const handleSubmitAnswer = () => {
		if (!selectedAnswers[currentIndex]) return;
		const isCorrect =
			selectedAnswers[currentIndex] ===
			shuffledQuestions[currentIndex].options[
				shuffledQuestions[currentIndex].answer
			];

		setScore((prev) => prev + (isCorrect ? 1 : 0));
		setSubmittedQuestions((prev) => ({ ...prev, [currentIndex]: true }));
		setIsSubmitted(true);
		setIsModalOpen(true);
	};

	const handleMove = (direction: 'prev' | 'next') => {
		const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
		if (newIndex >= 0 && newIndex < shuffledQuestions.length) {
			setCurrentIndex(newIndex);
			const alreadySubmitted = !!submittedQuestions[newIndex];
			setIsSubmitted(alreadySubmitted);
			setIsModalOpen(alreadySubmitted); // show modal if already answered
		}
	};

	const handleFinish = () => {
		localStorage.setItem('finalScore', JSON.stringify(score));
		localStorage.setItem(
			'totalQuestions',
			JSON.stringify(shuffledQuestions.length)
		);
		localStorage.removeItem(LOCAL_STORAGE_KEY);
		router.push('/score');
	};

	return (
		<div>
			<NavBar />
			{/* Top Bar */}
			<div className='topNav md:py-5 py-4 md:px-20 px-6 shadow-md w-full bg-white flex justify-between items-center'>
				<div className='text-2xl text-green-600'>
					Q{currentIndex + 1}/
					<span className='text-lg text-gray-400'>
						{shuffledQuestions.length}
					</span>
				</div>
				<div className='text-2xl font-mono text-gray-400'>
					{formatTime(timeLeft)}
				</div>
			</div>

			{/* Question */}
			<div className='p-5 text-xl'>
				{shuffledQuestions.length > 0 &&
					shuffledQuestions[currentIndex].question}
			</div>

			{/* Options */}
			<div className='p-5'>
				{shuffledQuestions.length > 0 &&
					shuffledQuestions[currentIndex].options.map((option, index) => {
						const selected = selectedAnswers[currentIndex] === option;
						const correct =
							shuffledQuestions[currentIndex].options[
								shuffledQuestions[currentIndex].answer
							] === option;
						const isCorrect = isSubmitted && correct;
						const isWrong = isSubmitted && selected && !correct;

						return (
							<div
								key={index}
								className={`flex items-center text-xl mb-5 p-4 cursor-pointer border 
            ${isCorrect ? 'border-green-500' : ''} 
            ${isWrong ? 'border-red-500' : ''} 
            ${!isCorrect && !isWrong ? 'border-transparent' : ''} 
            hover:bg-gray-100 rounded-md`}>
								<input
									type='radio'
									id={`option-${index}`}
									className='w-6 h-6 accent-green-600 cursor-pointer'
									name={`question-${currentIndex}`}
									value={option}
									checked={selected}
									disabled={isSubmitted}
									onChange={() => handleOptionSelect(option)}
								/>
								<label
									htmlFor={`option-${index}`}
									className='ml-2 cursor-pointer'>
									{option}
								</label>
							</div>
						);
					})}
			</div>

			{/* Submit Button */}
			{!isSubmitted && (
				<div className='p-5 flex justify-center'>
					<button
						onClick={handleSubmitAnswer}
						disabled={!selectedAnswers[currentIndex]}
						className={`px-10 py-4 ${
							selectedAnswers[currentIndex]
								? 'bg-blue-600'
								: 'bg-gray-400 cursor-not-allowed'
						} text-white rounded-lg`}>
						Submit
					</button>
				</div>
			)}

			{/* Modal */}
			{isModalOpen && (
				<div
					className={`w-full px-4 py-6 bg-white border-t mt-4 
            md:fixed md:inset-0 md:flex md:items-center md:justify-center 
            md:bg-[#0009] md:bg-opacity-50 md:z-50`}>
					<div className='bg-white p-6 rounded-lg shadow-lg w-full md:w-96 text-center'>
						<h2 className='text-xl font-semibold text-green-700 mb-2'>
							✨ Notification ✨
						</h2>
						<div className='flex items-center justify-center mb-3'>
							{selectedAnswers[currentIndex] ===
							shuffledQuestions[currentIndex].options[
								shuffledQuestions[currentIndex].answer
							] ? (
								<p className='text-green-600 font-semibold'>
									✅ You got it right!
								</p>
							) : (
								<p className='text-red-600 font-semibold'>❌ Incorrect</p>
							)}
						</div>
						<p className='text-gray-700'>
							{shuffledQuestions[currentIndex].short_explanation}
						</p>

						<div className='mt-4 flex justify-between gap-4'>
							{currentIndex > 0 && (
								<button
									onClick={() => handleMove('prev')}
									className='px-6 py-2 bg-gray-600 text-white rounded-lg'>
									Previous
								</button>
							)}
							{currentIndex < shuffledQuestions.length - 1 ? (
								<button
									onClick={() => handleMove('next')}
									className='px-6 py-2 bg-green-600 text-white rounded-lg'>
									Next
								</button>
							) : (
								<button
									onClick={handleFinish}
									className='px-6 py-2 bg-red-600 text-white rounded-lg'>
									Finish
								</button>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Practise;
