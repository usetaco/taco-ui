import { extendTheme, theme as base } from '@chakra-ui/react'

export class TacoTheme {
  public primaryColor: string
  public secondaryColor: string
  public fontFamily: string
  public chakraTheme: Record<string, any>

  constructor(primaryColor: string, secondaryColor: string, fontFamily: string, componentOverrides?: any) {
    this.primaryColor = primaryColor
    this.secondaryColor = secondaryColor
    this.fontFamily = fontFamily
    let newTheme = extendTheme({
      styles: {
        global: {
          body: {
            color: 'black',
            fontWeight: 'normal',
          },
        },
      },
      fonts: {
        heading: `${fontFamily || 'WorkSans'}, ${base.fonts?.heading}`,
        body: `${fontFamily || 'WorkSans'}, ${base.fonts?.body}`,
      },
      fontWeights: {
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
      },
      sizes: {
        ...base.sizes,
        container: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      space: {
        ...base.space,
        0.5: '1px',
        1: '2px',
        1.5: '4px',
        2: '6px',
        2.5: '8px',
        3: '12px',
        3.5: '18px',
        4: '24px',
        5: '36px',
        6: '48px',
        7: '64px',
        8: '72px',
        9: '96px',
      },
      colors: {
        ...base.colors,
        primary: primaryColor || '#000',
        secondaryColor: secondaryColor || '#6C757D',
      },
      components: {
        Text: {
          baseStyle: {
            fontFamily: `${fontFamily || 'WorkSans'}, sans-serif`,
            fontWeight: 400,
          },
          variants: {
            title: {
              fontSize: '28px',
              fontWeight: 700,
              lineHeight: '32px',
            },
            subtitle: {
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: '24px',
            },
            body: {
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '20px',
            },
            label: {
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '14px',
              opacity: 0.75,
              marginBottom: '5px',
            },
            callout: {
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '16px',
              opacity: 0.75,
            },
          },
        },
        Link: {
          baseStyle: {
            fontFamily: `${fontFamily || 'WorkSans'}, sans-serif`,
            fontWeight: 400,
            fontSize: '16px',
          },
          variants: {
            menu: {
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '18px',
            },
            body: {
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '16px',
              textDecoration: 'underline',
            },
          },
        },
      },
    })

    if (componentOverrides) {
      this.chakraTheme.components = { ...this.chakraTheme.components, ...componentOverrides }
    }

    this.chakraTheme = newTheme
  }
}
