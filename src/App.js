import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessRook } from '@fortawesome/free-solid-svg-icons';
import { faChessBishop } from '@fortawesome/free-solid-svg-icons';
import { faChessKing } from '@fortawesome/free-solid-svg-icons';
import { faChessQueen } from '@fortawesome/free-solid-svg-icons';
import { faChessPawn } from '@fortawesome/free-solid-svg-icons';
import { faChessKnight } from '@fortawesome/free-solid-svg-icons';


function ChessBoard(){
  return(
    <div className='chess'>
      <table>
        <tr>
          <td className='white'><FontAwesomeIcon icon={faChessRook}/></td>
          <td className='black'><FontAwesomeIcon icon={faChessKnight}></FontAwesomeIcon></td>
          <td className='white'><FontAwesomeIcon icon={faChessBishop}></FontAwesomeIcon></td>
          <td className='black'><FontAwesomeIcon icon={faChessQueen}></FontAwesomeIcon></td>
          <td className='white'><FontAwesomeIcon icon={faChessKing}></FontAwesomeIcon></td>
          <td className='black'><FontAwesomeIcon icon={faChessBishop}></FontAwesomeIcon></td>
          <td className='white'><FontAwesomeIcon icon={faChessKnight}></FontAwesomeIcon></td>
          <td className='black'><FontAwesomeIcon icon={faChessRook}></FontAwesomeIcon></td>
        </tr>
        <tr>
          <td className='black'><FontAwesomeIcon icon={faChessPawn}></FontAwesomeIcon></td>
          <td className='white'><FontAwesomeIcon icon={faChessPawn}></FontAwesomeIcon></td>
          <td className='black'><FontAwesomeIcon icon={faChessPawn}></FontAwesomeIcon></td>
          <td className='white'><FontAwesomeIcon icon={faChessPawn}></FontAwesomeIcon></td>
          <td className='black'><FontAwesomeIcon icon={faChessPawn}></FontAwesomeIcon></td>
          <td className='white'><FontAwesomeIcon icon={faChessPawn}></FontAwesomeIcon></td>
          <td className='black'><FontAwesomeIcon icon={faChessPawn}></FontAwesomeIcon></td>
          <td className='white'><FontAwesomeIcon icon={faChessPawn}></FontAwesomeIcon></td>
        </tr>
        <tr>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
        </tr>
        <tr>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
        </tr>
        <tr>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
        </tr>
        <tr>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
          <td className='black'></td>
          <td className='white'></td>
        </tr>
        <tr>
          <td className='white'><FontAwesomeIcon id='white' icon={faChessPawn}></FontAwesomeIcon></td>
          <td className='black'><FontAwesomeIcon id='white' icon={faChessPawn}></FontAwesomeIcon></td>
          <td className='white'><FontAwesomeIcon id='white' icon={faChessPawn}></FontAwesomeIcon></td>
          <td className='black'><FontAwesomeIcon id='white' icon={faChessPawn}></FontAwesomeIcon></td>
          <td className='white'><FontAwesomeIcon id='white' icon={faChessPawn}></FontAwesomeIcon></td>
          <td className='black'><FontAwesomeIcon id='white' icon={faChessPawn}></FontAwesomeIcon></td>
          <td className='white'><FontAwesomeIcon id='white' icon={faChessPawn}></FontAwesomeIcon></td>
          <td className='black'><FontAwesomeIcon id='white' icon={faChessPawn}></FontAwesomeIcon></td>
        </tr>
        <tr>
          <td className='black'><FontAwesomeIcon id='white' icon={faChessRook}></FontAwesomeIcon></td>
          <td className='white'><FontAwesomeIcon id='white' icon={faChessKnight}></FontAwesomeIcon></td>
          <td className='black'><FontAwesomeIcon id='white' icon={faChessBishop}></FontAwesomeIcon></td>
          <td className='white'><FontAwesomeIcon id='white' icon={faChessQueen}></FontAwesomeIcon></td>
          <td className='black'><FontAwesomeIcon id='white' icon={faChessKing}></FontAwesomeIcon></td>
          <td className='white'><FontAwesomeIcon id='white' icon={faChessBishop}></FontAwesomeIcon></td>
          <td className='black'><FontAwesomeIcon id='white' icon={faChessKnight}></FontAwesomeIcon></td>
          <td className='white'><FontAwesomeIcon id='white' icon={faChessRook}></FontAwesomeIcon></td>
        </tr>
      </table>
    </div>
  )
}

export default ChessBoard;