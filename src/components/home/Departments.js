import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {TypoStyle} from '../../styles/Typography';
import {COLORS} from '../../styles/Colors';
import {useStaticQuery, graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

const DepartmentList = [
  {
    name: 'CIVIL',
    image: 'CIVIL.png',
    link: 'https://drive.google.com/folderview?id=1dAS4QbZ83uK2vM2TiWu4g-qf9bacImAF',
  },
  {
    name: 'CSE',
    image: 'CSE.png',
    link: 'https://drive.google.com/folderview?id=1dHzEW7huX2FXQoIfOJXn_pvQYiUDVxU2',
  },
  {
    name: 'EC',
    image: 'EC.png',
    link: 'https://drive.google.com/folderview?id=1dHkgiJd2i_BXg7kP-AvGE-bwGhzC18q_',
  },
  {
    name: 'EEE',
    image: 'EEE.png',
    link: 'https://drive.google.com/folderview?id=1dRVwjwKWoM_7XdIuRkEJNm3kiqQYMVFF',
  },
  {
    name: 'IT',
    image: 'IT.png',
    link: 'https://drive.google.com/folderview?id=1dHzEW7huX2FXQoIfOJXn_pvQYiUDVxU2',
  },
  {
    name: 'MECH',
    image: 'MECH.png',
    link: 'https://drive.google.com/folderview?id=1d9Cd-uodczVkL1dTKvvreDhkq-S2889J',
  },
  {
    name: 'MCA',
    image: 'MCA.png',
    link: '',
  },
  {
    name: 'MATHS',
    image: 'MATHS.png',
    link: '',
  },
  {
    name: 'GENERAL',
    image: 'GENERAL.png',
    link: 'https://drive.google.com/folderview?id=1fW5rMAPu-1JWPPoW4cgu4WcklFgZf2xh',
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

const Departments = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: {eq: "images"}
          relativeDirectory: {eq: "departments"}
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
      <div className={css(TypoStyle.h3, styles.title)}>Departments</div>

      <div className={css(styles.departments)}>
        {DepartmentList.map((item, id) => (
          <div
            className={css(styles.departmentIcon)}
            key={id}
            onClick={() => {
              window.open(item.link, '_blank');
            }}>
            <GatsbyImage
              image={getImageFromData(data, item.image)}
              alt={item.name}></GatsbyImage>
            <div className={css(TypoStyle.t1)}>{item.name}</div>
          </div>
        ))}
      </div>
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
    textAlign: 'center',
    color: COLORS.tertiary,
    marginBottom: 60,
  },
  departments: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
  },
  departmentIcon: {
    textAlign: 'center',
    marginTop: 60,
    ':hover': {
      transform: 'scale(1.1)',
      transitionDuration: '0.2s',
    },
  },
});
export default Departments;
