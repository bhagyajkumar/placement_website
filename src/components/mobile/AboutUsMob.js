import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {COLORS} from '../../styles/Colors';

const AboutUsMob = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.frontCard)}>
        <div className={css(styles.title)}>
          About <span className={css(styles.us)}>us</span>
        </div>
        <div className={css(styles.contents)}>
          Aazadi is an SFI CUCEK project that provides students with
          comprehensive support for both academic and placement activities.
          Using materials and expert coaching lectures, we assist students for
          performing well in placement drives and several other tests.
        </div>
      </div>
      <div className={css(styles.backCard)}></div>
    </div>
  );
};
const styles = StyleSheet.create({
  root: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 61,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  frontCard: {
    width: '60vw',
    minHeight: 265,
    background: COLORS.primary,
    padding: 10,
  },
  backCard: {
    width: '25vw',
    minHeight: 183,
    maxHeight: 183,
    background: '#F76E6E',
    top: 44,
  },
  title: {
    color: COLORS.fg,
    fontSize: 24,
    fontWeight: 600,
    fontStyle: 'normal',
    lineHeight: '29px',
    marginLeft: 20,
    marginTop: 15,
  },
  us: {
    color: COLORS.bg,
  },
  contents: {
    fontStyle: 'italic',
    fontSize: 15,
    lineHeight: '18px',
    color: COLORS.bg,
    marginTop: 13,
  },
});

export default AboutUsMob;
