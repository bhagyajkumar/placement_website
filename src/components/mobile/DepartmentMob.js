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
              navigate(item.link)
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
