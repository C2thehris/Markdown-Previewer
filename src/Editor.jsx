import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changedMarkdown, renderMarkdown } from "./Markdown";

const Editor = () => {
  const innerMarkdown = useSelector((state) => state.unparsedMarkdown);
  const dispatch = useDispatch();

  const handleOnChange = ((event) => {
    event.preventDefault();
    dispatch(changedMarkdown(event.target.value));
  });

  useEffect(() => {
    dispatch(renderMarkdown(innerMarkdown));
  });

  return (
    <textarea id="editor" onChange={handleOnChange} value={innerMarkdown}></textarea>
  );
}

export default Editor;