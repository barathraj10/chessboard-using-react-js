import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ChessBoard from './App';

function Final(){
  return(
    <div>
      <ChessBoard/>
    </div>
  )
}

ReactDOM.render(<Final/>,document.getElementById('root'));

