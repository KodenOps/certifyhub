'use client';
import Practise from '@/app/components/practise/Practice';
import React, { useEffect } from 'react';
import { itilQuestions } from '@/data/questionBank';
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
				questionBank={itilQuestions}
				qnumber={40}
				duration={3600}
			/>
		</div>
	);
};

export default page;
