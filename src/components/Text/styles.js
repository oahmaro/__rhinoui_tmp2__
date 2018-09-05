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
        return (
          (styles.text[textColor]) ||
          (styles.state[textColor]) ||
          (styles.ui[textColor]) ||
          (styles.text[textColor]) ||
          (styles.state[textColor]) ||
          (styles.ui[textColor]) ||
          (textColor)
        )
      }
    },
    '&:hover': {
      color: ({ textHoverColor, link, textColor }) => {
        if (styles && link) {
          if (textHoverColor !== undefined) {
            return textHoverColor
          } else {
            return (
              Color(
                (styles.text[textHoverColor]) ||
                (styles.state[textHoverColor]) ||
                (styles.ui[textHoverColor]) ||
                (styles.text[textColor]) ||
                (styles.state[textColor]) ||
                (styles.ui[textColor]) ||
                (textColor)
              ).darken(0.25).rgb().string()
            )
          }
        }
      }},
    '&:active': {
      color: ({ textActiveColor, link, textColor }) => {
        if (styles && link) {
          if (textActiveColor !== undefined) {
            return textActiveColor
          } else {
            return (
              Color(
                (styles.text[textActiveColor]) ||
                (styles.state[textActiveColor]) ||
                (styles.ui[textActiveColor]) ||
                (styles.text[textColor]) ||
                (styles.state[textColor]) ||
                (styles.ui[textColor]) ||
                (textColor)
              ).darken(0.50).rgb().string()
            )
          }
        }
      }},

    // // Shadow Props
    // // ------------
    textShadow: ({ textShadowX, textShadowY, textShadowRadius, textShadowOpacity, textShadowColor }) => {
      const _color = Color(textShadowColor)
      return (
        (textShadowX || textShadowY) !== undefined
          ? `${textShadowX}px ${textShadowY}px ${textShadowRadius}px rgba(${_color.red()}, ${_color.green()}, ${_color.blue()}, ${_color.alpha() * textShadowOpacity})`
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
    cursor: ({ cursor }) => cursor
  }
})
