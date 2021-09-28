import React, {useState} from 'react';
import {StyleSheet, css} from 'aphrodite';
import {COLORS} from '../styles/Colors';
import {Link} from 'gatsby';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'shards-react';

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

const MenuLinks = [
  {
    name: 'Job Notification',
    path: '/jobs',
  },
  {
    name: 'Guides',
    path: '/guides',
  },
  {
    name: 'Quiz',
    path: '/quiz',
  },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggeleMenu = () => {
    setShowMenu(!showMenu);
  };

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

        <Dropdown open={showMenu} toggle={toggeleMenu} className="d-table">
          {showMenu ? (
            <i
              className="ri-arrow-up-s-line"
              onClick={toggeleMenu}
              style={{color: COLORS.bg, backgroundColor: COLORS.primary}}
            />
          ) : (
            <i className="ri-arrow-down-s-line" onClick={toggeleMenu} />
          )}
          <DropdownMenu right>
            {MenuLinks.map((item, id) => (
              <DropdownItem key={id}>
                <Link to={item.path} className={css(styles.text)}>
                  {item.name}
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
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
    alignItems: 'center',
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
  text: {
    fontFamily: 'Spartan',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '26.3016px',
    lineHeight: '29px',
    color: '#000000',
  },
});

export default Header;
