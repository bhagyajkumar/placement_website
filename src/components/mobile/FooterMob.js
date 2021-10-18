import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {COLORS} from '../../styles/Colors';

const FooterMob = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.container)}>
        <div style={{display: 'flex'}}>
          <i className="ri-instagram-line"></i>
          <div className={css(styles.divider)} />
          <i className="ri-facebook-circle-line"></i>
          <div className={css(styles.divider)} />
          <i className="ri-mail-line"></i>
        </div>

        <div className={css(styles.text)}>SFI CUSAT</div>
      </div>
    </div>
  );
};
const styles = StyleSheet.create({
  root: {
    marginTop: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    color: COLORS.bg,
    height: 50,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90vw',
  },
  divider: {
    width: 15,
  },
  text: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '99.4%',
  },
});

export default FooterMob;
