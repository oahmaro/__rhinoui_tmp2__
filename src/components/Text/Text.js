import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import './fonts.css'
import { _styles } from './styles'
import Box from '../Box'

const Text = ({...props}) => {
  return (
    <Box
      {...props}
      overflow='visible' // overwrite text overflow with box overflow
      jssStyles={props.classes.text}
      tag={!props.link ? 'p' : 'a'} // render a <p> or a <a> element
      draggable={false}>
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
  children: PropTypes.node,
  tag: PropTypes.oneOf(['p', 'a']),
  translation: PropTypes.string,

  // Color Props
  // -----------
  textColor: PropTypes.string,
  textHoverColor: PropTypes.string,
  textActiveColor: PropTypes.string,

  // Shadow Props
  // ------------
  textShadowColor: PropTypes.string,
  textShadowX: PropTypes.number,
  textShadowY: PropTypes.number,
  textShadowOpacity: PropTypes.number,
  textShadowRadius: PropTypes.number,

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
  textShadowColor: 'black',
  textShadowOpacity: 0.01,
  textShadowX: 0,
  textShadowY: 0,
  textShadowRadius: 0,
  borderColor: 'black',
  tag: 'p'
}

export default injectSheet(styles)(Text)
