import { create } from '@storybook/theming/create';
import SkoreLogo from './skore.svg';

export default create({
  base: 'light',
  brandTitle: 'SkoreUI',
  brandUrl: 'https://skore.io',
  brandImage: SkoreLogo,
  colorPrimary: '#D4D7E1',
  colorSecondary: '#6F83A0',

  // UI
  appBg: '#F3F5F9',
  appContentBg: 'white',
  appBorderColor: '#F3F5F9',
  appBorderRadius: 3,

  // Typography
  fontBase: '"Poppins", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#6F83A0',
  textInverseColor: '#F2F3FF',

  // Toolbar default and active colors
  barTextColor: '#6F83A0',
  barSelectedColor: '#26E1CD',
  barBg: 'white',

  // Form colors
  inputBg: 'transparent',
  inputBorder: '#D4D7E1',
  inputTextColor: '#6F83A0',
  inputBorderRadius: 6,
});