import type fontInterface from '@/interfaces/font';
import type pageInterface from '@/interfaces/page';

interface PropsInterface extends pageInterface, fontInterface {}

// props in inches
const defaultProps: PropsInterface = {
  fontSizeP: '16pt',
  fontSizeH1: '32pt',
  textTransformH1: 'unset',
  fontSizeH2: '26pt',
  fontSizeH3: '20pt',
  fontSizeCaption: '11pt',
  textAlignment: 'left',
  listStyle: {
    type: 'disc'
  },

  width: 8,
  height: 6,
  marginTop: 1,
  marginRight: 0.75,
  marginBottom: 0.5,
  marginLeft: 0.75,
  backgroundColor: '#f8f8f8',
  colorText: '#black',
};

export default defaultProps;