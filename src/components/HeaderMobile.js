/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import {StyleSheet, css} from 'aphrodite';
import {COLORS} from '../styles/Colors';
import {Link} from 'gatsby';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'shards-react';

import dropdownImg from '../../content/images/dropdown.png';
import dropdownSelImg from '../../content/images/dropdownSelected.png';
import capImg from '../../content/images/noto_graduation-cap.png';

const Links = [
  {
    name: 'Home',
  },
  {
    name: 'Department',
  },
  {
    name: 'About Us',
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

const GetTitle = ({headerType}) => {
  if (headerType == 2) {
    return (
      <div className={css(styles.name)}>
        <img src={capImg} alt="cap" />
        <span style={{color: COLORS.primary}}>Aa</span>
        <span style={{color: COLORS.text}}>zadi</span>
      </div>
    );
  }
  return (
    <div className={css(styles.name)}>
      <img src={capImg} alt="cap" />
      <span style={{color: COLORS.bg}}>Aa</span>
      <span style={{color: COLORS.text}}>zadi</span>
    </div>
  );
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [headerType, setHeaderType] = useState(1);
  const toggeleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onScroll = () => {
    if (window.scrollY > 100) {
      setHeaderType(2);
    } else {
      setHeaderType(1);
    }
  };

  return (
    <div className={css(styles.root, headerType == 2 ? styles.colorBg : null)}>
      <GetTitle headerType={headerType} />
      <div className={css(styles.linkContainer)}>
        <Dropdown open={showMenu} toggle={toggeleMenu} className="d-table">
          {showMenu ? (
            <img src={dropdownSelImg} alt="menu" onClick={toggeleMenu} />
          ) : (
            <img src={dropdownImg} alt="menu" onClick={toggeleMenu} />
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
    position: 'fixed',
    width: '100vw',
    display: 'flex',
    paddingTop: 10,
    paddingBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 9099,
  },
  colorBg: {
    backgroundColor: COLORS.bg,
    boxShadow: '0 4px 2px -2px gray',
  },
  editor: {
    width: '50%',
  },
  name: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 20,
    fontFamily: 'Spartan',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '28.8px',
    lineHeight: '99.4%',
    color: '#000000',
  },
  linkContainer: {
    display: 'flex',
    marginRight: 15,
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
