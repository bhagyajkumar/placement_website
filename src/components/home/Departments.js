import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {TypoStyle} from '../../styles/Typography';
import {COLORS} from '../../styles/Colors';
import {useStaticQuery, graphql, navigate} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

const DepartmentList = [
  {
    name: 'CIVIL',
    image: 'CIVIL.png',
    link: '/departments/civil',
  },
  {
    name: 'CSE',
    image: 'CSE.png',
    link: '/departments/cse',
  },
  {
    name: 'EC',
    image: 'EC.png',
    link: '/departments/ece',
  },
  {
    name: 'EEE',
    image: 'EEE.png',
    link: '/departments/eee',
  },
  {
    name: 'IT',
    image: 'IT.png',
    link: '/departments/it',
  },
  {
    name: 'MECH',
    image: 'MECH.png',
    link: '/departments/mech',
  },
  {
    name: 'MCA',
    image: 'MCA.png',
    link: '/departments/mca',
  },
  {
    name: 'MATHS',
    image: 'MATHS.png',
    link: '/departments/maths',
  },
  {
    name: 'GENERAL',
    image: 'GENERAL.png',
    link: '/departments/general',
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
              navigate(item.link)
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
