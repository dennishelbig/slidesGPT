import { useState, useEffect, useRef } from 'react';
import loadStyles from '@/app/helper/loadStyles';
import '@/app/scss/global.scss';


export default function Home() {
  const [zoomFactor, setZoomFactor] = useState(1);
  const pageRef = useRef<HTMLDivElement>(null);



  const zoomPage = () => {
    const page = pageRef.current;
    if (page) {
      const pageWidth: number = parseInt(window.getComputedStyle(page).width);
      const windowWidth: number = window.innerWidth - 20; // 20 is margin between body and window

      if (windowWidth <= pageWidth) {
        setZoomFactor(windowWidth / pageWidth);
      } else {
        setZoomFactor(1);
      }
    }
  };


  const switchStyles = (project:string) => {
    loadStyles(project);
  };


  useEffect(() => {
    // Execute the zoomPage function with a factor of 0.8 on mount
    zoomPage();

    loadStyles('chatgpt');

    // Add event listener for window resize
    const handleResize = () => {
      zoomPage();
    };


    let timeout:any;
    window.addEventListener('resize', () => {
      clearTimeout(timeout);
      timeout = setTimeout( handleResize, 200);
    });
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div id="app">
      <div className="buttons">
        <button onClick={() => switchStyles('chatgpt')}>chatGPT</button>
        <button onClick={() => switchStyles('other')}>other</button>
      </div>
      <div id="page" ref={pageRef} style={{ zoom: zoomFactor }}>
        <div id="container">
          <h1>Headline 1</h1>
          <h2>headline 2</h2>
          <h3>headline 3</h3>
          <p>Paragraph</p>
        </div>
      </div>
    </div>
  );
}

