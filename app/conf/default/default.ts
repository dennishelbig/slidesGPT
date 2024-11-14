import type ContainerInterface from '@/interfaces/container';
import type pageInterface from '@/interfaces/page';

interface PropsInterface extends pageInterface, ContainerInterface {}

// props in inches
const defaultProps: PropsInterface = {
  fontSizeP: '1rem',
  fontSizeH1: '2rem',
  textTransformH1: 'unset',
  fontSizeH2: '1.7rem',
  fontSizeH3: '1.5rem',
  width: 8,
  height: 6,
  paddingTop: 1,
  paddingRight: 0.75,
  paddingBottom: 0.5,
  paddingLeft: 0.75,
  backgroundColor: '#f8f8f8',
  colorText: '#black'
};

export default defaultProps;