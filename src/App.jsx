import { useState } from "react";
import QRCode from "qrcode";
import { WhatsappShareButton } from 'react-share';


import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQRcode] = useState("");
  
  const generateQRcode = (e) => {
    e.preventDefault();

    QRCode.toDataURL(
      url,
      {
        width: 300,
        
      },
      (err, res) => {
        if (err) return console.error(err);
        setQRcode(res);
      }
    );
  };
  return (
    <>
    <div className="app">
      <h1 className="app-name">QR CODE GENERATOR FOR FREE</h1>
      <p >This app will generate link you paste in</p>
      <form className="form" onSubmit={generateQRcode}>
        <input
          type="url"
          placeholder="paste your link"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          id="input"
        />
        <button id="submit" type="submit">
          generate
        </button>
      </form>
      
      
      </div>
      <div className="qr-side">
      {qrcode && (
        <div className="qr-side">
          <img src={qrcode} alt="qrcode-img" />
            <a href={qrcode} id="download" download="qrcode" className="btn-download">
            download
            </a>
         
        </div>
      )}
     </div>
    </>
  );
}

export default App;