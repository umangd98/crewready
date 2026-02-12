import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useCanonicalUrl = () => {
  const location = useLocation();
  
  useEffect(() => {
    const baseUrl = 'https://crewready.ai';
    const canonicalUrl = `${baseUrl}${location.pathname}`;
    
    // Remove existing canonical tag
    const existingLink = document.querySelector('link[rel="canonical"]');
    if (existingLink) {
      existingLink.setAttribute('href', canonicalUrl);
    } else {
      // Create new canonical tag if it doesn't exist
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', canonicalUrl);
      document.head.appendChild(link);
    }
  }, [location.pathname]);
};
