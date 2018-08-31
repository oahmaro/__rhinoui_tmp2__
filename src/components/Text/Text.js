import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import './fonts.css'
import Color from 'color'

const Text = ({
  theme,
  classes,
  children,
  style,
  align,
  bold,
  italic,
  color,
  inline,
  shadowColor,
  shadowX,
  shadowY,
  shadowOpacity,
  shadowRadius,
  selectable,
  size,
  overflow,
  lineHeight,
  link,
  href,
  onClick,
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
  translation }) => {
  const Tag = inline && !link ? 'span' : link ? 'a' : 'p'
  return (
    <Tag className={classes.text} style={style} onClick={onClick} href={href}>
      { (theme.lang.locale === 'en' && children) || (theme.lang.locale === 'ar' && translation) }
    </Tag>
  )
}

const styles = ({ styles, sizes, lang }) => ({
  text: {
    display: ({ inline }) => inline ? 'inline' : 'block',
    boxSizing: 'border-box',
    lineHeight: ({ lineHeight }) => `${lineHeight}px`,
    fontFamily: 'Roboto, Noto Kufi Arabic, sans-serif',
    overflow: 'hidden',
    textOverflow: ({ overflow }) => overflow === 'ellipsis' ? 'ellipsis' : 'clip',
    wordWrap: ({ overflow }) => overflow === 'break' ? 'break-word' : overflow,
    hyphens: 'initial',
    textAlign: ({ align }) => `${align}`,
    fontWeight: ({ bold }) => (bold && 'bold') || 'normal',
    fontStyle: ({ italic }) => (italic && 'italic') || 'normal',
    color: ({ color }) => styles && (styles.text[color] ? `${styles.text[color]}` : `${color}`),
    width: ({ inline }) => inline ? 'auto' : '100%',
    userSelect: ({ selectable }) => selectable ? 'auto' : 'none',
    textDecoration: 'none',
    paddingTop: ({ padding, paddingY, paddingTop }) => (padding !== undefined && `${padding}px`) || (paddingY !== undefined && `${paddingY}px`) || (paddingTop !== undefined && `${paddingTop}px`),
    paddingRight: ({ padding, paddingX, paddingRight }) => (padding !== undefined && `${padding}px`) || (paddingX !== undefined && `${paddingX}px`) || (paddingRight !== undefined && `${paddingRight}px`),
    paddingBottom: ({ padding, paddingY, paddingBottom }) => (padding !== undefined && `${padding}px`) || (paddingY !== undefined && `${paddingY}px`) || (paddingBottom !== undefined && `${paddingBottom}px`),
    paddingLeft: ({ padding, paddingX, paddingLeft }) => (padding !== undefined && `${padding}px`) || (paddingX !== undefined && `${paddingX}px`) || (paddingLeft !== undefined && `${paddingLeft}px`),
    marginTop: ({ margin, marginY, marginTop }) => (margin !== undefined && `${margin}px`) || (marginY !== undefined && `${marginY}px`) || (marginTop !== undefined && `${marginTop}px`),
    marginRight: ({ margin, marginX, marginRight }) => (margin !== undefined && `${margin}px`) || (marginX !== undefined && `${marginX}px`) || (marginRight !== undefined && `${marginRight}px`),
    marginBottom: ({ margin, marginY, marginBottom }) => (margin !== undefined && `${margin}px`) || (marginY !== undefined && `${marginY}px`) || (marginBottom !== undefined && `${marginBottom}px`),
    marginLeft: ({ margin, marginX, marginLeft }) => (margin !== undefined && `${margin}px`) || (marginX !== undefined && `${marginX}px`) || (marginLeft !== undefined && `${marginLeft}px`),
    textShadow: ({ shadowX, shadowY, shadowRadius, shadowOpacity, shadowColor }) => {
      const _color = Color(shadowColor)
      return (shadowX || shadowY) !== undefined ? `${shadowX}px ${shadowY}px ${shadowRadius}px rgba(${_color.red()}, ${_color.green()}, ${_color.blue()}, ${_color.alpha() * shadowOpacity})` : ''
    },
    direction: () => lang.direction,
    fontSize: ({ size }) => (sizes !== undefined) && ((typeof size === 'string' && `${sizes[size]}`) || (typeof size === 'number' && `${size}px`)),
    cursor: ({ link }) => link ? 'pointer' : 'auto'
  }
})

Text.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  align: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  color: PropTypes.oneOfType([
    PropTypes.oneOf(['primary', 'secondary', 'disabled', 'other']),
    PropTypes.string
  ]),
  inline: PropTypes.bool,
  shadowColor: PropTypes.string,
  shadowX: PropTypes.number,
  shadowY: PropTypes.number,
  shadowOpacity: PropTypes.number,
  shadowRadius: PropTypes.number,
  selectable: PropTypes.bool,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    PropTypes.number
  ]),
  overflow: PropTypes.oneOf(['normal', 'break', 'ellipsis']),
  lineHeight: PropTypes.number,
  link: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
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
  translation: PropTypes.string,
  classes: PropTypes.object,
  theme: PropTypes.object
}

Text.defaultProps = {
  align: 'left',
  color: 'primary',
  shadowColor: 'black',
  shadowX: 0,
  shadowY: 0,
  shadowRadius: 0,
  shadowOpacity: 0.01,
  size: 'sm',
  overflow: 'normal',
  marginY: 0
}

export default injectSheet(styles)(Text)
