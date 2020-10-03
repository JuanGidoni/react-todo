import React, {useState} from 'react'

export default function CheckBox(props) {
    const [check, setCheck] = useState();
  const refreshCheck = () => {
    let isChecked = document.getElementById('todoCheck').checked;
    if(!isChecked){
      setCheck(true);
    }else{
      setCheck(false);
    }
  }

    return (<input type="checkbox" checked={props.checked} onClick={refreshCheck} id="todoCheck" />)
}
