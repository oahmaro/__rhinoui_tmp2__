import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import { icons } from '../../utils/icons'
import Box from '../Box'
import { _styles } from './styles'

const Icon = ({...props}) => {
  return (
    <Box
      margin={0}
      padding={0}
      id={props.id}
      jssStyles={props.classes.svg}
      style={props.style}
      viewBox='0 0 512 512'
      tag={'svg'}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}>
      <path className={props.classes.path} d={icons[props.icon]} />
    </Box>
  )
}

// Styles logic is imported from _styles.js
// Destructuring styles & lang from theme props passed from Rhino (Provider Component)
// Theme object contains the following properties { theme, lang, sizes, styles, setTheme, setLang }
const styles = ({ styles, sizes }) => _styles({ styles })

Icon.propTypes = {
  // Standard Props
  // --------------
  display: PropTypes.oneOf(['none', 'block']),
  id: PropTypes.string,
  style: PropTypes.object,
  classes: PropTypes.object,
  tag: PropTypes.oneOf(['svg']),
  theme: PropTypes.object,

  // Color Props
  // -----------
  iconColor: PropTypes.string,
  iconHoverColor: PropTypes.string,
  iconActiveColor: PropTypes.string,

  // SVG Props
  // ---------
  padding: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  link: PropTypes.bool,
  icon: PropTypes.oneOf([
    'person',
    'app',
    'notification',
    'search',
    'close',
    'tag',
    'tagChecked',
    'grid',
    'list',
    'kanban1',
    'kanban2',
    'help',
    'plus',
    'minus',
    'danger',
    'rightArrow',
    'leftArrow',
    'collapsedArrow',
    'expandedArrow',
    'pencil',
    'move',
    'addColumn',
    'attachment',
    'smiley1',
    'smiley2',
    'comment',
    'like',
    'tick',
    'record',
    'server',
    'rhino',
    'rhinoText'
  ]),

  // Event Props
  // -----------
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
}

Icon.defaultProps = {
}

export default injectSheet(styles)(Icon)
