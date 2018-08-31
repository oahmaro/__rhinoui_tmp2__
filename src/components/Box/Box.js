import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import Color from 'color'

const Box = ({
  classes,
  display,
  flex,
  justifyContent,
  alignItems,
  alignContent,
  wrap,
  width,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  overflow,
  borderWidth,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  style,
  color,
  position,
  top,
  right,
  bottom,
  left,
  borderRadius,
  children,
  shadowColor,
  shadowX,
  shadowY,
  shadowOpacity,
  shadowRadius,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  margin,
  marginX,
  marginY,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  zIndex,
  id,
  flexDirection,
  borderColor
}) => {
  return (
    <div id={id} className={classes.box} style={style}>
      { children }
    </div>
  )
}

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

const styles = ({ styles }) => ({
  box: {
    display: ({ display }) => `${display}`,
    position: ({ position }) => `${position}`,
    top: ({ top }) => typeof top === 'boolean' ? top && 0 : `${top}`,
    right: ({ right }) => typeof right === 'boolean' ? right && 0 : `${right}`,
    bottom: ({ bottom }) => typeof bottom === 'boolean' ? bottom && 0 : `${bottom}`,
    left: ({ left }) => typeof left === 'boolean' ? left && 0 : `${left}`,
    flex: ({ flex }) => (flex === 'grow' && '1 1 auto') || (flex === 'shrink' && '0 1 auto') || (flex === 'none' && '0 0 auto'),
    flexDirection: ({ flexDirection }) => `${flexDirection}`,
    flexWrap: ({ wrap }) => `${wrap}`,
    justifyContent: ({ justifyContent }) => `${flexMap[justifyContent]}`,
    alignItems: ({ alignItems }) => `${flexMap[alignItems]}`,
    alignContent: ({ alignContent }) => `${flexMap[alignContent]}`,
    boxSizing: 'border-box',
    width: ({ width }) => (typeof width === 'number' && `${width}px`) || ((typeof width === 'string' && `${width}`)),
    height: ({ height }) => (typeof height === 'number' && `${height}px`) || (typeof height === 'string' && height),
    maxHeight: ({ maxHeight }) => `${maxHeight}px`,
    maxWidth: ({ maxWidth }) => `${maxWidth}px`,
    minHeight: ({ minHeight }) => `${minHeight}px`,
    minWidth: ({ minWidth }) => `${minWidth}px`,
    background: ({ color }) => styles && styles.ui[color] !== undefined ? `${styles.ui[color]}` : `${color}`,
    overflowX: ({ overflow }) => overflow === 'scrollX' && 'scroll',
    overflowY: ({ overflow }) => overflow === 'scrollY' && 'scroll',
    overflow: ({ overflow }) => `${overflow}`,
    borderRadius: ({ borderRadius }) => typeof borderRadius === 'string' ? borderRadius : `${borderRadius}px`,
    paddingTop: ({ padding, paddingY, paddingTop }) => (padding && `${padding}px`) || (paddingY && `${paddingY}px`) || (paddingTop && `${paddingTop}px`),
    paddingRight: ({ padding, paddingX, paddingRight }) => (padding && `${padding}px`) || (paddingX && `${paddingX}px`) || (paddingRight && `${paddingRight}px`),
    paddingBottom: ({ padding, paddingY, paddingBottom }) => (padding && `${padding}px`) || (paddingY && `${paddingY}px`) || (paddingBottom && `${paddingBottom}px`),
    paddingLeft: ({ padding, paddingX, paddingLeft }) => (padding && `${padding}px`) || (paddingX && `${paddingX}px`) || (paddingLeft && `${paddingLeft}px`),
    marginTop: ({ margin, marginY, marginTop }) => (margin && `${margin}px`) || (marginY && `${marginY}px`) || (marginTop && `${marginTop}px`),
    marginRight: ({ margin, marginX, marginRight }) => (margin && `${margin}px`) || (marginX && `${marginX}px`) || (marginRight && `${marginRight}px`),
    marginBottom: ({ margin, marginY, marginBottom }) => (margin && `${margin}px`) || (marginY && `${marginY}px`) || (marginBottom && `${marginBottom}px`),
    marginLeft: ({ margin, marginX, marginLeft }) => (margin && `${margin}px`) || (marginX && `${marginX}px`) || (marginLeft && `${marginLeft}px`),
    zIndex: ({ zIndex }) => `${zIndex}`,
    boxShadow: ({ shadowX, shadowY, shadowRadius, shadowOpacity, shadowColor }) => {
      const _color = Color(shadowColor)
      return (shadowX || shadowY) !== undefined ? `${shadowX}px ${shadowY}px ${shadowRadius}px rgba(${_color.red()}, ${_color.green()}, ${_color.blue()}, ${_color.alpha() * shadowOpacity})` : ''
    },
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
    }
  }
})

Box.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  maxHeight: PropTypes.number,
  maxWidth: PropTypes.number,
  minHeight: PropTypes.number,
  minWidth: PropTypes.number,
  color: PropTypes.oneOfType([
    PropTypes.oneOf(['fill1', 'fill2', 'fill3', 'fill4', 'fill5', 'fill6', 'fill7', 'fill8', 'fill9']),
    PropTypes.string
  ]),
  style: PropTypes.object,
  children: PropTypes.node,
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  display: PropTypes.oneOf(['none', 'flex', 'inline-flex']),
  justifyContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'arround', 'evenly']),
  alignItems: PropTypes.oneOf(['start', 'end', 'center', 'stretch', 'baseline']),
  alignContent: PropTypes.oneOf(['start', 'end', 'center', 'stretch', 'between', 'around']),
  flex: PropTypes.oneOf(['grow', 'shrink', 'none']),
  position: PropTypes.oneOf(['static', 'relative', 'fixed', 'absolute']),
  top: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  right: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  bottom: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  left: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  overflow: PropTypes.oneOf(['visible', 'hidden', 'scroll', 'scrollX', 'scrollY', 'auto']),
  borderWidth: PropTypes.number,
  borderTop: PropTypes.number,
  borderRight: PropTypes.number,
  borderBottom: PropTypes.number,
  borderLeft: PropTypes.number,
  borderRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  shadowColor: PropTypes.string,
  shadowX: PropTypes.number,
  shadowY: PropTypes.number,
  shadowOpacity: PropTypes.number,
  shadowRadius: PropTypes.number,
  padding: PropTypes.number,
  paddingX: PropTypes.number,
  paddingY: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  margin: PropTypes.number,
  marginX: PropTypes.number,
  marginY: PropTypes.number,
  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  zIndex: PropTypes.number,
  id: PropTypes.string,
  flexDirection: PropTypes.oneOf(['column', 'column-reverse', 'row', 'row-reverse']),
  classes: PropTypes.object,
  borderColor: PropTypes.string
}

Box.defaultProps = {
  height: 'auto',
  wrap: 'nowrap',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'stretch',
  alignContent: 'stretch',
  flex: 'shrink',
  position: 'static',
  overflow: 'visible',
  shadowColor: 'black',
  shadowX: 0,
  shadowY: 0,
  shadowRadius: 0,
  shadowOpacity: 1,
  borderWidth: 0,
  zIndex: 1,
  flexDirection: 'row',
  borderColor: 'fill2'
}

export default injectSheet(styles)(Box)
