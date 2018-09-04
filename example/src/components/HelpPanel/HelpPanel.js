import React from 'react'
import { Box } from 'rhinoui'

class HelpPanel extends React.Component {
  render() {
    return (
      <Box 
      id='helpPanel'
      shadowOpacity={0.5}
      shadowY={1}
      shadowBlur={10} 
      borderTop={1}
      borderColor='fill2'
      position='absolute' 
      bottom 
      boxColor='fill4' 
      height={36} 
      width='100%'></Box>
    )
  }
}

export default HelpPanel