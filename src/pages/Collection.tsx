
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Collection: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to collection selector since we now have separate collections
    navigate('/collection/selector', { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-saints-dark text-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">Redirecting to Collection Selector...</h2>
        <div className="animate-pulse">Loading...</div>
      </div>
    </div>
  );
};

export default Collection;
