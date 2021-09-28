import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {COLORS} from '../../styles/Colors';

const HomeText = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.title)}>NAME PLACEMENT ASSISTANCE</div>

      <div className={css(styles.content)}>
        We provide resources for studying and preparing for various Gov/PSU
        examinations including SSC, GATE, PSC & RRB. Various Gov/PSU/Private
        companies job notifications will be published time to time.
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 70,
  },
  title: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '96px',
    lineHeight: '94px',
    maxWidth: '1000px',
    color: COLORS.bg,
  },
  content: {
    marginTop: 40,
    fontFamily: 'Montserrat',
    fontStyle: 'italic',
    fontWeight: '500',
    fontSize: '24.9px',
    lineHeight: '30px',
    textAlign: 'justify',
    color: COLORS.bg,
    maxWidth: 744,
  },
});

export default HomeText;
