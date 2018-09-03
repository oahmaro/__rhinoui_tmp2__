import Color from 'color'

const flexMap = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  stretch: 'stretch',
  baseline: 'baseline'
}

export const _styles = ({ styles, lang }) => ({
  box: {
    // Standard Props
    // --------------
    display: ({ display }) => `${display}`,
    boxSizing: 'border-box',
    overflowX: ({ overflow }) => overflow === 'scrollX' && 'scroll',
    overflowY: ({ overflow }) => overflow === 'scrollY' && 'scroll',
    overflow: ({ overflow }) => `${overflow}`,
    zIndex: ({ zIndex }) => `${zIndex}`,

    // Position Props
    // --------------
    position: ({ position }) => `${position}`,
    top: ({ top }) => typeof top === 'boolean' ? top && 0 : `${top}`,
    right: ({ right }) => typeof right === 'boolean' ? right && 0 : `${right}`,
    bottom: ({ bottom }) => typeof bottom === 'boolean' ? bottom && 0 : `${bottom}`,
    left: ({ left }) => typeof left === 'boolean' ? left && 0 : `${left}`,

    // Color Props
    // --------------
    background: ({ boxColor }) => styles && styles.ui[boxColor] !== undefined ? `${styles.ui[boxColor]}` : `${boxColor}`,
    '&:hover': {
      background: ({ boxHoverColor, disabled, color }) => {
        if (!disabled && styles) {
          if (styles.state[color] !== undefined || styles.ui[color] !== undefined) {
            const _color = Color((styles.state[color]) || (styles.ui[color])).darken(0.20).rgb().string()
            return _color
          } else return `${boxHoverColor}`
        }
      }
    },
    '&:active': {
      background: ({ boxActiveColor, disabled, color }) => {
        if (!disabled && styles) {
          if (styles.state[color] !== undefined || styles.ui[color] !== undefined) {
            const _color = Color((styles.state[color]) || (styles.ui[color])).darken(0.50).rgb().string()
            return _color
          } else return `${boxActiveColor}`
        }
      }
    },

    // Width & Height Props
    // --------------------
    width: ({ width }) => (typeof width === 'number' && `${width}px`) || ((typeof width === 'string' && `${width}`)),
    height: ({ height }) => (typeof height === 'number' && `${height}px`) || (typeof height === 'string' && height),
    maxHeight: ({ maxHeight }) => (typeof maxHeight === 'number' && `${maxHeight}px`) || (typeof maxHeight === 'string' && maxHeight),
    maxWidth: ({ maxWidth }) => (typeof maxWidth === 'number' && `${maxWidth}px`) || (typeof maxWidth === 'string' && maxWidth),
    minHeight: ({ minHeight }) => (typeof minHeight === 'number' && `${minHeight}px`) || (typeof minHeight === 'string' && minHeight),
    minWidth: ({ minWidth }) => (typeof minWidth === 'number' && `${minWidth}px`) || (typeof minWidth === 'string' && minWidth),

    // // Flex Props
    // // ----------
    flex: ({ flex }) => (flex === 'grow' && '1 1 auto') || (flex === 'shrink' && '0 1 auto') || (flex === 'none' && '0 0 auto'),
    flexDirection: ({ flexDirection }) => {
      if (flexDirection && flexDirection !== 'row') {
        return `${flexDirection}`
      } else return (lang.locale === 'en' && 'row') || (lang.locale === 'ar' && 'row-reverse')
    },
    flexWrap: ({ wrap }) => `${wrap}`,
    justifyContent: ({ justifyContent }) => `${flexMap[justifyContent]}`,
    alignItems: ({ alignItems }) => `${flexMap[alignItems]}`,
    alignContent: ({ alignContent }) => `${flexMap[alignContent]}`,

    // // Border Props
    // // ------------
    borderTop: ({borderWidth, borderTop, borderColor}) => {
      if (styles) {
        if (borderWidth) return `${borderWidth}px solid ${((styles.ui[borderColor]) || (borderColor))}`
        if (borderTop) return `${borderTop}px solid ${((styles.ui[borderColor]) || (borderColor))}`
      }
    },
    borderRight: ({ borderWidth, borderRight, borderColor }) => {
      if (styles) {
        if (borderWidth) return `${borderWidth}px solid ${((styles.ui[borderColor]) || (borderColor))}`
        if (borderRight) return `${borderRight}px solid ${((styles.ui[borderColor]) || (borderColor))}`
      }
    },
    borderBottom: ({ borderWidth, borderBottom, borderColor }) => {
      if (styles) {
        if (borderWidth) return `${borderWidth}px solid ${((styles.ui[borderColor]) || (borderColor))}`
        if (borderBottom) return `${borderBottom}px solid ${((styles.ui[borderColor]) || (borderColor))}`
      }
    },
    borderLeft: ({ borderWidth, borderLeft, borderColor }) => {
      if (styles) {
        if (borderWidth) return `${borderWidth}px solid ${((styles.ui[borderColor]) || (borderColor))}`
        if (borderLeft) return `${borderLeft}px solid ${((styles.ui[borderColor]) || (borderColor))}`
      }
    },
    borderRadius: ({ borderRadius }) => typeof borderRadius === 'string' ? borderRadius : `${borderRadius}px`,

    // // Shadow Props
    // // ------------
    boxShadow: ({ shadowX, shadowY, shadowRadius, shadowOpacity, shadowColor, shadowBlur }) => {
      const _color = Color(shadowColor)
      return (
        (shadowX || shadowY) !== undefined
          ? `${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowRadius}px rgba(${_color.red()}, ${_color.green()}, ${_color.blue()}, ${_color.alpha() * shadowOpacity})`
          : ''
      )
    },

    // // Padding props
    // // -------------
    paddingTop: ({ padding, paddingY, paddingTop }) => (
      (padding && `${padding}px`) ||
      (paddingY && `${paddingY}px`) ||
      (paddingTop && `${paddingTop}px`)),

    paddingRight: ({ padding, paddingX, paddingRight }) => (
      (padding && `${padding}px`) ||
      (paddingX && `${paddingX}px`) ||
      (paddingRight && `${paddingRight}px`)),

    paddingBottom: ({ padding, paddingY, paddingBottom }) => (
      (padding && `${padding}px`) ||
      (paddingY && `${paddingY}px`) ||
      (paddingBottom && `${paddingBottom}px`)),

    paddingLeft: ({ padding, paddingX, paddingLeft }) => (
      (padding && `${padding}px`) ||
      (paddingX && `${paddingX}px`) ||
      (paddingLeft && `${paddingLeft}px`)),

    // // Margin Props
    // // ------------
    marginTop: ({ margin, marginY, marginTop }) => (
      (margin && `${margin}px`) ||
      (marginY && `${marginY}px`) ||
      (marginTop && `${marginTop}px`)),

    marginRight: ({ margin, marginX, marginRight }) => (
      (margin && `${margin}px`) ||
      (marginX && `${marginX}px`) ||
      (marginRight && `${marginRight}px`)),

    marginBottom: ({ margin, marginY, marginBottom }) => (
      (margin && `${margin}px`) ||
      (marginY && `${marginY}px`) ||
      (marginBottom && `${marginBottom}px`)),

    marginLeft: ({ margin, marginX, marginLeft }) => (
      (margin && `${margin}px`) ||
      (marginX && `${marginX}px`) ||
      (marginLeft && `${marginLeft}px`))
  }
})
