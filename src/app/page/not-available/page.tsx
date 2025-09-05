'use client';
import NavBar from '@/app/components/NavBar';
import React from 'react';
import UseAnimations from 'react-useanimations';
import loading2 from 'react-useanimations/lib/loading2';

const page = () => {
	return (
		<div>
			<NavBar />
			<div className='w-full h-full  md:items-start mt-[40px] overflow-hidden justify-center'>
				<h3 className='text-xl font-bold capitalize text-[#6D2E46] text-center w-full'>
					Page Build still in Progress 🚧
				</h3>
				<div className='w-full flex justify-center items-center'>
					<UseAnimations
						animation={loading2}
						size={400}
					/>
				</div>
			</div>
		</div>
	);
};

export default page;
