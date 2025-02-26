import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './globals.css';
import RootRouter from './app/router';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RootRouter />
	</StrictMode>,
);
