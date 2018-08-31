import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'react-jss'
import Provider from './Provider'

class Rhino extends Component {
  static propTypes = {
    children: PropTypes.element,
    theme: PropTypes.string,
    lang: PropTypes.string,
    data: PropTypes.object
  }

  setTheme = (theme) => {
    this.setState({ theme })
  }

  setLanguage = (lang) => {
    if (lang === 'en') {
      this.setState({
        lang: {
          locale: 'en',
          direction: 'ltr'
        }
      })
    }
    if (lang === 'ar') {
      this.setState({
        lang: {
          locale: 'ar',
          direction: 'rtl'
        }
      })
    }
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
    const { theme, lang, data } = this.props
    this.setState({ styles: data })
    theme && this.setTheme(theme)
    lang && this.setLanguage(lang)
  }

  render() {
    const { theme, lang, styles, setTheme, setLang } = this.state
    const sizes = styles.sizes || {}
    const language = lang.locale
    const value = {
      theme,
      lang,
      sizes: sizes[language],
      styles: styles[theme],
      setTheme,
      setLang
    }

    return (
      <ThemeProvider theme={value}>
        <Provider theme={{}}>
          { this.props.children }
        </Provider>
      </ThemeProvider>
    )
  }
}

export default Rhino
