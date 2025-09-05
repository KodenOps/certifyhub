'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import kcna_questions from '@/data/kcna_questions';
import NavBar from '../NavBar';

interface Question {
	id?: string;
	question: string;
	options: string[];
	answer: number; // now using index instead of string
	short_explanation?: string;
}

const LOCAL_STORAGE_KEY = 'quizState';

const Exam = ({ questionBank, qnumber, timeTotal = 3600 }: any) => {
	const router = useRouter();

	const [timeLeft, setTimeLeft] = useState<number>(timeTotal);
	const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [selectedAnswers, setSelectedAnswers] = useState<{
		[key: number]: number;
	}>({});
	const [submittedQuestions, setSubmittedQuestions] = useState<{
		[key: number]: boolean;
	}>({});
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
	const [score, setScore] = useState<number>(0);

	// Shuffle questions
	const shuffle = (array: Question[]) => {
		const newArray = [...array];
		for (let i = newArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
		}
		return newArray;
	};

	// Load saved state or init
	useEffect(() => {
		const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (savedState) {
			const parsed = JSON.parse(savedState);
			setShuffledQuestions(parsed.shuffledQuestions);
			setCurrentIndex(parsed.currentIndex);
			setSelectedAnswers(parsed.selectedAnswers);
			setSubmittedQuestions(parsed.submittedQuestions || {});
			setScore(parsed.score);
			setTimeLeft(parsed.timeLeft);
			setIsSubmitted(!!parsed.submittedQuestions?.[parsed.currentIndex]);
		} else {
			const shuffled = shuffle(questionBank).slice(0, qnumber);
			setShuffledQuestions(shuffled);
		}
	}, []);

	// Auto-save
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

	// Timer
	useEffect(() => {
		if (timeLeft <= 0) return;
		const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
		return () => clearInterval(timer);
	}, [timeLeft]);

	// Format time
	const formatTime = (t: number): string =>
		[Math.floor(t / 3600), Math.floor((t % 3600) / 60), t % 60]
			.map((v) => (v < 10 ? `0${v}` : v))
			.join(':');

	// Handle selecting an option (store index)
	const handleOptionSelect = (optionIndex: number) => {
		if (isSubmitted) return;
		setSelectedAnswers((prev) => ({
			...prev,
			[currentIndex]: optionIndex,
		}));
	};

	// Submit current answer
	const handleSubmitAnswer = () => {
		if (selectedAnswers[currentIndex] === undefined) return;
		setSubmittedQuestions((prev) => ({
			...prev,
			[currentIndex]: true,
		}));
		setIsSubmitted(true);
	};

	// Navigation
	const handleNextQuestion = () => {
		if (!isSubmitted) return;
		const nextIndex = currentIndex + 1;
		setCurrentIndex(nextIndex);
		setIsSubmitted(!!submittedQuestions[nextIndex]);
	};

	const handlePreviousQuestion = () => {
		const prevIndex = currentIndex - 1;
		setCurrentIndex(prevIndex);
		setIsSubmitted(!!submittedQuestions[prevIndex]);
	};

	// Finish and score
	const handleFinish = () => {
		const totalScore = Object.keys(selectedAnswers).reduce((acc, key) => {
			const i = parseInt(key);
			return selectedAnswers[i] === shuffledQuestions[i].answer ? acc + 1 : acc;
		}, 0);

		localStorage.setItem('finalScore', JSON.stringify(totalScore));
		localStorage.setItem(
			'totalQuestions',
			JSON.stringify(shuffledQuestions.length)
		);
		localStorage.removeItem(LOCAL_STORAGE_KEY);
		router.push('/score');

		setTimeout(() => {
			const shuffled = shuffle(kcna_questions).slice(0, 40);
			setShuffledQuestions(shuffled);
			setCurrentIndex(0);
			setSelectedAnswers({});
			setSubmittedQuestions({});
			setIsSubmitted(false);
			setScore(0);
			setTimeLeft(3600);
		}, 500);
	};

	return (
		<div>
			<NavBar />
			{/* Top Navigation */}
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
						const selected = selectedAnswers[currentIndex] === index;
						const correct = shuffledQuestions[currentIndex].answer === index;
						const isCorrect = isSubmitted && correct;
						const isWrong = isSubmitted && selected && !correct;

						return (
							<div
								key={index}
								className={`flex items-center text-xl mb-5 p-4 cursor-pointer border 
									${isCorrect ? 'border-green-500' : ''} 
									${isWrong ? 'border-red-500' : ''} 
									${!isCorrect && !isWrong ? 'border-transparent' : ''} 
									hover:bg-gray-100 rounded-md`}
								onClick={() => handleOptionSelect(index)}>
								<input
									type='radio'
									id={`option-${index}`}
									className='w-6 h-6 accent-green-600 cursor-pointer'
									name={`question-${currentIndex}`}
									value={index}
									checked={selected}
									disabled={isSubmitted}
									onChange={() => handleOptionSelect(index)}
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

			{/* Navigation Buttons */}
			<div className='p-5 flex justify-center gap-6'>
				{/* Previous */}
				<button
					onClick={handlePreviousQuestion}
					disabled={currentIndex === 0}
					className='px-10 py-4 bg-green-600 text-white rounded-lg disabled:bg-gray-400'>
					Previous
				</button>

				{/* Submit or Next */}
				{!isSubmitted ? (
					<button
						onClick={handleSubmitAnswer}
						disabled={selectedAnswers[currentIndex] === undefined}
						className={`px-10 py-4 ${
							selectedAnswers[currentIndex] !== undefined
								? 'bg-blue-600'
								: 'bg-gray-400 cursor-not-allowed'
						} text-white rounded-lg`}>
						Submit
					</button>
				) : currentIndex < shuffledQuestions.length - 1 ? (
					<button
						onClick={handleNextQuestion}
						className='px-10 py-4 bg-green-600 text-white rounded-lg'>
						Next
					</button>
				) : (
					<button
						onClick={handleFinish}
						className='px-10 py-4 bg-red-600 text-white rounded-lg'>
						Finish
					</button>
				)}
			</div>
		</div>
	);
};

export default Exam;
