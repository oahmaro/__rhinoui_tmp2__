import React from 'react'
import { Box, Button, Icon, Text } from 'rhinoui'

class MainPanel extends React.Component {
  render() {
    return(
      <Box 
        id='mainPanel'
        zIndex={2}
        borderBottom={1} 
        borderColor='fill2'
        boxColor='fill6' 
        height={36}>
        <Box width='auto' marginX={5}>
          <Button link>
            <Icon iconColor='primary' padding={10} width={36} height={36} icon='app'/>
          </Button>
          <Button link alignItems='center' marginX={10}>
            <Text translation='جهات الاتصال' textColor='primary' lineHeight={36}>Contacts</Text>
          </Button>
        </Box>
      </Box>      
    )
  }
}

export default MainPanel