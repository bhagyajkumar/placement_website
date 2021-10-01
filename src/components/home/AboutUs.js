import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {TypoStyle} from '../../styles/Typography';
import {COLORS} from '../../styles/Colors';

const AboutUs = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(TypoStyle.h4)}>
        <span>About&nbsp;</span>
        <span style={{color: COLORS.bg}}>us</span>
      </div>

      <div className={css(TypoStyle.t3, styles.text)}>
        Aazadi is an SFI CUCEK project that provides students with comprehensive
        support for both academic and placement activities. Using materials and
        expert coaching lectures, we assist students for performing well in
        placement drives and several other tests.
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    marginRight: 70,
    width: 588,
    padding: 26,
    marginLeft: 'auto',
    backgroundColor: 'rgba(248, 76, 76, 0.8)',
    position: 'relative',
    top: -100,
  },
  text: {
    marginTop: 50,
    color: COLORS.bg,
  },
});
export default AboutUs;
