import React, { useState } from "react";
import QRCode from "react-qr-code";

const QRGenerator = () => {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handleGenerateQrCode(){
        setQrCode(input)
    }

return <div>
    <input onChange={(e)=> setInput(e.target.value)} type="text" name="qr-code" placeholder="enter your value"/>
    <button disabled={input && input.trim() !== "" ? false : true} onClick={handleGenerateQrCode}>generate</button>

    <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="lightblue"/>
    </div>
  </div>;
};

export default QRGenerator;
