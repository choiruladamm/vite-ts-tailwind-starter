import { Button } from '@/components/ui/button';
import { ArrowLeft, Ghost, Home } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
interface NotFoundPageProps {}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({}) => {
	return (
		<div className='flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-4'>
			<div className='w-full max-w-lg px-4 text-center md:max-w-2xl md:px-8'>
				<div className='relative mb-8 md:mb-12'>
					{/* Ghost animation container */}
					<div className='animate-bounce'>
						<Ghost className='mx-auto h-16 w-16 md:h-24 md:w-24' />
					</div>

					{/* Decorative circles */}
					<div className='absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-100 opacity-20 blur-xl md:h-64 md:w-64'></div>
					<div className='absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-100 opacity-20 blur-xl md:h-48 md:w-48'></div>
				</div>

				<h1 className='mb-2 text-4xl font-bold text-gray-900 md:mb-4 md:text-6xl'>
					404
				</h1>
				<h2 className='mb-3 text-2xl font-semibold text-gray-800 md:mb-4 md:text-3xl'>
					Page Not Found
				</h2>
				<p className='mx-auto mb-6 max-w-md text-sm text-gray-600 md:mb-8 md:text-base'>
					Oops! The page you're looking for seems to have vanished into thin
					air. Don't worry, you can find your way back home.
				</p>

				<div className='flex flex-col justify-center gap-3 sm:flex-row'>
					<Button asChild>
						<Link to='/'>
							<Home className='mr-2 h-4 w-4' />
							Go Home
						</Link>
					</Button>
					<Button variant='outline' onClick={() => window.history.back()}>
						<ArrowLeft className='mr-2 h-4 w-4' />
						Go Back
					</Button>
				</div>
			</div>
		</div>
	);
};
