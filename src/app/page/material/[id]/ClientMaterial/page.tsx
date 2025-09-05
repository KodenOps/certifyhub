'use client';

import dynamic from 'next/dynamic';
import PptxViewer from '@/app/components/PptxViewer';

const PdfViewer = dynamic(() => import('@/app/components/PdfViewer'), {
	ssr: false,
});

export default function ClientMaterial({
	materialId,
	type,
	title,
	author,
}: {
	materialId: string;
	type: string;
	title: string;
	author: string;
}) {
	return (
		<div className='p-6'>
			<div className='my-2'>
				<h1 className='text-2xl font-bold'>{title}</h1>
				<h4 className='text-lg text-slate-300 italic'>
					Author: {author.toWellFormed()}
				</h4>
			</div>
			{type === 'pdf' && (
				<PdfViewer fileUrl={`/api/material?id=${materialId}`} />
			)}
			{type === 'pptx' && (
				<PptxViewer fileUrl={`/api/material?id=${materialId}`} />
			)}
		</div>
	);
}
