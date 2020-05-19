
import React from 'react';
import ReactDom from 'react-dom';
import "./styles.css";




const rootElement = document.querySelector('#root');

const elem = (
  <div className="greeting">
    <div className="greeting__title">Hello, world!</div>
    <div className="greeting__text">I'm learning React</div>
  </div>
)

ReactDom(elem, rootElement);