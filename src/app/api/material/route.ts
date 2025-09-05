import { NextRequest, NextResponse } from 'next/server';
import { createReadStream, existsSync } from 'fs';
import { join } from 'path';

// This points to your folder outside /public
const MATERIALS_DIR = join(process.cwd(), 'secured_files');

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const id = searchParams.get('id');

	if (!id) {
		return NextResponse.json({ error: 'Missing file ID' }, { status: 400 });
	}

	// Map IDs to actual file names
	const files: Record<string, string> = {
		'1': 'exam_guideline.pdf',
		'2': 'itil-textbook.pdf',
		'3': 'itil-study.pdf',
		'4': 'itil-slides.pdf',
	};

	const fileName = files[id];
	if (!fileName) {
		return NextResponse.json({ error: 'File not found' }, { status: 404 });
	}

	const filePath = join(MATERIALS_DIR, fileName);

	if (!existsSync(filePath)) {
		return NextResponse.json(
			{ error: 'File missing on server' },
			{ status: 404 }
		);
	}

	// Stream the file back to the client
	const stream = createReadStream(filePath);
	return new NextResponse(stream as any, {
		headers: {
			'Content-Type': fileName.endsWith('.pdf')
				? 'application/pdf'
				: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
			'Content-Disposition': `inline; filename="${fileName}"`,
		},
	});
}
