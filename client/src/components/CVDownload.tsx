import { useState } from 'react';
import axios from 'axios';
import Auth from '../utils/auth';

export function CVDownload() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      // Use Auth token for authorization
      const token = Auth.getToken();
      
      // Make authenticated request to download endpoint
      const response = await axios({
        url: '/api/cv/download',
        method: 'GET',
        responseType: 'blob', // Important for file downloads
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      // Create download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'gina-tsanaktsidis-cv.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
      
    } catch (err) {
      setError('Failed to download CV. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-center py-8">
      <h2 className="text-xl font-bold mb-4">Download CV</h2>
      <p className="mb-4">Thank you for authenticating. You can now download my CV.</p>
      
      <button
        onClick={handleDownload}
        disabled={isLoading}
        className="shadow-xs flex mx-auto justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm/6 font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {isLoading ? 'Downloading...' : 'Download CV'}
      </button>
      
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
}