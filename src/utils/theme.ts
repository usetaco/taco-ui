import { defineStyleConfig, extendTheme, theme as base } from '@chakra-ui/react'
import { changeShade, getLightOrDark } from '../utils/colors'

export const getThemeColorsForOrg = (widgetSettings: any) => {
  const { backgroundColor, fontColor } = widgetSettings

  // Variable calculation
  let primaryColor = backgroundColor || '#000000'
  let secondaryColor = fontColor || '#fff'

  let fontLightOrDark = getLightOrDark(secondaryColor)
  let accentColor, hoverColor

  if (fontLightOrDark === 'light') {
    accentColor = changeShade(secondaryColor, -150)
    hoverColor = changeShade(primaryColor, -30)
  } else {
    accentColor = changeShade(secondaryColor, 30)
    hoverColor = changeShade(primaryColor, 30)
  }

  return {
    primary: primaryColor,
    secondary: secondaryColor,
    accent: accentColor,
    hover: hoverColor,
  }
}

export const getChakraThemeForOrg = (widgetSettings: any) => {
  const { styleJss, backgroundColor, fontColor, isRounded, headerFontFam, bodyFontFam } = widgetSettings

  // Variable calculation
  let primaryColor = backgroundColor || '#000000'
  let secondaryColor = fontColor || '#fff'

  let fontLightOrDark = getLightOrDark(secondaryColor)
  let accentColor, hoverColor

  if (fontLightOrDark === 'light') {
    accentColor = changeShade(secondaryColor, -150)
    hoverColor = changeShade(primaryColor, -30)
  } else {
    accentColor = changeShade(secondaryColor, 30)
    hoverColor = changeShade(primaryColor, 30)
  }

  // Base Chakra styles
  let colorStyles = {
    'widget-primary': primaryColor,
    'widget-secondary': secondaryColor,
    'widget-accent': accentColor,
    'widget-hover': hoverColor,
  }

  let fontStyles = {
    baseStyle: {
      color: '#000000!important',
      lineHeight: '18px!important',
      fontFamily: bodyFontFam || `Poppins, sans-serif!important`,
      transition: '200ms all ease',
      letterSpacing: '0px !important',
    },
    variants: {
      'main-body': {
        fontSize: '12px!important',
        fontWeight: 300,
        fontFamily: bodyFontFam || `Poppins, sans-serif`,
      },
      'main-title': {
        fontSize: '14px!important',
        lineHeight: '21px!important',
        fontWeight: 500,
        textTransform: 'uppercase',
        fontFamily: headerFontFam || `Poppins, sans-serif`,
      },
      'card-title': { fontSize: '12px', fontWeight: 500, fontFamily: headerFontFam || `Poppins, sans-serif` },
      'card-subtitle': {
        fontSize: '12px!important',
        fontWeight: 300,
        textTransform: 'uppercase',
        color: accentColor,
        fontFamily: bodyFontFam || `Poppins, sans-serif`,
      },
      'button-text': {
        color: `${secondaryColor} !important`,
        fontSize: '12px!important',
        fontWeight: 500,
        textTransform: 'uppercase',
        fontFamily: bodyFontFam || `Poppins, sans-serif`,
      },
      'link-text': {
        fontSize: '12px!important',
        fontWeight: 300,
        textDecoration: 'underline!important',
        fontFamily: bodyFontFam || `Poppins, sans-serif`,
      },
      'section-title': {
        fontSize: '12px!important',
        fontWeight: 600,
        textTransform: 'uppercase',
        fontFamily: headerFontFam || `Poppins, sans-serif`,
      },
      'header-small': {
        color: `${secondaryColor} !important`,
        fontSize: '14px!important',
        lineHeight: '21px!important',
        fontWeight: 400,
        fontFamily: headerFontFam || `Poppins, sans-serif`,
      },
      'header-medium': {
        color: `${secondaryColor} !important`,
        fontSize: '28px!important',
        lineHeight: '42px!important',
        fontWeight: 600,
        fontFamily: headerFontFam || `Poppins, sans-serif`,
      },
      'header-large': {
        color: '#000000',
        fontSize: '28px!important',
        lineHeight: '42px!important',
        fontWeight: 700,
        fontFamily: headerFontFam || `Poppins, sans-serif`,
      },
    },
  }

  let badgeStyles = {
    variants: {
      'info-feedback': {
        borderRadius: isRounded ? '12px' : '0px',
        backgroundColor: '#000000',
        color: '#ffffff',
        paddingLeft: '6px',
        paddingRight: '6px',
        marginTop: '8px',
      },
    },
  }

  let tabStyles = {
    baseStyle: {
      tab: {
        bg: 'transparent',
        color: '#000',
        paddingTop: '5px',
        paddingBottom: '5px',
        fontSize: '12px',
        fontWeight: 400,
        borderRadius: isRounded ? '26px' : '0px',
        transition: '100ms all ease',
        _selected: {
          backgroundColor: primaryColor,
          color: secondaryColor,
          borderRadius: isRounded ? '26px' : '0px',
        },
      },
      tablist: {
        border: '1px solid #CACACA',
        borderRadius: isRounded ? '26px' : '0px',
      },
    },
  }

  // Override Org defaults with custom JSS
  if (styleJss && styleJss.length > 0) {
    let parsedStyles = JSON.parse(styleJss)
    fontStyles = {
      baseStyle: { ...fontStyles.baseStyle, ...parsedStyles.baseStyle },
      variants: { ...fontStyles.variants, ...parsedStyles.variants },
    }
  }

  // Widget custom components
  const WidgetButton = defineStyleConfig({
    baseStyle: {},
    variants: {
      main: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 24px',
        transition: 'all 0.2s ease-in-out',
        backgroundColor: primaryColor,
        borderWidth: '0 !important',
        borderRadius: isRounded ? '12px' : '0px',
        width: '100%',
        _hover: {
          backgroundColor: hoverColor,
        },
        _active: {
          backgroundColor: hoverColor,
        },
        _disabled: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          cursor: 'not-allowed',
          _active: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            transform: 'none',
          },
        },
      },
    },
  })

  const WidgetCard = defineStyleConfig({
    baseStyle: {
      border: 'none',
      backgroundColor: '#fff',
      borderRadius: isRounded ? '12px' : '0px',
      transition: '200ms ease all',
    },
    variants: {
      'hover-highlight': {
        _hover: {
          backgroundColor: primaryColor,
          cursor: 'pointer',
          color: `${secondaryColor} !important`,
        },
      },
      'box-highlight': {
        backgroundColor: '#E5E5E5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
      },
      'box-flat': {
        backgroundColor: 'transparent',
        borderRadius: isRounded ? '12px' : '0px',
      },
    },
  })

  let chakraTheme = widgetTheme

  chakraTheme = {
    ...widgetTheme,
    components: {
      ...widgetTheme.components,
      Text: { ...fontStyles },
      Tabs: { ...tabStyles },
      Badge: { ...widgetTheme.components.Badge, ...badgeStyles },
    },
    colors: { ...widgetTheme.colors, ...colorStyles },
  }

  return extendTheme({ ...chakraTheme, components: { ...chakraTheme.components, WidgetCard, WidgetButton } })
}

