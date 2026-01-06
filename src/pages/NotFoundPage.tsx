import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-light-900">
      <div className="text-center">
        <h1 className="text-9xl font-bold font-heading neon-text text-black mb-6">
          404
        </h1>
        <h2 className="text-4xl font-heading text-black mb-6">
          Page Not Found
        </h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button variant="primary" className="bg-primary-500 hover:bg-primary-600 text-white">
            <Home size={18} className="mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
