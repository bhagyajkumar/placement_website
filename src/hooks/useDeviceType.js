import {useEffect, useState} from 'react';
import {getDeviceDimention} from '../Utility';

const minResX = 1000;

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState('mobile');

  console.log('here');
  useEffect(() => {
    const isMobile = getDeviceDimention().width < minResX;
    if (isMobile) {
      setDeviceType('mobile');
    } else {
      console.log('Desktop display');
      console.log(deviceType);
      setDeviceType('desktop');
    }

    if (typeof window !== 'undefined') {
      window.addEventListener(
        'resize',
        function () {
          const isMobile = getDeviceDimention().width < minResX;
          if (isMobile) {
            setDeviceType('mobile');
          } else {
            console.log('Desktop display');
            console.log(deviceType);
            setDeviceType('desktop');
          }
        },
        true,
      );
    } else {
      console.error('Error::useDeviceType:: Window is null');
    }
  }, []);

  return deviceType;
};

export default useDeviceType;
