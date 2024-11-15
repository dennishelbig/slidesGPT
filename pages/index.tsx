import { useState, useEffect, useRef } from 'react';
import loadStyles from '@/app/helper/loadStyles';
import TitleAndTwoColumns from '@/components/title_and_two_columns';
import '@/app/scss/global.scss';


import content1 from '@/content/title_and_two_columns_1/sources.json';
import content2 from '@/content/title_and_two_columns_2/sources.json';
import content3 from '@/content/title_and_two_columns_3/sources.json';


export default function Home() {
  const [zoomFactor, setZoomFactor] = useState(1);
  const pageRef = useRef<HTMLDivElement>(null);
  const [props, setProps] = useState({});
  const [data, setData] = useState({});



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


  const switchStyles = async (project:string) => {
    const propsReturn = await loadStyles(project);
    setProps(propsReturn);
  };



  const loadContent = (content:string) => {
    switch (content) {
      case '1':
        setData(content1);
        break;
      case '2':
        setData(content2);
        break;
      case '3':
        setData(content3);
        break;
      default:
        setData(content1);
    }
  };




  useEffect(() => {
    // Execute the zoomPage function with a factor of 0.8 on mount
    zoomPage();


    setData(content1);
    switchStyles('chatgpt');



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
        <button onClick={() => loadContent('1')}>Content 1</button>
        <button onClick={() => loadContent('2')}>Content 2</button>
        <button onClick={() => loadContent('3')}>Content 3</button>

        <div className="spacer"></div>
     
        <button onClick={() => switchStyles('chatgpt')}>chatGPT</button>
        <button onClick={() => switchStyles('slidesgpt')}>slidesgpt</button>
        <button onClick={() => switchStyles('slidesgpt_purple')}>slidesgpt purple</button>
      </div>




      <div id="page" ref={pageRef} style={{ zoom: zoomFactor }}>
        <div id="container">
          <TitleAndTwoColumns data={data} props={props} />
        </div>
      </div>
    </div>
  );
}

