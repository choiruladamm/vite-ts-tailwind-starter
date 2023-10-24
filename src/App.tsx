import { FC } from 'react';
import { Button } from './components/ui/button';

interface AppProps {}

const App: FC<AppProps> = () => {
	return (
		<div className='grid min-h-screen place-items-center px-10 py-4'>
			<Button>vite-ts-tailwind-starter</Button>
		</div>
	);
};

export default App;
