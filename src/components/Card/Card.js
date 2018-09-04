import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import { _styles } from './styles'
import Box from '../Box'
import Text from '../Text'
import Icon from '../Icon'
import Button from '../Button'

class Card extends React.Component {
  render() {
    const { title, field1, field2, field3, tags } = this.props.data
    return (
      <Button
        {...this.props}
        padding={0}
      >
        <Box margin={10} paddingTop={10} justifyContent='center' width='25%'>
          <Icon icon='person' iconColor='primary' width={45} height={45} />
        </Box>
        <Box margin={5} flexDirection='column' width='70%'>
          <Box width='100%' height='100%' flexDirection='column' justifyContent='evenly'>
            <Box alignItems='center' height='25%'>
              <Text lineHeight={40} translation={title.ar} overflow='ellipsis' size='xs' textColor='primary' >{ title.en }</Text>
            </Box>
            <Box height='50%' flexDirection='column' justifyContent='evenly'>
              <Text lineHeight={20} translation={field1.ar} overflow='ellipsis' size='xs' textColor='secondary'>{ field1.en }</Text>
              <Text lineHeight={20} translation={field2.ar} overflow='ellipsis' size='xs' textColor='secondary'>{ field2.en }</Text>
              <Text lineHeight={20} translation={field3.ar} overflow='ellipsis' size='xs' textColor='secondary'>{ field3.en }</Text>
            </Box>
            <Box alignItems='center' height='25%'>
              { tags.map((tag) => (
                <Box marginY={3} width={36} height={6} key={tag.id} boxColor={tag.color} />
              )) }
            </Box>
          </Box>
        </Box>
      </Button>
    )
  }
}

// Styles logic is imported from _styles.js
// Destructuring styles & lang from theme props passed from Rhino (Provider Component)
// Theme object contains the following properties { theme, lang, sizes, styles, setTheme, setLang }
const styles = ({ styles, lang }) => _styles({ styles, lang })

Card.propTypes = {
  data: PropTypes.object,
  classes: PropTypes.object
}

export default injectSheet(styles)(Card)
