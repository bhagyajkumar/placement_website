/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import {StyleSheet, css} from 'aphrodite';
import {Remarkable} from 'remarkable';
const md = new Remarkable();

const MarkdownPreview = ({markdown}) => {
  const [html, setHtml] = useState('');
  const [timestamp, setTimestamp] = useState(0);

  useEffect(() => {
    // const time = new Date();
    // const newTimestamp = time.getTime();

    // if (newTimestamp - timestamp > 300) {
    //   setTimestamp(newTimestamp);
    // }

    setHtml(md.render(markdown));
  }, [markdown]);

  return (
    <div
      className={css(styles.root)}
      dangerouslySetInnerHTML={{__html: html}}></div>
  );
};

const styles = StyleSheet.create({
  root: {
    marginLeft: 10,
    border: 'black solid 2px',
    flexGrow: 100,
  },
});

export default MarkdownPreview;
