import Color from 'color'

const propMap = {
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
    cursor: ({ cursor }) => cursor,

    // Position Props
    // --------------
    position: ({ position }) => `${position}`,
    top: ({ top }) => typeof top === 'boolean' ? top && 0 : `${top}`,
    right: ({ right }) => typeof right === 'boolean' ? right && 0 : `${right}`,
    bottom: ({ bottom }) => typeof bottom === 'boolean' ? bottom && 0 : `${bottom}`,
    left: ({ left }) => typeof left === 'boolean' ? left && 0 : `${left}`,

    // Color Props
    // --------------
    background: ({ boxColor }) => {
      if (styles) {
        if (styles.text[boxColor] !== undefined) {
          return `${styles.text[boxColor]}`
        } else if (styles.ui[boxColor] !== undefined) {
          return `${styles.ui[boxColor]}`
        } else if (styles.state[boxColor] !== undefined) {
          return `${styles.state[boxColor]}`
        } else return `${boxColor}`
      }
    },
    '&:hover': {
      background: ({ boxHoverColor, link, boxColor }) => {
        if (styles && link) {
          if (boxHoverColor !== undefined) {
            return boxHoverColor
          } else {
            return (
              Color(
                (styles.text[boxHoverColor]) ||
                (styles.state[boxHoverColor]) ||
                (styles.ui[boxHoverColor]) ||
                (styles.text[boxColor]) ||
                (styles.state[boxColor]) ||
                (styles.ui[boxColor]) ||
                (boxColor)
              ).darken(0.25).rgb().string()
            )
          }
        }
      }
    },
    '&:active': {
      background: ({ boxActiveColor, link, boxColor }) => {
        if (styles && link) {
          if (boxActiveColor !== undefined) {
            return boxActiveColor
          } else {
            return (
              Color(
                (styles.text[boxActiveColor]) ||
                (styles.state[boxActiveColor]) ||
                (styles.ui[boxActiveColor]) ||
                (styles.text[boxColor]) ||
                (styles.state[boxColor]) ||
                (styles.ui[boxColor]) ||
                (boxColor)
              ).darken(0.50).rgb().string()
            )
          }
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
    justifyContent: ({ justifyContent }) => `${propMap[justifyContent]}`,
    alignItems: ({ alignItems }) => `${propMap[alignItems]}`,
    alignContent: ({ alignContent }) => `${propMap[alignContent]}`,

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
    paddingTop: ({ padding, paddingY, paddingTop }) => (padding || paddingY || paddingTop) || 0,
    paddingRight: ({ padding, paddingX, paddingRight }) => (padding || paddingX || paddingRight) || 0,
    paddingBottom: ({ padding, paddingY, paddingBottom }) => (padding || paddingY || paddingBottom) || 0,
    paddingLeft: ({ padding, paddingX, paddingLeft }) => (padding || paddingX || paddingLeft) || 0,

    // // Margin Props
    // // ------------
    marginTop: ({ margin, marginY, marginTop }) => (margin || marginY || marginTop) || 0,
    marginRight: ({ margin, marginX, marginRight }) => (margin || marginX || marginRight) || 0,
    marginBottom: ({ margin, marginY, marginBottom }) => (margin || marginY || marginBottom) || 0,
    marginLeft: ({ margin, marginX, marginLeft }) => (margin || marginX || marginLeft) || 0
  }
})
