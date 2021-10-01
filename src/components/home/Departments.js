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
  },
  {
    name: 'CSE',
    image: 'CSE.png',
  },
  {
    name: 'EC',
    image: 'EC.png',
  },
  {
    name: 'EEE',
    image: 'EEE.png',
  },
  {
    name: 'IT',
    image: 'IT.png',
  },
  {
    name: 'MECH',
    image: 'MECH.png',
  },
  {
    name: 'MCA',
    image: 'MCA.png',
  },
  {
    name: 'MATHS',
    image: 'MATHS.png',
  },
  {
    name: 'GENERAL',
    image: 'GENERAL.png',
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
          <div className={css(styles.departmentIcon)} key={id}>
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
  },
});
export default Departments;
