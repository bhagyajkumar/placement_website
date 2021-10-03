import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {COLORS} from '../../styles/Colors';
import examPrep from '../../../content/images/ourServices/examPrep.png';
import placementAssist from '../../../content/images/ourServices/placementAssist.png';
import timedQuiz from '../../../content/images/ourServices/timedQuiz.png';

const OurServMob = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.mainTitle)}>
        <span className={css(styles.grey)}>Our</span> Services
      </div>
      <div className={css(styles.container)}>
        <div className={css(styles.box)}>
          <img src={examPrep} alt="" className={css(styles.image)} />
          <div className={css(styles.title)}> Exam Preparation</div>
          <div className={css(styles.divider)}></div>
        </div>
        <div className={css(styles.box)}>
          <img src={placementAssist} alt="" className={css(styles.image)} />
          <div className={css(styles.title)}> Timed Quiz</div>
          <div className={css(styles.divider)}></div>
        </div>
        <div className={css(styles.box)}>
          <img src={timedQuiz} alt="" className={css(styles.image)} />
          <div className={css(styles.title)}> Placement assistance</div>
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 61,
    marginBottom: 19,
  },
  mainTitle: {
    color: COLORS.primary,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: '29px',
    marginBottom: 19,
  },
  grey: {
    color: '#594949',
  },
  container: {
    marginLeft: 20,
    marginRight: 20,
    minWidth: 371,
    background: COLORS.secondary,
    paddingBottom: 20,
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 38,
  },
  image: {
    width: 183,
    height: 183,
    marginBottom: 17,
  },
  title: {
    color: COLORS.fg,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: '18px',
    marginBottom: 9,
  },
  divider: {
    minWidth: 311,
    minHeight: 0,
    border: `2px solid ${COLORS.primary}`,
  },
});

export default OurServMob;
