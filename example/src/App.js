import React, { Component, Fragment } from 'react'

import { Text, Rhino, createTheme, Box, Icon } from 'rhinoui'

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
      key: '',
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
      xs: '11px',
      sm: '13px',
      md: '15px',
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
            color='fill3'
            position='absolute'
            width='100%'
            height='100%' />
          <Box 
            position='relative' 
            zIndex={2} 
            color='fill6'
            height={36} 
            borderBottom={0.5}
            justifyContent='between'
            >
            <Box>
              <Icon color='primary' icon='app'/>
              <Text paddingX={10} lineHeight={36} translation='جهات الاتصال' size='lg' color='primary'>Contacts</Text>
              <Text paddingX={10} lineHeight={36} translation='تعديلات' size='sm' color='secondary'>Configurations</Text>
            </Box>
            <Box width={200} justifyContent='around'>
              <Text lineHeight={36} translation='ملاحظات' size='sm' color='secondary'>Notification</Text>
              <Text lineHeight={36} translation='الملف الشخصي' size='sm' color='secondary'>Profile</Text>
            </Box>
          </Box>
          <Box 
            position='relative' 
            zIndex={1} 
            alignItems='center' 
            color='fill4' 
            height={36} 
            borderBottom={0.5} 
            shadowY={1} 
            shadowRadius={15}
            shadowOpacity={0.35}>
            <Text 
              marginX={20} 
              lineHeight={36} 
              translation='تغير المظهر' 
              size='sm' 
              color='key'
              link>
              Change Theme</Text>
          </Box>
          <Box 
            position='absolute' 
            bottom 
            zIndex={1} 
            alignItems='center' 
            color='fill4' 
            height={36} 
            width='100%' 
            borderTop={0.5}
            shadowY={1}
            shadowRadius={15}
            shadowOpacity={0.35}
            />
        </Fragment>
      </Rhino>
    )
  }
}
