import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import { _styles } from './styles'

const Box = ({...props}) => {
  return (
    <props.tag
      id={props.id}
      className={`${props.classes.box} ${(props.jssStyles !== undefined) ? props.jssStyles : ''}`}
      style={props.style}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      viewBox={props.viewBox}>
      { props.children }
    </props.tag>
  )
}

// Styles logic is imported from _styles.js
// Destructuring styles & lang from theme props passed from Rhino (Provider Component)
// Theme object contains the following properties { theme, lang, sizes, styles, setTheme, setLang }
const styles = ({ styles, lang }) => _styles({ styles, lang })

Box.propTypes = {
  // Standard Props
  // --------------
  display: PropTypes.oneOf(['none', 'flex', 'inline-flex', 'block']),
  overflow: PropTypes.oneOf(['visible', 'hidden', 'scroll', 'scrollX', 'scrollY', 'auto']),
  id: PropTypes.string,
  style: PropTypes.object,
  classes: PropTypes.object,
  children: PropTypes.node,
  zIndex: PropTypes.number,
  tag: PropTypes.oneOf(['div', 'p', 'a', 'svg']),
  jssStyles: PropTypes.string,
  viewBox: PropTypes.string,

  // Position Props
  // --------------
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

  // Color Props
  boxColor: PropTypes.string,
  boxHoverColor: PropTypes.string,
  boxActiveColor: PropTypes.string,

  // Width & Height Props
  // --------------------
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  maxHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  maxWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  minHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  minWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  // Flex Props
  // ----------
  flex: PropTypes.oneOf(['grow', 'shrink', 'none']),
  flexDirection: PropTypes.oneOf(['column', 'column-reverse', 'row', 'row-reverse']),
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  justifyContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'evenly']),
  alignItems: PropTypes.oneOf(['start', 'end', 'center', 'stretch', 'baseline']),
  alignContent: PropTypes.oneOf(['start', 'end', 'center', 'stretch', 'between', 'around']),

  // Border Props
  // ------------
  borderColor: PropTypes.string,
  borderWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  borderTop: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  borderRight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  borderBottom: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  borderLeft: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  borderRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  // Shadow Props
  // ------------
  shadowColor: PropTypes.string,
  shadowX: PropTypes.number,
  shadowY: PropTypes.number,
  shadowOpacity: PropTypes.number,
  shadowRadius: PropTypes.number,
  shadowBlur: PropTypes.number,

  // Padding props
  // -------------
  padding: PropTypes.number,
  paddingX: PropTypes.number,
  paddingY: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,

  // Margin Props
  // ------------
  margin: PropTypes.number,
  marginX: PropTypes.number,
  marginY: PropTypes.number,
  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,

  // Event Props
  // -----------
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
}

Box.defaultProps = {
  display: 'flex', // This library is based on Flex layout
  position: 'relative',
  height: 'auto', // Resize based on content
  zIndex: 0,
  shadowOpacity: 0.01,
  shadowColor: 'black',
  borderColor: 'black',
  wrap: 'nowrap',
  justifyContent: 'start',
  alignItems: 'stretch',
  alignContent: 'stretch',
  flex: 'shrink',
  overflow: 'visible',
  tag: 'div',
  shadowX: 0,
  shadowY: 0,
  shadowRadius: 0,
  shadowBlur: 0,
  margin: 0,
  padding: 0
}

export default injectSheet(styles)(Box)
