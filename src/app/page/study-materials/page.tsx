import NavBar from '@/app/components/NavBar';
import Link from 'next/link';
import React from 'react';
import { FaBook } from 'react-icons/fa';

interface Material {
	id: string;
	title: string;
	type: 'pdf' | 'pptx';
	linkToFile?: string;
	colour: string;
}

const Page = () => {
	const materials: Material[] = [
		{
			id: '1',
			title: 'Exam Guidelines',
			type: 'pdf',
			colour: '#2660A4',
		},
		{
			id: '2',
			title: 'ITIL Foundation Textbook',
			type: 'pdf',

			colour: '#26a465',
		},
		{
			id: '3',
			title: 'ITIL Foundation Exam Study',
			type: 'pdf',

			colour: '#171738',
		},
		{
			id: '4',
			title: 'ITIL Foundation Slide',
			type: 'pdf',

			colour: '#333',
		},
	];

	return (
		<div className='w-full'>
			<NavBar />
			<section className='w-full h-full flex md:items-start mt-[40px] overflow-auto min-h-screen justify-center'>
				<div className='w-full h-full '>
					<div className='title items-center flex flex-col'>
						<h3 className='text-[#2660A4] font-bold md:text-4xl text-2xl text-center'>
							Study Materials
						</h3>
						<p className='md:text-xl text-center mt-4 md:px-10 px-6 md:w-[70vw] w-full text-[#696969] font-medium'>
							Here you can find various study materials files to help you
							prepare for your ITIL exam.
						</p>

						<div className='flex flex-wrap items-center justify-center w-full mt-6 gap-4'>
							{materials.map((material) => (
								<Link
									key={material.id}
									href={`/page/material/${material.id}`}
									style={{ backgroundColor: material.colour }}
									className='cursor-pointer h-[240px] md:w-[200px] w-[160px]  rounded-sm   font-bold text-[#696969]  relative px-2'>
									<div className=' h-full flex items-center justify-center flex-col w-full'>
										<FaBook
											size={60}
											color='#fff'
											className='mb-8'
										/>
										<h3 className='text-[#ffffff] text-lg  w-full text-center'>
											{material.title} <br /> ({material.type.toUpperCase()})
										</h3>
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			</section>
			<div className='w-full flex justify-center'>
				<a
					href='/'
					className='text-lg text-center w-full  text-blue-600 underline mt-6 p-4 cursor-pointer'>
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
	);
};

export default Page;
