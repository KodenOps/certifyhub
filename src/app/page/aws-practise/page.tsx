'use client';
import React, { useEffect } from 'react';
import { aws_question_bank } from '@/data/aws_question';
import Exam from '@/app/components/questions/Exam';
import Practise from '@/app/components/practise/Practice';
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
			<Practise
				questionBank={aws_question_bank}
				qnumber={60}
			/>
		</div>
	);
};

export default page;
