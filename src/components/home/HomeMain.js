import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {useStaticQuery, graphql} from 'gatsby';
import {COLORS} from '../../styles/Colors';
import HomeText from './HomeText';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

const HomeMain = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "hand.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO])
        }
      }
    }
  `);

  const image = getImage(data.file);

  return (
    <div className={css(styles.root)}>
      <div className={css(styles.div1)}></div>
      <GatsbyImage
        image={image}
        alt="GG"
        className={css(styles.handImageContainer)}
        imgClassName={css(styles.handImage)}
      />
      <HomeText />
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '100vh',
    display: 'flex',
  },
  div1: {
    backgroundColor: COLORS.primary,
    width: 548,
    minWidth: 548,
    height: '100%',
  },
  handImage: {
    objectFit: 'contain',
  },
  handImageContainer: {
    position: 'absolute',
    width: 680,
    maxWidth: 680,
    minWidth: 680,
    left: 155,
    top: 60,
  },
  div2: {},
});

export default HomeMain;
