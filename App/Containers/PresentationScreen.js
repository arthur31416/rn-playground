import React, {PropTypes} from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/PresentationScreenStyle'

class PresentationScreen extends React.Component {

  static propTypes = {
    componentExamples: PropTypes.func
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.clearLogo} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Text style={styles.sectionText} >
              Welcome here
            </Text>
          </View>

          <RoundedButton onPress={this.props.projects}>
            Projects
          </RoundedButton>

          <RoundedButton onPress={this.props.lendixLogin}>
            Lendix Login
          </RoundedButton>

          <View style={styles.centered}>
            <Text style={styles.subtitle}>Made with ❤️ by Arthur</Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    projects: NavigationActions.projects,
    lendixLogin: NavigationActions.lendixLogin
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PresentationScreen)
