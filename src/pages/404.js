import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/home/Footer';
import useDeviceType from '../hooks/useDeviceType';
import FooterMob from '../components/mobile/FooterMob';
import HeaderMobile from '../components/HeaderMobile';

const NotFoundPage = () => {
  const deviceType = useDeviceType();

  if (deviceType == 'mobile') {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'grey',
        }}>
        <HeaderMobile />
        <div
          style={{
            display: 'flex',
            height: 'calc(100vh - 170px)',
            fontFamily: 'Montserrat',
            fontStyle: 'italic',
            fontWeight: '800',
            fontSize: '36px',
            lineHeight: '99.4%',
            color: '#F84C4C',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          Coming Soon...
        </div>
        <FooterMob />
      </div>
    );
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'grey',
      }}>
      <Header />
      <div
        style={{
          display: 'flex',
          height: 'calc(100vh - 320px)',
          fontFamily: 'Montserrat',
          fontStyle: 'italic',
          fontWeight: '800',
          fontSize: '144px',
          lineHeight: '99.4%',
          color: '#F84C4C',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        Coming Soon...
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
