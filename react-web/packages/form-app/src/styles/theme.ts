export default {
  grid: {},
  border: {
    wizard: '2px',
    form: '4px',
    tag: '12px',
    button: '34px'
  },
  font: {
    primary: 'Nunito Sans',
    secondary: 'Crimson Pro',
    normal: 400,
    bold: 600,
    extraBold: 700,
    sizes: {}
  },
  colors: {
    buttonActive: '#F18A8D',
    buttonInactive: '#FCE8E8',
    danger: '#D94B4B',
    background: '#FFFFFF',
    tag: '#F8EDE9',

    wizardActiveBorder: '#FCEDEB',
    wizardActive: '#DCA592',
    wizardInactive: '#969CA6',
    wizardGrayBorder: '#E5E6E9',

    form: '#CBCDD3',
    formText: '#B0B5BC',

    title: '#191A1D',
    text: '#969CA6',
    white: '#FFFFFF'
  },
  spacings: {},
  layers: {},
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
