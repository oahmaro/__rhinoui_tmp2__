import React from 'react'
import { Box, Button, Text } from 'rhinoui'

class WorkspacePanel extends React.Component {
  render() {
    return(
      <Box 
        id='workspacePanel' 
        alignItems='center'
        shadowOpacity={0.5}
        shadowY={1}
        shadowBlur={10}
        borderBottom={1}
        borderColor='fill2'
        boxColor='fill4'
        height={36}>
        <Button
          cursor='pointer'
          shadowOpacity={0.35}
          shadowY={1}
          shadowX={1}
          shadowBlur={5}
          justifyContent='evenly'
          id='button'
          marginX={10} 
          borderRadius={2} 
          boxColor='key' 
          width={72} 
          height={22}>
            <Text 
              
              disabled
              translation='انشاء' 
              size='xs' 
              textColor='white' 
              textAlign='center' 
              lineHeight={22}>
              CREATE
            </Text>
        </Button>
      </Box>    
    )
  }
}

export default WorkspacePanel