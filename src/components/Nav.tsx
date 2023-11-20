import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icons } from './Icons';

interface NavProps {}

const Nav: FC<NavProps> = ({}) => {
  const path = useLocation().pathname;

  return (
    <header className='absolute top-0 z-50 w-full py-3 text-slate-900 shadow-sm'>
      <div className='layout flex items-center justify-between '>
        <div className={'flex gap-4'}>
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={
                path === link.href
                  ? 'font-medium text-sky-500 transition-colors underline'
                  : 'text-gray-600'
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          to='https://github.com/choiruladamm/vite-ts-tailwind-starter'
          target='_blank'
        >
          <Icons.gitHub className='h-5 w-5' />
        </Link>
      </div>
    </header>
  );
};

export default Nav;

const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/projects',
    label: 'Projects',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/about',
    label: 'About',
  },
];
