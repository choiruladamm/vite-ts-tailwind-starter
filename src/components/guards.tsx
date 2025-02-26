import { isAuthenticated } from '@/lib/utils';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const ProtectedRoute: React.FC = ({}) => {
	const location = useLocation();
	if (!isAuthenticated()) {
		return <Navigate to='/auth' state={{ from: location }} replace />;
	}
	return <Outlet />;
};

export const AuthRoute: React.FC = ({}) => {
	const location = useLocation();
	if (isAuthenticated()) {
		return <Navigate to='/' state={{ from: location }} replace />;
	}
	return <Outlet />;
};
