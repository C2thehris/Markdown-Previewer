import { createSlice } from '@reduxjs/toolkit';
import initialMarkdown from './initialMarkdown.md';
import { marked } from 'marked';

const initialState = {
  unparsedMarkdown:
  `# This is an h1
## This is an h2
[This is a link](www.freecodecamp.com)

    This is a code block
    This is more of the code block

\`This is inline code\`

* This is a list item

> This is a block quote

![This image failed to load](chrome://branding/content/about-logo.png "Firefox logo")

**This is bolded**`,
  parsedMarkdown: ''
};

const Markdown = createSlice({
  name: 'markdown',
  initialState,
  reducers: {
    changedMarkdown: (state, action) => {
      state.unparsedMarkdown = action.payload;
      state.parsedMarkdown = marked.parse(action.payload);
    },
    renderMarkdown: (state, action) => {
      state.parsedMarkdown = marked.parse(action.payload);
    }
  }
});

export const { changedMarkdown, renderMarkdown } = Markdown.actions;

export default Markdown.reducer