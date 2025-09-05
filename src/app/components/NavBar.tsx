'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
	FaBars,
	FaBug,
	FaHome,
	FaInfo,
	FaInfoCircle,
	FaLightbulb,
	FaTimes,
} from 'react-icons/fa';

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const closeMenu = () => setIsOpen(false);

	return (
		<nav className='h-[80px] w-full flex items-center justify-between lg:px-[100px] md:px-[50px] px-[16px] shadow-md z-50 relative'>
			{/* Logo / Brand */}
			<div className='logo md:text-2xl text-lg font-bold text-[#2660A4]'>
				<Link href='/'>
					Certify<span className='text-[#331E36]'>Hub</span>
				</Link>
			</div>

			{/* Desktop Menu */}
			<div className='hidden md:flex gap-6 text-[#282828] font-medium'>
				<Link
					href='/'
					className='hover:text-[#2660A4]'>
					Home
				</Link>
				{/* <Link
					href='/page/about'
					className='hover:text-[#2660A4]'>
					About
				</Link> */}
				<Link
					href='https://kodenops.hashnode.dev/'
					target='_blank'
					className='hover:text-[#2660A4]'>
					My Blog
				</Link>
				<Link
					href='/page/suggestion'
					className='hover:text-[#2660A4]'>
					Feature Suggestion
				</Link>

				<Link
					href='/page/report-bug'
					className='hover:text-[#2660A4]'>
					Report A bug
				</Link>
			</div>

			{/* Mobile Menu Icon */}
			<button
				className='md:hidden text-[#282828] focus:outline-none'
				onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
			</button>

			{/* Overlay */}
			{isOpen && (
				<div
					className='fixed  bg-slate-100 bg-opacity-90 z-30'
					onClick={closeMenu}></div>
			)}

			{/* Mobile Menu (slide-in) */}
			<div
				className={`md:hidden fixed top-0 right-0 h-2/3 w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
				<div className='flex flex-col p-6  mt-4 text-lg font-medium text-[#282828]'>
					<button
						onClick={closeMenu}
						className='self-end text-gray-600'>
						<FaTimes size={24} />
					</button>

					<Link
						href='/'
						className='hover:text-[#2660A4] flex items-center gap-4 py-6 border-b-2 border-[#f4f4f4] '>
						<FaHome
							size={24}
							color='#758173'
						/>
						Home
					</Link>
					{/* <Link
						href='/page/about'
						className='hover:text-[#2660A4] flex items-center gap-4 py-6 border-b-2 border-[#f4f4f4]'>
						<FaInfoCircle
							size={24}
							color='#758173'
						/>
						About
					</Link> */}
					<Link
						href='https://kodenops.hashnode.dev/'
						className='hover:text-[#2660A4] flex items-center gap-4 py-6 border-b-2 border-[#f4f4f4]'>
						<FaLightbulb
							size={24}
							color='#758173'
						/>
						My Blog
					</Link>
					<Link
						href='/page/suggestion'
						className='hover:text-[#2660A4] flex items-center gap-4 py-6 border-b-2 border-[#f4f4f4]'>
						<FaLightbulb
							size={24}
							color='#758173'
						/>
						Feature Suggestion
					</Link>
					<Link
						href='/page/report-bug'
						className='hover:text-[#2660A4] flex items-center gap-4 py-6 border-b-2 border-[#f4f4f4]'>
						<FaBug
							size={24}
							color='#758173'
						/>
						Report A bug
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
