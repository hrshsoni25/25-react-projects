import React, { useEffect, useState } from 'react'

const RandomColor = () => {

    const [ typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#00000');

    function randomColorUtility(length){
        return Math.floor(Math.random() * length);
    }

    function handleGenerateRandomHexColor(){
        const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor = '#';
        for(let i = 0; i < 6; i++){
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor)
    }

    function handleGenerateRandomRgbColor(){
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r},${g},${b})`)
    }

    useEffect(()=>{
        if(typeOfColor === "rbg") handleGenerateRandomRgbColor(); else handleGenerateRandomHexColor();
    },[typeOfColor])

  return (
    <div style={{width: '100vw', height:'100vh', background: color}}>
        <button className=' bg-slate-700 p-1 m-4 ' onClick={()=> setTypeOfColor('hex')}>hex color</button>
        <button className=' bg-slate-700 p-1' onClick={()=> setTypeOfColor('rgb')}> rgb color</button>
        <button onClick={typeOfColor === 'hex' ? handleGenerateRandomHexColor : handleGenerateRandomRgbColor}>generate color</button>

        <div>
            <h1>{typeOfColor}</h1>
            <h2>{color}</h2>
        </div>
    </div>
  )
}

export default RandomColor;