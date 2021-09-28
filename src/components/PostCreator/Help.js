import React from 'react';

const Help = () => {
  return (
    <div style={{textAlign: 'center', marginBottom: 100}}>
      <h2>Markdown Cheat Sheet</h2>
      <p>Heading</p>
      <code>
        # H1
        <br /> ## H2
        <br /> ### H3
      </code>
      <p>Bold</p>
      <code>**bold text**</code>
      <p>Italic</p>
      <code>*italicized text*</code>
      <p>Blockquote</p>
      <code>&gt; blockquote</code>
      <p>Ordered List</p>
      <code>
        1. First item
        <br />
        2. Second item
        <br />
        3. Third item
        <br />
      </code>
      <p>Unordered List</p>
      <code>
        - First item
        <br />
        - Second item
        <br />
        - Third item
        <br />
      </code>
      <p>Code</p>
      <code>`code`</code>
      <p>Horizontal Rule</p>
      <code>---</code>
      <p>Link</p>
      <code>[title](https://www.example.com)</code>
      <p>Image</p>
      <code>![alt text](image.jpg)</code>
    </div>
  );
};

export default Help;
