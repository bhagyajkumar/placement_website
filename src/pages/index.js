/* eslint-disable react/prop-types */
import * as React from 'react';
import Header from '../components/Header';
import {StyleSheet, css} from 'aphrodite';
import {getImage} from 'gatsby-plugin-image';
import {graphql} from 'gatsby';
import {convertToBgImage} from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import OurServices from '../components/home/OurServices';
import HomeMain from '../components/home/HomeMain';
import AboutUs from '../components/home/AboutUs';

const IndexPage = ({data}) => {
  const image = getImage(data.file);
  const bgImage = convertToBgImage(image);

  return (
    <div>
      <Header />
      <HomeMain />

      <BackgroundImage
        Tag="section"
        {...bgImage}
        preserveStackingContext
        className={css(styles.rootDesktop)}>
        <AboutUs />
      </BackgroundImage>

      <OurServices />
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
