export interface IFileItem {
	title: string;
	description: string;
	notes: string;
	fileName: string;
	iconPathAndFileName: string;
}

export interface IFormFields {
	title: string;
	description: string;
	notes: string;
}

export interface IUploadFile {
	preview: string;
	// name: string;
	// data: string;
	file: File | null;
}

export const _initialFormFields = {
	title: '',
	description: '',
	notes: '',
};
export const _initialUploadFile = {
	preview: '',
	// name: '',
	file: null,
};
