import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {COLORS} from '../../styles/Colors';

const HomeTextMob = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.container)}>
        <div className={css(styles.title)}>
          <p>CUCEK </p>
          <p>PLACEMENT </p>
          <p style={{color: COLORS.primary}}>SUPPORTIVE CELL </p>
        </div>

        <div className={css(styles.content)}>
          We provide resources for studying and preparing for various Gov/PSU
          examinations including SSC, GATE, PSC & RRB. Various Gov/PSU/Private
          companies job notifications will be published time to time.
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    marginLeft: 20,
    marginRight: 20,
  },
  container: {
    maxWidth: 330,
  },
  title: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '33px',
    lineHeight: '32px',
    color: COLORS.text,
  },
  content: {
    marginTop: 11,
    fontFamily: 'Montserrat',
    fontStyle: 'italic',
    fontWeight: '500',
    fontSize: '15px',
    lineHeight: '18px',
    color: COLORS.text,
  },
});

export default HomeTextMob;
