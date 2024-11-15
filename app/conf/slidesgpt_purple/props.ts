import type pageInterface from '@/interfaces/page';
import type fontInterface from '@/interfaces/font';

interface PropsInterface extends pageInterface, fontInterface {}

// props in inches
const props: PropsInterface = {
  width: 10,
  height: 5.6,
  marginTop: 1.5,
  marginRight: 1,
  marginBottom: 0.5,
  marginLeft: 1,

  backgroundColor: 'pink',
  backgroundImage: 'bg.png',
  colorText: '#ffffff',

  fontSizeP: '1.2rem',
  fontSizeH1: '2.5rem',
  textTransformH1: 'uppercase',
  fontSizeH2: '2rem',
  fontSizeH3: '1.5rem',
  fontSizeCaption: '11pt',
  textAlignment: 'right'
};

export default props;