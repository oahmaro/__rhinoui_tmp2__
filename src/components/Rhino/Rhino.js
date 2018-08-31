import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createTheming } from 'react-jss'
import { rhinoTheme } from '../../utils/colors'
// Creating a namespaced theming object.
const theming = createTheming('__RHINO_UI_THEME__')
const { ThemeProvider } = theming

class Rhino extends Component {
  static propTypes = {
    children: PropTypes.element,
    theme: PropTypes.string,
    lang: PropTypes.string
  }

  setTheme = (theme) => {
    this.setState({ theme })
  }

  setLanguage = (lang) => {
    this.setState({ lang })
  }

  state = {
    theme: 'dark',
    lang: {
      locale: 'en',
      direction: 'ltr'
    },
    styles: {},
    setTheme: this.setTheme,
    setLang: this.setLanguage
  }

  componentDidMount() {
    const { theme, lang } = this.props
    theme && this.setTheme(theme)
    lang && this.setLanguage(lang)
    this.setState({ styles: rhinoTheme })
  }

  render() {
    const { theme, lang, styles, setTheme, setLang } = this.state
    const value = {
      theme,
      lang,
      styles: styles[theme],
      setTheme,
      setLang
    }
    return (
      <ThemeProvider theme={value}>
        { this.props.children }
      </ThemeProvider>
    )
  }
}

export default Rhino
