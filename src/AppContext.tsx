import { useState, useEffect } from 'react';
import { createContext } from 'react';
import {
	IFileItem,
	IFormFields,
	IUploadFile,
	_initialFormFields,
	_initialUploadFile,
} from './interfaces';
import axios from 'axios';
import { backendUrl } from './config';

interface IAppContext {
	appTitle: string;
	uploadFile: IUploadFile;
	setUploadFile: (file: IUploadFile) => void;
	formFields: IFormFields;
	setFormFields: (file: IFormFields) => void;
	fileItems: IFileItem[];
	setFileItems: (items: IFileItem[]) => void;
	fetchFileItems: () => void;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [uploadFile, setUploadFile] = useState<IUploadFile>({
		..._initialUploadFile,
	});
	const [formFields, setFormFields] = useState<IFormFields>({
		..._initialFormFields,
	});

	const [fileItems, setFileItems] = useState<IFileItem[]>([]);

	const appTitle = 'File Uploader';

	const fetchFileItems = () => {
		(async () => {
			setFileItems((await axios.get(`${backendUrl}/fileitems`)).data);
		})();
	};

	useEffect(() => {
		fetchFileItems();
	}, []);

	return (
		<AppContext.Provider
			value={{
				appTitle,
				uploadFile,
				setUploadFile,
				formFields,
				setFormFields,
				fileItems,
				setFileItems,
				fetchFileItems,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
