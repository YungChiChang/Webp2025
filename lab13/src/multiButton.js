/*import React from 'react';
import './App.css';
import Button from '@mui/material/Button';


const styleArgument = { fontSize: '16px', color: 'white' };

const changeText = (event) => {
  console.log(event.target);
  event.target.innerText = event.target.innerText + " 被點了";
};

const MultiButton = (num) => {
  const output = [];
  for (let i = 1; i <= num; ++i) {
    output.push(
      <Button
        key={i}
        variant="contained"
        color="primary"
        onClick={changeText}
        style={styleArgument}
      >
        第{i}個按鍵
      </Button>
    );
  }
  return <div>{output}</div>;
};

export default MultiButton;*/

import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const MultiButton=(num)=>{
  var output=[];
  output.push(
 <IconButton color="primary" aria-label="add to shopping cart"> 
<AddShoppingCartIcon /></IconButton>)
  output.push(<IconButton color="primary" aria-label="delete">
  <DeleteIcon /> </IconButton>)
  output.push(<IconButton color="primary" aria-label="add an alarm">
  <AlarmIcon /></IconButton>)
  return output;
 }

export default MultiButton;

