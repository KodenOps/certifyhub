'use client';
import React, { useEffect } from 'react';
import kcna_question from '@/data/kcna_questions';
import Exam from '@/app/components/practise/Practice-index';
const page = () => {
	useEffect(() => {
		// Check if localStorage is available
		if (typeof localStorage === 'undefined') {
			console.warn('localStorage is not available in this environment.');
		} else {
			localStorage.clear();
		}
	}, []);
	return (
		<div>
			<Exam
				questionBank={kcna_question}
				qnumber={60}
				duration={5400}
			/>
		</div>
	);
};

export default page;
