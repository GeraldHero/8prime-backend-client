import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  // It will reroute after 1 sec to homepage if page not found.
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
      // navigate(-1); - Back to previous page
    }, 3000);
  }, []);

  return <div>NotFound</div>;
}

export default NotFound;
