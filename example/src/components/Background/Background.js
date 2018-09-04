import React from 'react'
import { Box } from 'rhinoui'

const Background = (props) => {
  return (
    <Box 
    id='background'
    zIndex={-1}
    boxColor='fill3'
    position='absolute'
    width='100%'
    height='100%' />
  )
}

export default Background