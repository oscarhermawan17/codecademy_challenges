'use client'

import { useState, useEffect } from 'react'
import styles from './Screenshot.module.css'

function downloadImage(uri: string, filename: string) {
  var link = document.createElement('a');
  link.href = uri;
  link.download = filename;
  link.click();
}

function Screenshot() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!visible) {
      html2canvas(document.body).then(function(canvas) {
        downloadImage(canvas.toDataURL(), `webpage.png`);
        setVisible(true);
      });
    }
  }, [visible])

  return (
    <div id="camera" onClick={() => {
      setVisible(false);
    }} style={{display: visible ? "block" : "none"}}>
      <img
        src={"/images/camera.png"}
        alt={"Camera"} 
        width={100}
        height={100}
        className={styles.camera}
      />
    </div>
  );
}
   
export default Screenshot;