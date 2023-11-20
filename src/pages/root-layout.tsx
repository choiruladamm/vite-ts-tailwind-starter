import Nav from '@/components/Nav';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = ({}) => {
  return (
    <div>
      <Nav />
      <div className='grid min-h-screen place-items-center'>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
