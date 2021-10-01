import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {COLORS} from '../../styles/Colors';

const HomeText = () => {
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
    marginTop: 220,
    marginLeft: 287,
    width: '100%',
  },
  container: {
    marginRight: 70,
    marginLeft: 'auto',
    maxWidth: 700,
  },
  title: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '59px',
    lineHeight: '97%',
    color: COLORS.text,
  },
  content: {
    marginTop: 40,
    fontFamily: 'Montserrat',
    fontStyle: 'italic',
    fontWeight: '500',
    fontSize: '24.9px',
    lineHeight: '30px',
    textAlign: 'justify',
    color: COLORS.text,
    maxWidth: 500,
  },
});

export default HomeText;
