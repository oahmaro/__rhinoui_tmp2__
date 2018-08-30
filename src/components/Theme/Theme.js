import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createTheming } from 'react-jss'
import { rhinoTheme } from '../../utils/colors'
// Creating a namespaced theming object.
const theming = createTheming('__RHINO_UI_THEME__')
const { ThemeProvider } = theming

class Theme extends Component {
  static propTypes = {
    children: PropTypes.element,
    mode: PropTypes.oneOf(['dark', 'light']),
    customTheme: PropTypes.object
  }

  static defaultProps = {
    mode: 'dark',
    customTheme: null
  }

  setTheme = ({ mode, customTheme }) => {
    this.setState({ mode, customTheme })
  }

  state = {
    mode: 'dark',
    setTheme: this.setTheme,
    customTheme: null
  }

  componentDidMount() {
    const { mode, customTheme } = this.props
    this.setTheme({ mode, customTheme })
  }

  render() {
    const { mode, customTheme } = this.state
    const themeSwitch = customTheme === null ? rhinoTheme[mode] : (customTheme[mode] || {})
    // console.log('customTheme: ', customTheme)
    // console.log('themeSwitch: ', themeSwitch)
    // console.log('state: ', this.state)
    return (
      <ThemeProvider theme={themeSwitch}>
        { this.props.children }
      </ThemeProvider>
    )
  }
}

export default Theme
