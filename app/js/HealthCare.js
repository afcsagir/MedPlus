import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
var Styles =require('./../style/Style');
class HealthCare extends Component {

  static navigationOptions = {
    title: 'HealthCare',
  
  };
  state = {
    data: []
  };

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch('https://randomuser.me/api?results=500');
    const json = await response.json();
    this.setState({ data: json.results });
  };

  render() {
    return (

        <View style ={Styles.API}>
      
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>
            <Text style={Styles.Item} >
              {`${item.name.first} ${item.name.last}`}
            </Text>}
        />
      </View>
    );
  }
}

module.exports =HealthCare;
