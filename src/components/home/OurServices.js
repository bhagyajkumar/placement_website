/* eslint-disable react/prop-types */
import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {COLORS} from '../../styles/Colors';
import {TypoStyle} from '../../styles/Typography';

const CardItems = [
  {
    title: 'Exam Preparation',
    content:
      'Study materials for various competitive exams like GATE, SSC, PSC will be provided in ease accessible format',
  },
  {
    title: 'Timed Quizzes',
    content:
      'Online quiz competitions with time limit to check your daily learning progress.',
  },
  {
    title: 'Study Materials',
    content:
      'Study materials and notes for core concepts and ideas in mechanical engineering. ',
  },
  {
    title: 'Placement Assistance',
    content:
      'Various job notifications related to mechanical field including Gov/ Non-Gov vaccancies and guidence for placement drives.',
  },
];

const Card = ({cardItem}) => {
  return (
    <div className={css(styles.cardRoot)}>
      <img className={css(styles.cardImage)}></img>

      <div>
        <div className={css(TypoStyle.h4)}>{cardItem.title}</div>
        <div className={css(styles.cardContent, TypoStyle.t2)}>
          {cardItem.content}
        </div>
      </div>
    </div>
  );
};

const OurServices = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(TypoStyle.h3, styles.title)}>Our Services</div>
      {CardItems.map((item, id) => (
        <Card cardItem={item} key={id} />
      ))}
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    maxWidth: 1327,
    margin: 'auto',
    marginTop: 122,
  },
  title: {
    color: COLORS.tertiary,
    textAlign: 'center',
  },
  cardRoot: {
    borderRadius: '10px',
    paddingLeft: 33,
    paddingTop: 37,
    paddingBottom: 37,
    backgroundColor: COLORS.secondary,
    display: 'flex',
    marginTop: 73,
  },
  cardImage: {
    width: 184,
    height: 184,
    minWidth: 184,
    minHeight: 184,
    marginRight: 23,
  },
  cardContent: {
    marginTop: 10,
  },
});

export default OurServices;
