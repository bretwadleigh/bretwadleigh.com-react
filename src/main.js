import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Application />,
    document.getElementById('mount')
  );
//document.getElementById('mount').innerHTML = "Hello World!";
});
