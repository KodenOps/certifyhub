'use client';
import React from 'react';
import Script from 'next/script';
import NavBar from '@/app/components/NavBar';

const Page = () => {
	return (
		<div className='w-full h-auto min-h-screen '>
			<NavBar />
			<h3 className='text-xl font-bold text-[#2660A4] text-center mt-[50px] px-8 mb-2'>
				Don't Overlook Bugs! Report Them Here 🐞
			</h3>
			{/* visme form */}
			<div className='w-full iframe  md:px-4 md:mt-[-5%] mt-[-40%] px-2 h-auto flex justify-center items-center'>
				<div
					className='visme_d w-screen h-full bg-red-500'
					data-title='Suggestion Form'
					data-url='33pv4vm4-report-a-bug?fullPage=true'
					data-domain='forms'
					data-full-page='false'
					data-min-height='90vh'
					data-form-id='144054'></div>
			</div>

			{/* Load Visme Embed Script */}
			<Script
				src='https://static-bundles.visme.co/forms/vismeforms-embed.js'
				strategy='lazyOnload'
			/>
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
	);
};

export default Page;
