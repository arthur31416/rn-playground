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

class Projects extends Component {
  state = {
    projects: [],
    limit: 10
  };

  static api = API.create();

  static propTypes = {
    dispatch: PropTypes.func
  };

  _fetchProjects(limit) {
    fetch(`https://api.lendix.com/projects?limit=${limit}&offset=0`)
      .then(res => res.json())
      .then(resJson => this.setState({
        projects: resJson.projects
      }))
  }

  componentWillMount() {
    this._fetchProjects(this.state.limit);
  }

  _loadMore = () => {
    const { limit } = this.state;
    const newLimit = limit + 10;

    this._fetchProjects(newLimit);

    this.setState({
      limit: newLimit
    });
  };

  render () {
    const { projects } = this.state;

    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />

        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Here are all the projects
            </Text>
            <FullButton
              text='Load more'
              onPress={this._loadMore}
            />

            {
              projects.map(proj => (
                <Text
                  key={proj.id}
                  style={styles.sectionText}>
                  { proj.name } - { proj.rate }%
                </Text>
              ))
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default connect()(Projects)