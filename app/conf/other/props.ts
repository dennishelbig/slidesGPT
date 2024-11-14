import type pageInterface from '@/interfaces/page';
import type ContainerInterface from '@/interfaces/container';

interface PropsInterface extends pageInterface, ContainerInterface {}

// props in inches
const props: PropsInterface = {
  width: 10,
  height: 5.6,
  paddingTop: 1.5,
  paddingRight: 1,
  paddingBottom: 0.5,
  paddingLeft: 1,
  backgroundColor: 'pink',
  colorText: '#ffffff',
  fontSizeP: '1.2rem',
  fontSizeH1: '2.5rem',
  textTransformH1: 'uppercase',
  fontSizeH2: '2rem',
  fontSizeH3: '1.5rem',
  backgroundImage: 'bg.png',
};

export default props;