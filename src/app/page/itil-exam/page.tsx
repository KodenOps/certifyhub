'use client';
import React, { useEffect } from 'react';
import { itilQuestions } from '@/data/questionBank';
import Exam from '@/app/components/questions/Exam';
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
				questionBank={itilQuestions}
				qnumber={40}
			/>
		</div>
	);
};

export default page;
