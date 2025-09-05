'use client';

export default function PptxViewer({ fileUrl }: { fileUrl: string }) {
	// Construct an absolute URL for Office Web Viewer
	const origin = typeof window !== 'undefined' ? window.location.origin : '';
	const fullUrl = `${origin}${fileUrl}`;

	return (
		<div className='w-full flex justify-center'>
			<iframe
				src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
					fullUrl
				)}`}
				width='100%'
				height='600'
				frameBorder='0'
			/>
		</div>
	);
}
