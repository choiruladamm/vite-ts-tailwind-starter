import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from './Icons';

interface NavProps {}

const Nav: FC<NavProps> = ({}) => {
  return (
    <header className='absolute top-0 z-50 w-full text-slate-900 py-3 shadow-sm'>
      <div className='layout flex justify-between items-center '>
        <div className='flex gap-4'>
          <Link to='/'>Home</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/about'>About</Link>
        </div>
        <Link to='https://github.com/choiruladamm/vite-ts-tailwind-starter' target='_blank'>
          <Icons.gitHub className='h-5 w-5' />
        </Link>
      </div>
    </header>
  );
};

export default Nav;
