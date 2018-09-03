import Color from 'color'

export const _styles = ({ styles }) => ({
  svg: {
    // Standard Props
    // --------------
    display: ({ display }) => `${display}`,
    boxSizing: 'border-box',
    width: ({ width }) => `${width}px`,
    height: ({ height }) => `${height}px`,
    padding: ({ padding }) => `${padding}px`
  },
  path: {
    fill: ({ iconColor }) => {
      if (styles) {
        if (styles.text[iconColor]) {
          return `${styles.text[iconColor]}`
        } else if (styles.ui[iconColor]) {
          return `${styles.ui[iconColor]}`
        } else if (styles.state[iconColor]) {
          return `${styles.state[iconColor]}`
        } else return `${iconColor}`
      }
    },
    '&:hover': {
      fill: ({ iconHoverColor, link, iconColor }) => {
        if (iconHoverColor !== undefined) {
          if (styles && link) {
            if (styles.text[iconHoverColor]) {
              return Color((styles.text[iconHoverColor])).darken(0.20).rgb().string()
            } else if (styles.state[iconHoverColor]) {
              return Color((styles.state[iconHoverColor])).darken(0.20).rgb().string()
            } else if (styles.ui[iconHoverColor] !== undefined) {
              return Color((styles.ui[iconHoverColor])).darken(0.20).rgb().string()
            } else return `${iconHoverColor}`
          }
        } else if (styles && link) {
          return Color(styles.text[iconColor] || styles.state[iconColor] || styles.ui[iconColor] || iconColor).darken(0.20).rgb().string()
        }
      }},
    '&:active': {
      fill: ({ iconActiveColor, link, iconColor }) => {
        if (iconActiveColor !== undefined) {
          if (styles && link) {
            if (styles.text[iconActiveColor]) {
              return Color((styles.text[iconActiveColor])).darken(0.50).rgb().string()
            } else if (styles.state[iconActiveColor]) {
              return Color((styles.state[iconActiveColor])).darken(0.50).rgb().string()
            } else if (styles.ui[iconActiveColor] !== undefined) {
              return Color((styles.ui[iconActiveColor])).darken(0.50).rgb().string()
            } else return `${iconActiveColor}`
          }
        } else if (styles && link) {
          return Color(styles.text[iconColor] || styles.state[iconColor] || styles.ui[iconColor] || iconColor).darken(0.50).rgb().string()
        }
      }}
  }
})
