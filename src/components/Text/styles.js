import Color from 'color'

export const _styles = ({ styles, lang, sizes }) => ({
  text: {
    // Standard Props
    // --------------
    display: ({ display }) => `${display}`,
    boxSizing: 'border-box',
    overflow: 'hidden',
    textOverflow: ({ overflow }) => overflow === 'ellipsis' ? 'ellipsis' : 'clip',
    wordWrap: ({ overflow }) => overflow === 'break' ? 'break-word' : overflow,

    // // Color Props
    // // -----------
    color: ({ textColor }) => {
      if (styles) {
        if (styles.text[textColor]) {
          return `${styles.text[textColor]}`
        } else if (styles.ui[textColor]) {
          return `${styles.ui[textColor]}`
        } else if (styles.state[textColor]) {
          return `${styles.state[textColor]}`
        } else return `${textColor}`
      }
    },
    '&:hover': {
      color: ({ textHoverColor, link, textColor }) => {
        if (textHoverColor !== undefined) {
          if (styles && link) {
            if (styles.text[textHoverColor]) {
              return Color((styles.text[textHoverColor])).darken(0.20).rgb().string()
            } else if (styles.state[textHoverColor]) {
              return Color((styles.state[textHoverColor])).darken(0.20).rgb().string()
            } else if (styles.ui[textHoverColor] !== undefined) {
              return Color((styles.ui[textHoverColor])).darken(0.20).rgb().string()
            } else return `${textHoverColor}`
          }
        } else if (styles && link) {
          return Color(styles.text[textColor] || styles.state[textColor] || styles.ui[textColor] || textColor).darken(0.20).rgb().string()
        }
      }},
    '&:active': {
      color: ({ textActiveColor, link, textColor }) => {
        if (textActiveColor !== undefined) {
          if (styles && link) {
            if (styles.text[textActiveColor]) {
              return Color((styles.text[textActiveColor])).darken(0.50).rgb().string()
            } else if (styles.state[textActiveColor]) {
              return Color((styles.state[textActiveColor])).darken(0.50).rgb().string()
            } else if (styles.ui[textActiveColor] !== undefined) {
              return Color((styles.ui[textActiveColor])).darken(0.50).rgb().string()
            } else return `${textActiveColor}`
          }
        } else if (styles && link) {
          return Color(styles.text[textColor] || styles.state[textColor] || styles.ui[textColor] || textColor).darken(0.50).rgb().string()
        }
      }},

    // // Shadow Props
    // // ------------
    textShadow: ({ shadowX, shadowY, shadowRadius, shadowOpacity, shadowColor }) => {
      const _color = Color(shadowColor)
      return (
        (shadowX || shadowY) !== undefined
          ? `${shadowX}px ${shadowY}px ${shadowRadius}px rgba(${_color.red()}, ${_color.green()}, ${_color.blue()}, ${_color.alpha() * shadowOpacity})`
          : ''
      )
    },

    // // Text Props
    // // ----------
    fontFamily: 'Roboto, Noto Kufi Arabic, sans-serif',
    hyphens: 'initial',
    textDecoration: 'none',
    textAlign: ({ textAlign }) => `${textAlign}`,
    lineHeight: ({ lineHeight }) => `${lineHeight}px`,
    fontWeight: ({ bold }) => (bold && 'bold') || 'normal',
    fontStyle: ({ italic }) => (italic && 'italic') || 'normal',
    userSelect: ({ selectable }) => selectable ? 'auto' : 'none',
    direction: () => lang.direction,
    fontSize: ({ size }) => (
      (sizes !== undefined) &&
      ((typeof size === 'string' && (`${sizes[size]}` || `${size}`)) || (typeof size === 'number' && `${size}px`))),
    cursor: ({ link }) => link ? 'pointer' : 'auto'
  }
})
