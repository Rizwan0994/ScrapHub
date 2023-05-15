import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1150,
    });
  }, []);

  return null;
};

export default AOSInit;
