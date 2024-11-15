export default interface fontInterface {
  fontSizeP: string;
  fontSizeH1: string;
  textTransformH1?: string;
  fontSizeH2: string;
  fontSizeH3: string;
  fontSizeCaption: string;
  textAlignment?: string | 'left' | 'center' | 'right';
  listStyle?: {
    type: string | 'disc';
    size?: string | 'small' | 'medium' | 'large';
  };
}