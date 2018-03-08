import React from 'react';
import ReactDOM from 'react-dom';
import 'github-markdown-css/github-markdown.css';

import NoteBody from './lib/components/NoteBody';

import './lib/style.css';
import note from './hw0707.md';

ReactDOM.render(<NoteBody note={note} />, document.getElementById('app'));
