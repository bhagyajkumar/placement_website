import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {useStaticQuery, graphql} from 'gatsby';
import {COLORS} from '../../styles/Colors';
import HomeTextMob from './HomeTextMob';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

const HomeMobile = () => {
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
      <div className={css(styles.half)}>
        <div className={css(styles.div1)}>
          <GatsbyImage
            image={image}
            alt="GG"
            className={css(styles.handImageContainer)}
            imgClassName={css(styles.handImage)}
          />
        </div>
      </div>
      <div>
        <HomeTextMob />
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  div1: {
    backgroundColor: COLORS.primary,
    width: '100vw',
    height: '290px',
    marginBottom: 80,
  },
  handImage: {
    objectFit: 'contain',
  },
  handImageContainer: {
    position: 'absolute',
    width: 357,
    height: 317,
    marginTop: 80,
    marginBottom: 40,
  },
  div2: {},
});

export default HomeMobile;