export const widgetTheme = {
  components: {
    Tabs: {},
    Text: {
      baseStyle: {
        lineHeight: '18px',
        color: '#000000',
      },
      variants: {
        'main-body': {
          fontSize: '12px',
          fontWeight: 300,
        },
        'main-title': {
          fontSize: '14px',
          lineHeight: '21px',
          fontWeight: 500,
          textTransform: 'uppercase',
        },
        'card-title': {
          fontSize: '12px',
          fontWeight: 500,
        },
        'card-subtitle': {
          fontSize: '12px',
          fontWeight: 300,
          color: '#000000a6',
          textTransform: 'uppercase',
        },
        'button-text': {
          fontSize: '12px',
          fontWeight: 500,
          textTransform: 'uppercase',
        },
        'link-text': {
          fontSize: '12px',
          fontWeight: 300,
          textDecoration: 'underline!important',
        },
        'section-title': {
          fontSize: '12px',
          fontWeight: 600,
          textTransform: 'uppercase',
        },
        'header-small': {
          fontSize: '14px',
          lineHeight: '21px',
          fontWeight: 400,
        },
        'header-medium': {
          fontSize: '28px',
          lineHeight: '42px',
          fontWeight: 600,
        },
        'header-large': {
          fontSize: '28px',
          lineHeight: '42px',
          fontWeight: 700,
        },
      },
    },
    Button: {
      baseStyle: {
        borderWidth: '0 !important',
      },
    },
    Divider: {
      baseStyle: {
        margin: '0 !important',
        borderColor: '#DFDFDF !important',
      },
    },
    Badge: {
      baseStyle: {
        borderRadius: '12px',
        backgroundColor: '#000000',
        color: '#ffffff',
        paddingLeft: '6px',
        paddingRight: '6px',
      },
    },
  },
  global: {},
  fonts: {
    heading: `Poppins, ${base.fonts?.heading}`,
    body: `Poppins, ${base.fonts?.body}`,
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 600,
    bolder: 700,
  },
  fontSizes: {
    xs: '10px',
    sm: '12px',
    md: '14px',
    lg: '18px',
    xl: '24px',
    '2xl': '32px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  colors: {
    ...base.colors,
    yellow: 'rgba(255, 189, 18, 1)',
    'yellow.800': 'rgba(255, 212, 101,1)',
    'yellow.100': 'rgba(255, 244, 204, 1)',
    'yellow.50': 'rgba(255, 250, 229, 1)',
    'yellow.25': 'rgba(255, 253, 242, 1)',
    blue: 'rgba(91, 117, 255, 1)',
    'blue.800': 'rgba(128, 148, 255, 1)',
    'blue.100': 'rgba(233, 231, 252, 1)',
    white: 'rgba(255, 255, 255, 1)',
    pink: 'rgba(241, 54, 231, 1)',
    'pink.800': 'rgba(248, 135, 242, 1)',
    'pink.200': 'rgba(255, 207, 252, 1)',
    black: '#000',
    //black: 'rgba(24, 25, 31, 1)',
    'black.800': 'rgba(71, 74, 87, 1)',
    'black.300': 'rgba(159, 164, 180, 1)',
    'black.700': 'rgba(150, 155, 171, 1)',
    'black.200': 'rgba(238, 239, 244, 1)',
    'black.100': 'rgba(244, 245, 247, 1)',
    'text.gray': '#808080',
    success: '#00CD21',
    error: '#FF0000',
    'green.50': '#d7fffc',
    'green.100': '#abfff4',
    'green.200': '#7affed',
    'green.300': '#48ffe6',
    'green.400': '#1affdf',
    'green.500': '#00e6c5',
    'green.600': '#00b39a',
    'green.700': '#00806e',
    'green.800': '#004e42',
    'green.900': '#001c16',
    red: {
      50: '#ffe6e1',
      100: '#ffbcb1',
      200: '#ff9281',
      300: '#fd674f',
      400: '#fb3d1e',
      500: '#fd674f', //#e12304
      600: '#b01a02',
      700: '#7e1100',
      800: '#4e0800',
      900: '#200000',
    },
  },
}
