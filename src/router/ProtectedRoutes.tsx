import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, ...props }: {isLoggedIn:boolean}) => {
  return isLoggedIn ? (
    <Route {...props} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;