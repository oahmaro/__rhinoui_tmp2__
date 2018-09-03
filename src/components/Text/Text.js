import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import './fonts.css'
import { _styles } from './styles'
import Box from '../Box'

const Text = ({...props}) => {
  return (
    <Box
      link={props.link}
      margin={0}
      padding={0}
      id={props.id}
      jssStyles={props.classes.text}
      style={props.style}
      href={props.href}
      tag={!props.link ? 'p' : 'a'} // render a <p> or a <a> element
      width='100%'
      height='100%'
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      boxColor={props.boxColor}
      boxHoverColor={props.boxHoverColor}
      boxActiveColor={props.boxActiveColor}>
      { (props.theme.lang.locale === 'en' && props.children) || (props.theme.lang.locale === 'ar' && (props.translation || 'no data')) }
    </Box>
  )
}

// Styles logic is imported from _styles.js
// Destructuring styles & lang from theme props passed from Rhino (Provider Component)
// Theme object contains the following properties { theme, lang, sizes, styles, setTheme, setLang }
const styles = ({ styles, lang, sizes }) => _styles({ styles, lang, sizes })

Text.propTypes = {
  // Standard Props
  // --------------
  display: PropTypes.oneOf(['none', 'block']),
  overflow: PropTypes.oneOf(['normal', 'break', 'ellipsis']),
  id: PropTypes.string,
  style: PropTypes.object,
  classes: PropTypes.object,
  children: PropTypes.node,
  tag: PropTypes.oneOf(['p', 'a']),
  theme: PropTypes.object,
  translation: PropTypes.string,

  // Color Props
  // -----------
  textColor: PropTypes.string,
  textHoverColor: PropTypes.string,
  textActiveColor: PropTypes.string,
  boxColor: PropTypes.string,
  boxHoverColor: PropTypes.string,
  boxActiveColor: PropTypes.string,

  // Shadow Props
  // ------------
  shadowColor: PropTypes.string,
  shadowX: PropTypes.number,
  shadowY: PropTypes.number,
  shadowOpacity: PropTypes.number,
  shadowRadius: PropTypes.number,

  // Text Props
  // ----------
  lineHeight: PropTypes.number,
  textAlign: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  selectable: PropTypes.bool,

  // Link Props
  // ----------
  link: PropTypes.bool,
  href: PropTypes.string,

  // Event Props
  // -----------
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
}

Text.defaultProps = {
  display: 'block',
  position: 'initial',
  shadowColor: 'black',
  shadowOpacity: 0.01,
  shadowX: 0,
  shadowY: 0,
  shadowRadius: 0,
  shadowBlur: 0,
  borderColor: 'black',
  tag: 'p'
}

export default injectSheet(styles)(Text)
