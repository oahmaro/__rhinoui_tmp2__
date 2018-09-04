import React, { Component, Fragment } from 'react'
import { _theme } from './utils/theme'
import { Rhino, createTheme, Box } from 'rhinoui'
import MainPanel from './components/MainPanel/MainPanel'
import WorkspacePanel from './components/WorkspacePanel/WorkspacePanel'
import HelpPanel from './components/HelpPanel/HelpPanel'
import Workspace from './components/Workspace/Workspace'
import Background from './components/Background/Background'

const modifier = (theme = {}, newTheme) => {
  return {
    ...theme,
    ...newTheme
  }
}

const theme = createTheme(modifier)
theme.updateTheme(_theme)

export default class App extends Component {
  render () {
    return (
      <Rhino theme='dark' lang='en' data={theme.getTheme()}>
        <Fragment>
          <Background />
          <MainPanel />
          <WorkspacePanel />
          <Workspace />
          <HelpPanel />
        </Fragment>
      </Rhino>
    )
  }
}
