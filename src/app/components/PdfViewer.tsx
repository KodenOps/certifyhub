'use client';

import { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '@/styles/pdf-viewer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

// Point to public folder version — must be a plain string URL
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

export default function PdfViewer({ fileUrl }: { fileUrl: string }) {
	const [numPages, setNumPages] = useState<number>(0);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [pageInput, setPageInput] = useState<string>('1');
	const [containerWidth, setContainerWidth] = useState<number>(800);

	const containerRef = useRef<HTMLDivElement>(null);
	const pageRefs = useRef<(HTMLDivElement | null)[]>([]);

	// Adjust width on mount and resize
	useEffect(() => {
		const updateWidth = () => {
			if (containerRef.current) {
				const width = containerRef.current.offsetWidth;
				setContainerWidth(width > 800 ? 800 : width);
			}
		};
		updateWidth();
		window.addEventListener('resize', updateWidth);
		return () => window.removeEventListener('resize', updateWidth);
	}, []);

	// Scroll to a specific page
	const scrollToPage = (page: number) => {
		if (page >= 1 && page <= numPages) {
			const target = pageRefs.current[page - 1];
			if (target) {
				target.scrollIntoView({ behavior: 'smooth', block: 'start' });
				setCurrentPage(page);
				setPageInput(String(page));
			}
		}
	};

	// Input handling
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPageInput(e.target.value);
	};

	const handleInputBlur = () => {
		const value = parseInt(pageInput, 10);
		if (!isNaN(value)) scrollToPage(value);
		else setPageInput(String(currentPage));
	};

	const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			const value = parseInt(pageInput, 10);
			if (!isNaN(value)) scrollToPage(value);
			else setPageInput(String(currentPage));
		}
	};

	const handlePrev = () => {
		if (currentPage > 1) scrollToPage(currentPage - 1);
	};

	const handleNext = () => {
		if (currentPage < numPages) scrollToPage(currentPage + 1);
	};

	// Sync pageInput with manual scroll
	useEffect(() => {
		if (!containerRef.current || pageRefs.current.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const index = pageRefs.current.indexOf(
							entry.target as HTMLDivElement
						);
						if (index !== -1 && currentPage !== index + 1) {
							setCurrentPage(index + 1);
							setPageInput(String(index + 1));
						}
					}
				});
			},
			{
				root: containerRef.current,
				rootMargin: '-50% 0px -50% 0px', // triggers when page center crosses container center
				threshold: 0,
			}
		);

		pageRefs.current.forEach((page) => {
			if (page) observer.observe(page);
		});

		return () => {
			pageRefs.current.forEach((page) => {
				if (page) observer.unobserve(page);
			});
		};
	}, [numPages, currentPage]);

	return (
		<div
			ref={containerRef}
			className='flex flex-col items-center w-full px-2 overflow-y-auto'
			onContextMenu={(e) => e.preventDefault()}
			style={{ height: '100vh' }} // ensure container scroll works
		>
			<Document
				file={fileUrl}
				onLoadSuccess={({ numPages }) => setNumPages(numPages)}
				loading={<div className='text-gray-500'>Loading PDF...</div>}>
				{Array.from({ length: numPages }, (_, idx) => (
					<div
						key={idx}
						ref={(el) => {
							pageRefs.current[idx] = el;
						}}
						className='mb-4'>
						<Page
							pageNumber={idx + 1}
							width={containerWidth}
						/>
					</div>
				))}
			</Document>

			{/* Navigation controls */}
			{numPages > 0 && (
				<div className='mt-4 flex items-center gap-3 fixed bottom-8 bg-white p-2 rounded shadow text-black'>
					<button
						onClick={handlePrev}
						disabled={currentPage === 1}
						className='px-3 py-1 bg-gray-200 rounded disabled:opacity-50'>
						Prev
					</button>

					<label
						htmlFor='jump-page'
						className='text-sm'>
						Page:
					</label>
					<input
						id='jump-page'
						type='number'
						min={1}
						max={numPages}
						value={pageInput}
						onChange={handleInputChange}
						onBlur={handleInputBlur}
						onKeyDown={handleInputKeyDown}
						className='w-16 text-center border rounded text-black'
					/>
					<span>/ {numPages}</span>

					<button
						onClick={handleNext}
						disabled={currentPage === numPages}
						className='px-3 py-1 bg-gray-200 rounded disabled:opacity-50'>
						Next
					</button>
				</div>
			)}
		</div>
	);
}
