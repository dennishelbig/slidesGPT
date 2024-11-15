import type pageInterface from '@/interfaces/page';
import type fontInterface from '@/interfaces/font';

interface PropsInterface extends pageInterface, fontInterface {}

// props in inches
const props: PropsInterface = {
  width: 10,
  height: 5.6,
  marginTop: 0.2,
  marginRight: 0.3,
  marginBottom: 0.5,
  marginLeft: 0.3,
  backgroundColor: 'white',
  colorText: '#666666',
  fontSizeP: '1.2rem',
  fontSizeH1: '2.5rem',
  // textTransformH1: 'unset',
  fontSizeH2: '2rem',
  fontSizeH3: '1.5rem',
  fontSizeCaption: '11pt',
  listStyle: {
    type: 'disc',
    size: 'large',
  },
  textAlignment: 'left',
  backgroundImage: 'bg.png',
};

export default props;