import React, { Component, Fragment } from 'react'

import { Text, Rhino, createTheme, Box, Icon, Button, Card } from 'rhinoui'

const modifier = (theme = {}, newTheme) => {
  return {
    ...theme,
    ...newTheme
  }
}

const theme = createTheme(modifier)
theme.updateTheme({
  dark: {
    text: {
      primary: '#cccccb',
      secondary: '#808080',
      disabled: '#515151',
      other: '#9e9d9e'
    },
    state: {
      key: '#26AA91',
      success: '',
      warning: '#E2C08C',
      error: '#9E2626'
    },
    ui: {
      fill1: '#111213',
      fill2: '#191919',
      fill3: '#1D1F23',
      fill4: '#212326',
      fill5: '#26292B',
      fill6: '#24292E',
      fill7: '#2A2F33',
      fill8: '#31363A',
      fill9: '#313B43'
    }
  },
  light: {
    text: {
      primary: 'black',
      secondary: 'black',
      disabled: 'black',
      other: 'black'
    },
    state: {
      key: '#26AA91',
      success: '',
      warning: '',
      error: ''
    },
    ui: {
      fill1: '#0B303D',
      fill2: '#E9EEF0',
      fill3: '#BECDD3',
      fill4: '#A8BDC4',
      fill5: '#92ADB6',
      fill6: '#7D9CA7',
      fill7: '#678C99',
      fill8: '#517C8A',
      fill9: '#3C6B7C'
    }
  },
  sizes: {
    ar: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '17px',
      xl: '21px'
    },
    en: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '22px'
    }
  }
})

export default class App extends Component {
  render () {
    return (
      <Rhino theme='dark' lang='en' data={theme.getTheme()}>
        <Fragment>
          <Box 
            id='background'
            zIndex={-1}
            boxColor='fill3'
            position='absolute'
            width='100%'
            height='100%' />

          <Box 
            id='mainPanel'
            zIndex={2}
            borderBottom={1} 
            borderColor='fill2'
            boxColor='fill6' 
            height={36}>
            <Box width='auto' marginX={5}>
              <Button link boxHoverColor='fill9'>
                <Icon iconColor='primary' padding={10} width={36} height={36} icon='app'/>
              </Button>
              <Button link boxHoverColor='fill9' alignItems='center' marginX={10}>
                <Text translation='جهات الاتصال' textColor='primary' lineHeight={36}>Contacts</Text>
              </Button>
            </Box>
          </Box>
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
                shadowOpacity={0.35}
                shadowY={1}
                shadowX={1}
                shadowBlur={5}
                justifyContent='evenly'
                link
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
        </Fragment>
      </Rhino>
    )
  }
}
