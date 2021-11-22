import React from 'react';
import ReactMarkdown from 'react-markdown';

import './ReadMe.scss';

const ReadMe = () => {
  /* eslint-disable */
  return (
    <div className="readme">
      <article>
        <ReactMarkdown source={README} escapeHtml={false} />
      </article>
    </div>
  );
  /* eslint-enable */
};

export default ReadMe;
