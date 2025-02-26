import { SiteHead } from '@/components';
import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
	return (
		<SiteHead title='Home'>
			<div className='layout relative flex min-h-screen flex-col items-center justify-center gap-6 text-center'>
				<div className='flex gap-4'>
					<Icons.bolt className='logo-bolt h-16 w-16 animate-pulse cursor-pointer' />
					<Icons.react className='logo-react animate-spin-slow h-16 w-16 cursor-pointer text-sky-500' />
				</div>
				<div className='flex flex-col items-center gap-4 md:gap-2'>
					<h1 className={cn('text-3xl')}>
						React.js + Tailwind CSS + TypeScript Starter
					</h1>
					<p className='max-w-3xl text-gray-600'>
						A starter for React.js, Tailwind CSS, and TypeScript with{' '}
						<a
							target='_blank'
							href='https://ui.shadcn.com/'
							className='cursor-pointer font-semibold text-slate-900 hover:text-sky-600 hover:underline'
						>
							shadcnui,
						</a>{' '}
						Beautifully designed components built with Radix UI and Tailwind
						CSS.
					</p>
					<a
						href='https://github.com/choiruladamm/vite-ts-tailwind-starter'
						target='_blank'
						className={cn(
							buttonVariants({ variant: 'link' }),
							'hover:text-sky-600',
						)}
					>
						See the repository
					</a>
				</div>
				<footer className='absolute bottom-2 flex gap-1 text-gray-600'>
					© {new Date().getFullYear()} By
					<a
						href='https://choiruladamm.vercel.app/'
						target='_blank'
						className='cursor-pointer font-semibold hover:text-sky-600 hover:underline'
					>
						Choirul Adamm
					</a>
				</footer>
			</div>
		</SiteHead>
	);
};

export default HomePage;
