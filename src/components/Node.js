import React, { useState, useRef, useEffect } from 'react';
import EditTextArea from './EditTextArea'
import '../Node.css';

function Node() {
  return (
    <div className="node-box" draggable="True">
      <div>
        <div className='node-color-bar' />
      </div>
      <div className='node-keyword'>
        <EditTextArea initText="Deserunt" type="keyword" />
      </div>
      <div className='node-title'>
        <EditTextArea initText="Cupidatat ea sit culpa officia esse voluptate consequat magna." type="title" />
      </div>
    </div>
  );
};

export default Node;