/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    Component,
  } from 'react';
  import {
    AppRegistry,
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  var Styles =require('./../style/Style');
  var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
  
  class Movies extends Component {
    static navigationOptions = {
        title: 'Movies',
      
      };
    constructor(props) {
      super(props);
      this.state = {
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        }),
        loaded: false,
      };
    }
  
    componentDidMount() {
      this.fetchData();
    }
  
    fetchData() {
      fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
            loaded: true,
          });
        })
        .done();
    }
  
    render() {
      if (!this.state.loaded) {
        return this.renderLoadingView();
      }
  
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderMovie}
          style={Styles.listView}
        />
      );
    }
  
    renderLoadingView() {
      return (
        <View style={Styles.container}>
          <Text>
            Loading movies...
          </Text>
        </View>
      );
    }
  
    renderMovie(movie) {
      return (
        <View style={Styles.container}>
          <Image
            source={{uri: movie.posters.thumbnail}}
            style={Styles.thumbnail}
          />
          <View style={Styles.rightContainer}>
            <Text style={Styles.title}>{movie.title}</Text>
            <Text style={Styles.year}>{movie.year}</Text>
          </View>
        </View>
      );
    }
  }
  

  

  module.exports =Movies;