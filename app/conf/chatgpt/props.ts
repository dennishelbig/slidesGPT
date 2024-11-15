import type pageInterface from '@/interfaces/page';
import type fontInterface from '@/interfaces/font';

interface PropsInterface extends pageInterface, fontInterface {}

// props in inches
const props: PropsInterface = {
  width: 10,
  height: 5.6,
  marginTop: 0.5,
  marginRight: 0.5,
  marginBottom: 0.5,
  marginLeft: 0.5,

  backgroundColor: '#6610f2',
  backgroundImage: 'bg.png',
  colorText: '#ffffff',

  fontSizeP: '18pt',
  textTransformH1: 'uppercase',
  fontSizeH1: '24pt',
  fontSizeH2: '22pt',
  fontSizeH3: '18pt',
  fontSizeCaption: '11pt',
  textAlignment: 'left',
};

export default props;