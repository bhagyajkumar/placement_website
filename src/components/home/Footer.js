import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {COLORS} from '../../styles/Colors';

const Footer = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.container)}>
        <div style={{display: 'flex'}}>
          <i
            className="ri-instagram-line"
            style={{fontSize: 40}}
            onClick={() => {
              window.location.href =
                'https://instagram.com/sficucek?utm_medium=copy_link';
            }}></i>
          <div className={css(styles.divider)} />
          <i
            className="ri-facebook-circle-line"
            style={{fontSize: 40}}
            onClick={() => {
              window.location.href =
                'https://www.facebook.com/297013207333563/posts/1438125976555608/?app=fbl';
            }}></i>
          <div className={css(styles.divider)} />
          <i
            className="ri-mail-line"
            style={{fontSize: 40}}
            onClick={() => {
              window.location.href = 'mailto:unitsficucek@gmail.com';
            }}></i>
        </div>

        <div className={css(styles.text)}>SFI CUSAT</div>
      </div>
    </div>
  );
};
const styles = StyleSheet.create({
  root: {
    marginTop: 180,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    color: COLORS.bg,
    height: 168,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90vw',
  },
  divider: {
    width: 20,
  },
  text: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '36px',
    lineHeight: '99.4%',
  },
});

export default Footer;
