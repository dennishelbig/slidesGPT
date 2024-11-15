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
  getProp('marginTop');
  getProp('marginBottom');
  getProp('marginLeft');
  getProp('marginRight');
  getProp('backgroundColor');
  getProp('backgroundImage');
  getProp('colorText');
  getProp('colorText');

  // font props
  getProp('fontSizeP');
  getProp('fontSizeH1');
  getProp('textTransformH1');
  getProp('fontSizeH2');
  getProp('fontSizeH3');
  getProp('fontSizeCaption');
  getProp('textAlignment');

  return props;
};
  
export default loadStyles;