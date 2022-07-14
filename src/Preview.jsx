import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { renderMarkdown } from './Markdown';

const Preview = () => {
  const parsedMarkdown = useSelector((state) => (state.parsedMarkdown));

  return (
    <div id="preview" dangerouslySetInnerHTML={{__html: parsedMarkdown}}/>
  );
}

export default Preview;