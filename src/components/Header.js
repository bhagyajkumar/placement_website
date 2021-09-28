import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {COLORS} from '../styles/Colors';
import {Link} from 'gatsby';

const Links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Department',
    path: '/department',
  },
  {
    name: 'About Us',
    path: '/about',
  },
];

const Header = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.name)}>
        <p> CUCEK </p>
        <p> PLACEMENT </p>
      </div>

      <div className={css(styles.linkContainer)}>
        {Links.map((item, id) => (
          <Link to={item.path} key={id}>
            <div className={css(styles.linkItem)}>{item.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 113,
    backgroundColor: COLORS.bg,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editor: {
    width: '50%',
  },
  name: {
    marginLeft: 38,
    fontFamily: 'Spartan',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '28.8px',
    lineHeight: '99.4%',
    color: '#000000',
  },
  linkContainer: {
    display: 'flex',
    marginRight: 100,
  },
  linkItem: {
    fontFamily: 'Spartan',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '27px',
    color: '#000000',
    marginRight: 52,
  },
});

export default Header;
