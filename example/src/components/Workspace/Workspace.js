import React from 'react'
import { Box, Card } from 'rhinoui'

class Workspace extends React.Component {
  render() {
    return (
      <Box margin={5}>
        <Card
          cursor='pointer'
          borderWidth={1}
          borderColor='fill2'
          shadowY={1}
          shadowOpacity={0.5}
          shadowBlur={10}
          link 
          borderRadius={3} 
          boxColor='fill7' 
          margin={5}
          width={285}
          data={{
          title: {
            en: 'Osama Ahmaro',
            ar: 'اسامه احمرو'
          } ,
          field1: {
            en: 'Developer',
            ar: 'مبرمج'
          },
          field2: {
            en: 'Jerusalem, Israel',
            ar: 'القدس, اسرائيل'
          } ,
          field3: {
            en: 'osama.ahmaro@gmail.com',
            ar: 'osama.ahmaro@gmail.com'
          },
          tags: [
            {
              id: 'tag1',
              title: 'Tag 1',
              color: '#B84243'
            },
            {
              id: 'tag2',
              title: 'Tag 2',
              color: '#B48742'
            },
            {
              id: 'tag3',
              title: 'Tag 1',
              color: '#6FB544'
            },
            {
              id: 'tag4',
              title: 'Tag 2',
              color: '#6D6D6D'
            }
          ]
        }} />
      </Box>
    )
  }
}

export default Workspace