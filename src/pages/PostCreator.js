import React, {useState} from 'react';
import {StyleSheet, css} from 'aphrodite';
import MarkdownPreview from '../components/PostCreator/MarkdownPreview';
import Help from '../components/PostCreator/Help';

const PostCreator = () => {
  const [inputText, setInputText] = useState('# Heading 1\n## Heading 2');

  return (
    <div className={css(styles.root)}>
      <h1 style={{textAlign: 'center'}}>Markdown Editor</h1>
      <div className={css(styles.container)}>
        <textarea
          className={css(styles.editor)}
          rows="20"
          value={inputText}
          onChange={e => {
            setInputText(e.target.value);
          }}></textarea>
        <MarkdownPreview markdown={inputText} />
      </div>
      <Help />
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  editor: {
    width: '50%',
  },
});

export default PostCreator;
