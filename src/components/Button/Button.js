import React from 'react'
import Box from '../Box'

const Button = (props) => {
  return (
    <Box {...props} tag='a'>
      { props.children }
    </Box>
  )
}

export default Button
