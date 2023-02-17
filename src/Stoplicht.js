import { useState } from 'react';

export default function Stoplicht() {

  const [state, setState] = useState(calculateState());


  function calculateState() {
    const d = new Date();
    let time = d.getTime() / 1000;
    let phase = time % 20;
    return phase < 10 ? "green" : phase > 14 ? "red" : "yellow";
  }

  return (
    <svg height="500" width="100" xmlns="http://www.w3.org/2000/svg">

    <g id="vierkanter">
        <rect x="00" y="00" width="100" height="300" rx="25"/>
    </g>
    <g id="ronder" display="none">
        <rect x="00" y="50" width="100" height="200" fill="black" />
        <circle cx="50" cy="50" r="50" fill="black"/>
        <circle cx="50" cy="250" r="50" fill="black"/>
    </g>
    {/* <circle cx="50" cy="050" r="40" fill="red"/>
    <circle cx="50" cy="150" r="40" fill="yellow"/>
    <circle cx="50" cy="250" r="40" fill="lime"/>
    <circle cx="50" cy="50" r="40" fill="#3f0000"/>
    <circle cx="50" cy="150" r="40" fill="#3f3f00"/>
    <circle cx="50" cy="250" r="40" fill="#003f00"/> */}
    <Lamp position={0} colorOn={"#ff0000"} colorOff={"#3f0000"} isOn={state === "red"} />
    <Lamp position={1} colorOn={"#ffff00"} colorOff={"#3f3f00"} isOn={state === "yellow"} />
    <Lamp position={2} colorOn={"#00ff00"} colorOff={"#003f00"} isOn={state === "green"} />
    </svg>
  );
}

function Lamp({position, colorOn, colorOff, isOn}) {
  return (
    <circle cx="50" cy={50 + position * 100} r="40" fill={ isOn ? colorOn : colorOff }/>
  );
}