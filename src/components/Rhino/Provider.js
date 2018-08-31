// This file will create a namespace specific to rhinoui library
// So it doesn't conflict with other themeing libraries
import React from 'react'
import { createTheming } from 'react-jss'
import PropTypes from 'prop-types'

// Creating a namespaced theming object.
const theming = createTheming('__rhinoui__')

const { ThemeProvider: MyThemeProvider } = theming

const theme = {}

const Provider = ({ children }) => {
  return (
    <MyThemeProvider theme={theme}>
      { children }
    </MyThemeProvider>
  )
}

Provider.propTypes = {
  children: PropTypes.element
}

export default Provider
