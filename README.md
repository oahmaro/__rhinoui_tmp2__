# rhino-ui

> A set of React UI components that supports Rhino&#x27;s design language

[![NPM](https://img.shields.io/npm/v/rhino-ui.svg)](https://www.npmjs.com/package/rhino-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save rhino-ui
```

## Usage

```jsx
import React, { Component } from 'react'

import { Text, Rhino } from 'rhino-ui'

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

## License

MIT © [oahmaro](https://github.com/oahmaro)
