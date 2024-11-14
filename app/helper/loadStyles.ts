const loadStyles = async (project: string) => {

  console.log('loadStyles', project);

  const defaultImport: any = await import('@/app/conf/default/default');
  const propsImport: any = await import(`@/app/conf/${project}/props.ts`);

  const defaultProps: any = defaultImport.default;
  const props: any = propsImport.default;

  const getProp = (prop: string) => {

    if( !props[prop] && !defaultProps[prop] ) {
      document.documentElement.style.removeProperty(`--${prop}`);
      return;
    }

    if( prop === 'backgroundImage' && props[prop] ) {
      const backgroundImage = `url('/${project}/${props[prop]}')`;
      document.documentElement.style.setProperty('--backgroundImage', backgroundImage);
    }

    else if ( props[prop] ) {
      document.documentElement.style.setProperty(`--${prop}`, props[prop]);
    } 

    else if (defaultProps[prop]) {
      document.documentElement.style.setProperty(`--${prop}`, defaultProps[prop]);
    }
  };

  // page props
  getProp('width');
  getProp('height');
  getProp('paddingTop');
  getProp('paddingBottom');
  getProp('paddingLeft');
  getProp('paddingRight');
  getProp('backgroundColor');
  getProp('backgroundImage');
  getProp('colorText');

  // container props
  getProp('fontSizeP');
  getProp('fontSizeH1');
  getProp('textTransformH1');
  getProp('fontSizeH2');
  getProp('fontSizeH3');

  // document.documentElement.style.setProperty('--width', width.toString());
  // document.documentElement.style.setProperty('--height', height.toString());
  // document.documentElement.style.setProperty('--paddingTop', paddingTop.toString());
  // document.documentElement.style.setProperty('--paddingBottom', paddingBottom.toString());
  // document.documentElement.style.setProperty('--paddingLeft', paddingLeft.toString());
  // document.documentElement.style.setProperty('--paddingRight', paddingRight.toString());
  // document.documentElement.style.setProperty('--backgroundColor', backgroundColor);
  // document.documentElement.style.setProperty('--backgroundImage', backgroundImage);

  // document.documentElement.style.setProperty('--colorText', colorText);
  // document.documentElement.style.setProperty('--fontSizeP', fontSizeP);
  // document.documentElement.style.setProperty('--fontSizeH1', fontSizeH1);
  // document.documentElement.style.setProperty('--textTransformH1', textTransformH1);
  // document.documentElement.style.setProperty('--fontSizeH2', fontSizeH2);
  // document.documentElement.style.setProperty('--fontSizeH3', fontSizeH3);
};
  
export default loadStyles;