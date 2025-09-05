declare module 'pptx-preview' {
	const pptxPreview: {
		load(fileUrl: string): Promise<any>;
		render(ppt: any, container: HTMLElement): void;
	};
	export default pptxPreview;
}
