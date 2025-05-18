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

const changeText=(event)=>{
  console.log(event.target)
  event.target.innerText = event.target.innerText + "被點了"
}

const MultiButton=(num)=>{
  var output=[];
  for(let i=1; i<num+1;++i)
    output.push(<button onClick={changeText}>第{i}個按鍵</button>)
  return output;
}
function App(){
  return (
    <div cclassName="App">
      { MultiButton(10) }
    </div>
  );
}
export default MultiButton;

