import { useState, useEffect } from 'react';
import { createContext } from 'react';
import { IUploadFile, _initialUploadFile } from './interfaces';

interface IAppContext {
	appTitle: string;
	uploadFile: IUploadFile;
	setUploadFile: (file: IUploadFile) => void;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [uploadFile, setUploadFile] = useState<IUploadFile>({
		..._initialUploadFile,
	});
	const appTitle = 'File Uploader';

	return (
		<AppContext.Provider
			value={{
				appTitle,
				uploadFile,
				setUploadFile,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
