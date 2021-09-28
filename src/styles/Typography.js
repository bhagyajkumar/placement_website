import {StyleSheet, css} from 'aphrodite';
import {COLORS} from './Colors';

export const TypoStyle = StyleSheet.create({
  h1: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '96px',
    lineHeight: '98px',
    color: COLORS.text,
  },
  h2: {
    fontFamily: 'Spartan',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '28.8px',
    lineHeight: '99.4%',
    color: COLORS.text,
  },
  h3: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '52.2406px',
    lineHeight: '64px',
    color: COLORS.text,
  },
  h4: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '42px',
    lineHeight: '51px',
    color: COLORS.text,
  },
  t1: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '36px',
    lineHeight: '44px',
    color: COLORS.text,
  },
  t2: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '32px',
    lineHeight: '39px',
    color: COLORS.text,
  },
  t3: {
    fontFamily: 'Montserrat',
    fontStyle: 'italic',
    fontWeight: '500',
    fontSize: '24.9px',
    lineHeight: '30px',
    textAlign: 'justify',
    color: COLORS.text,
  },
});
