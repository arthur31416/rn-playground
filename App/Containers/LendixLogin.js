// An All Components Screen is a great way to dev and quick-test components
import React, { Component, PropTypes } from 'react'
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native'
import { Images } from '../Themes'
import FullButton from '../Components/FullButton'
import { connect } from 'react-redux'
// For API
import API from '../Services/Api'
import FJSON from 'format-json'

// Styles
import styles from './Styles/AllComponentsScreenStyle'

// API buttons here:
const endpoints = [
  { label: 'Get City (Boise)', endpoint: 'getCity', args: ['Boise'] },
  { label: 'Get City (Toronto)', endpoint: 'getCity', args: ['Toronto'] }
]

class LendixLogin extends Component {

  static api = API.create();

  static propTypes = {
    dispatch: PropTypes.func
  }

  _login = () => {
    fetch("https://api.lendix.com/sessions", {
      method: "POST",
      body: JSON.stringify({
        email: "XXX",
        password: "XXX",
        user: null
      }),
      headers: new Headers({
        'Connection': "keep-alive",
        'Content-Length': 76,
        'Content-Type': "application/json; charset=UTF-8",
        'Host': "api.lendix.com",
        'Origin': "https://app.lendix.com",
        'Referer': "https://app.lendix.com/login"
      })
    })
    .then(res => res.json())
    .then(resJson => console.log(resJson.session))
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />

        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
              You're gonna login soon
            </Text>
            <FullButton
              text='Login'
              onPress={this._login}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default connect()(LendixLogin)