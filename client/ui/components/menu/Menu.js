import React from 'react';
import gsap from "gsap";

import Button from './Button';
import ButtonLock from './ButtonLock';

function Menu() {

  return (
    <div className="menu">
        <ButtonLock background={"#cccccc"} backgroundImage={'lock'}/>
        <Button background={"#ffff44"} backgroundImage={'solarsystem'}/>
        <Button background={"#73AD21"} backgroundImage={'planet'}/>
        <Button background={"#999999"} backgroundImage={'moon'}/>
    </div>
  );
}

export default Menu;