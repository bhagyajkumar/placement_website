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
    link: 'https://drive.google.com/folderview?id=1dHzEW7huX2FXQoIfOJXn_pvQYiUDVxU2',
  },
  {
    name: 'MATHS',
    image: 'MATHS.png',
    link: 'https://drive.google.com/folderview?id=1fUKiypnk5XrYZ2nPPLZfjsIrnOPIwLa9',
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

const DepartmentMob = () => {
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
      <div className={css(styles.mainTitle)}>
        <span className={css(styles.d)}>D</span>epartments
      </div>

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
            <div className={css(styles.subtitle)}>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  mainTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: '29px',
    marginBottom: 19,
    marginTop: 41,
  },
  d: {
    color: COLORS.primary,
  },
  subTitle: {
    textAlign: 'center',
    color: COLORS.tertiary,
    marginBottom: 11,
    fontWeight: 600,
    fontSize: 12,
    lineHeight: '15px',
  },
  departments: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    justifyContent: 'space-between',
    gridColumnGap: 41,
    gridRowGap: 24,
  },
  departmentIcon: {
    textAlign: 'center',
    width: 95,
    height: 95,
  },
});
export default DepartmentMob;
