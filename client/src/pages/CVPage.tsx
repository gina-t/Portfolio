import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CVDownload } from '../components/CVDownload';
import Auth from '../utils/auth';

function CVPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.isAuthenticated()) {
      navigate('/login', { state: { from: '/cv-download' } });
    }
  }, [navigate]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Curriculum Vitae
      </h1>
      <CVDownload />
    </div>
  );
}

export default CVPage;
