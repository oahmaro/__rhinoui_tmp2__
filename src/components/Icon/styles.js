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
        return (
          (styles.text[iconColor]) ||
          (styles.state[iconColor]) ||
          (styles.ui[iconColor]) ||
          (styles.text[iconColor]) ||
          (styles.state[iconColor]) ||
          (styles.ui[iconColor]) ||
          (iconColor)
        )
      }
    },
    '&:hover': {
      fill: ({ iconHoverColor, link, iconColor }) => {
        if (styles && link) {
          if (iconHoverColor !== undefined) {
            return iconHoverColor
          } else {
            return (
              Color(
                (styles.text[iconHoverColor]) ||
                (styles.state[iconHoverColor]) ||
                (styles.ui[iconHoverColor]) ||
                (styles.text[iconColor]) ||
                (styles.state[iconColor]) ||
                (styles.ui[iconColor]) ||
                (iconColor)
              ).darken(0.25).rgb().string()
            )
          }
        }
      }},
    '&:active': {
      fill: ({ iconActiveColor, link, iconColor }) => {
        if (styles && link) {
          if (iconActiveColor !== undefined) {
            return iconActiveColor
          } else {
            return (
              Color(
                (styles.text[iconActiveColor]) ||
                (styles.state[iconActiveColor]) ||
                (styles.ui[iconActiveColor]) ||
                (styles.text[iconColor]) ||
                (styles.state[iconColor]) ||
                (styles.ui[iconColor]) ||
                (iconColor)
              ).darken(0.50).rgb().string()
            )
          }
        }
      }}
  }
})
