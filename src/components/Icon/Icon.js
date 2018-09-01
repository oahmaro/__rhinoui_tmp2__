import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import { icons } from '../../utils/icons'

const Icon = ({
  theme,
  classes,
  style,
  color,
  size,
  icon,
  padding
}) => {
  return (
    <svg className={classes.svg} style={style} viewBox='0 0 512 512'>
      <path className={classes.path} d={icons[icon]} />
    </svg>
  )
}

const styles = ({ styles, sizes }) => ({
  svg: {
    display: 'flex',
    boxSizing: 'border-box',
    width: ({ size }) => (sizes !== undefined) && `${size}px`,
    height: ({ size }) => (sizes !== undefined) && `${size}px`,
    padding: ({ size, padding }) => (size !== undefined) && (padding ? `${padding}px` : `${size / (size / 10)}px`)
  },
  path: {
    fill: ({ color }) => styles && (styles.text[color] || styles.state[color] || color)
  }
})

Icon.propTypes = {
  theme: PropTypes.object,
  classes: PropTypes.object,
  style: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.number,
  padding: PropTypes.number,
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
  ])
}

Icon.defaultProps = {
  size: 36
}

export default injectSheet(styles)(Icon)
