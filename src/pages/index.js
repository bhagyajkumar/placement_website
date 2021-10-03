/* eslint-disable react/prop-types */
import React from 'react';
import Header from '../components/Header';
import {StyleSheet, css} from 'aphrodite';
import {getImage} from 'gatsby-plugin-image';
import {graphql} from 'gatsby';
import {convertToBgImage} from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import OurServices from '../components/home/OurServices';
import HomeMain from '../components/home/HomeMain';
import AboutUs from '../components/home/AboutUs';
import Departments from '../components/home/Departments';
import {COLORS} from '../styles/Colors';
import useDeviceType from '../hooks/useDeviceType';
import {useRef} from 'react';
import HeaderMobile from '../components/HeaderMobile';
import HomeMobile from '../components/mobile/HomeMobile';
import AboutUsMob from '../components/mobile/AboutUsMob';
import OurServMob from '../components/mobile/OurServMob';
import DepartmentMob from '../components/mobile/DepartmentMob';

const IndexPage = ({data}) => {
  const aboutUsRef = useRef();
  const departmentsRef = useRef();
  const image = getImage(data.file);
  const bgImage = convertToBgImage(image);

  const deviceType = useDeviceType();

  if (deviceType == 'mobile') {
    return (
      <div className={css(styles.rootMob)}>
        <HeaderMobile />
        <HomeMobile />
        <AboutUsMob />
        <OurServMob />
        <DepartmentMob />
      </div>
    );
  }

  const scroolToTop = () => {
    window.scrollTo(0, 0);
  };

  const scrollToAboutUs = () => {
    aboutUsRef.current.scrollIntoView({behavior: 'smooth'});
  };

  const scrollToDepartments = () => {
    departmentsRef.current.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div>
      <Header
        clickHandlers={{
          Home: scroolToTop,
          Department: scrollToDepartments,
          'About Us': scrollToAboutUs,
        }}
      />
      <HomeMain />

      <BackgroundImage
        Tag="section"
        {...bgImage}
        preserveStackingContext
        className={css(styles.rootDesktop)}>
        <div ref={aboutUsRef} />
        <AboutUs />
      </BackgroundImage>

      <OurServices />
      <div ref={departmentsRef} />
      <Departments />
      <div className={css(styles.footer)}></div>
    </div>
  );
};

const styles = StyleSheet.create({
  rootDesktop: {
    height: 'calc(100vh - 100px)',
    display: 'flex',
    flexDirection: 'column',
    backgroundPosition: 'left 0px top 0px',
    marginTop: 100,
  },
  rootMob: {
    marginLeft: 0,
    marginRight: 0,
  },
  footer: {
    backgroundColor: COLORS.primary,
    marginTop: 109,
    height: 100,
  },
});

export const pageQuery = graphql`
  query MyQuery {
    file(relativePath: {eq: "bgCucek.png"}) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO])
      }
    }
  }
`;

export default IndexPage;
