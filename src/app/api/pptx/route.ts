import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const id = searchParams.get('id');

	if (!id) {
		return NextResponse.json({ error: 'No file ID provided' }, { status: 400 });
	}

	const filePath = path.join(process.cwd(), 'secure-materials', `${id}.pptx`);

	if (!fs.existsSync(filePath)) {
		return NextResponse.json({ error: 'File not found' }, { status: 404 });
	}

	const fileBuffer = fs.readFileSync(filePath);

	return new NextResponse(fileBuffer, {
		headers: {
			'Content-Type':
				'application/vnd.openxmlformats-officedocument.presentationml.presentation',
			'Content-Disposition': 'inline',
		},
	});
}
