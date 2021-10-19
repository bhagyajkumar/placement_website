import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {COLORS} from '../../styles/Colors';

const Footer = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.container)}>
        <div style={{display: 'flex'}}>
          <i className="ri-instagram-line" style={{fontSize: 40}}></i>
          <div className={css(styles.divider)} />
          <i className="ri-facebook-circle-line" style={{fontSize: 40}}></i>
          <div className={css(styles.divider)} />
          <i className="ri-mail-line" style={{fontSize: 40}}></i>
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
