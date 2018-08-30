import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
// import Color from 'color'

const Text = ({
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
  translation
}) => {
  const Tag = inline ? 'span' : 'p'
  return (
    <Tag>
      { children }
    </Tag>
  )
}

const styles = {

}

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
  classes: PropTypes.object
}

Text.defaultProps = {
  align: 'left',
  color: 'primary',
  shadowColor: 'black',
  shadowX: 0,
  shadowY: 0,
  shadowRadius: 0,
  shadowOpacity: 1,
  size: 'sm',
  overflow: 'normal'
}

export default injectSheet(styles)(Text)
