/* eslint-disable react/prop-types */
import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {COLORS} from '../../styles/Colors';
import {TypoStyle} from '../../styles/Typography';
import {useStaticQuery, graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

const CardItems = [
  {
    title: '~Exam Preparation',
    content:
      'Study materials for various competitive exams like GATE, SSC, PSC will be provided in ease accessible format',
    image: 'examPrep.png',
    link: 'https://drive.google.com/folderview?id=1vdqMtfbWzDaz7Z5qi9a5IByUypvfxBjE',
  },
  {
    title: '~Timed Quizzes',
    content:
      'Online quiz competitions with time limit to check your daily learning progress.',
    image: 'timedQuiz.png',
    link: 'asdas',
  },
  // {
  //   title: '~Study Materials',
  //   content:
  //     'Study materials and notes for core concepts and ideas in mechanical engineering. ',
  //   image: 'studyMaterial.png',
  // },
  {
    title: '~Placement Assistance',
    content:
      'Various job notifications related to mechanical field including Gov/ Non-Gov vaccancies and guidence for placement drives.',
    image: 'placementAssist.png',
    link: 'asdas',
  },
];

const getImageFromData = (data, imgname) => {
  let image = null;
  data.allFile.nodes.forEach(item => {
    const fileName = item.relativePath.split('/').pop();

    if (imgname == fileName) {
      image = getImage(item);
      return;
    }
  });

  if (!image) {
    console.error('OurServices::Failed to find image ', imgname);
  }
  return image;
};

const Card = ({cardItem, data}) => {
  return (
    <div
      className={css(styles.cardRoot)}
      onClick={() => {
        window.location.href = cardItem.link;
      }}>
      <GatsbyImage
        className={css(styles.cardImage)}
        image={getImageFromData(data, cardItem.image)}
        alt={cardItem.title}></GatsbyImage>

      <div className={css(styles.verticalLine)}></div>

      <div>
        <div
          className={css(TypoStyle.h4)}
          style={{fontStyle: 'italic !important'}}>
          {cardItem.title}
        </div>
        <div className={css(styles.cardContent, TypoStyle.t2)}>
          {cardItem.content}
        </div>
      </div>
    </div>
  );
};

const OurServices = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: {eq: "images"}
          relativeDirectory: {eq: "ourServices"}
        }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: AUTO)
          }
          relativePath
        }
      }
    }
  `);

  return (
    <div className={css(styles.root)}>
      <div className={css(TypoStyle.h3, styles.title)}>
        Our&nbsp;
        <span style={{color: COLORS.primary}}>Services</span>
      </div>
      {CardItems.map((item, id) => (
        <Card cardItem={item} key={id} data={data} />
      ))}
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    maxWidth: 1124,
    margin: 'auto',
    marginTop: 122,
  },
  title: {
    color: COLORS.tertiary,
    textAlign: 'center',
  },
  cardRoot: {
    borderRadius: '10px',
    paddingLeft: 33,
    paddingTop: 37,
    paddingBottom: 37,
    backgroundColor: COLORS.secondary,
    display: 'flex',
    marginTop: 73,
    alignItems: 'center',

    ':hover': {
      transform: 'scale(1.1)',
      transitionDuration: '0.2s',
    },
  },
  cardImage: {
    width: 175,
    height: 175,
    minWidth: 175,
    minHeight: 175,
  },
  cardContent: {
    marginTop: 10,
  },
  verticalLine: {
    height: 136,
    width: 0,
    border: `2px solid ${COLORS.primary}`,
    backgroundColor: COLORS.primary,
    marginLeft: 64,
    marginRight: 40,
  },
});

export default OurServices;
