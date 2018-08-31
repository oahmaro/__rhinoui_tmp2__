# rhinoui

> A set of React UI components that supports Rhino&#x27;s design language

[![NPM](https://img.shields.io/npm/v/rhinoui.svg)](https://www.npmjs.com/package/rhinoui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save rhinoui
```

## Usage

### Basic 
```jsx
import React, { Component } from 'react'

import { Text, Rhino } from 'rhinoui'

class Example extends Component {
  render () {
    return (
      <Rhino theme='dark' lang='en'>
        <Text>This is a Text component with dark theme!</Text>
      </Rhino>
    )
  }
}
```
Rhino Component is a provider component, it should be set at the highest level of your app, if not, compoenent will rely on thier default prop values.

### Theming
The idea is that you import a createTheme, pass a modifier function as its first argument, and then call an updateTheme method avaliable on createTheme to update the theme.

```jsx
import React, {Component } from 'react'

import { Text, Rhino, createTheme } from 'rhinoui'

// Modifier that will update the theme object
const modifier = ( theme = {}, newTheme ) => {
  return {
    ...theme,
    ...newTheme
  }
}

// Create theme object passing it a modifer function
const theme = createTheme(modifier)

// Call a method on createTheme to update your the themes object
theme.updateTheme({
  dark: {
    text: {
      primary: 'white'
    }
  },
  light: {
    text: {
      primary: 'black'
    }
  }
})

class App extends Component {
  render() {
    return (
      // Pass the theme object inside the data prop
      <Rhino theme='dark' lang='en' data={theme.getTheme()}>
        <Text>This is a Text component with dark theme!</Text>
      </Rhino>
    )
  }
} 
```

## License

MIT © [oahmaro](https://github.com/oahmaro)
