
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Content, Icon } from 'native-base';
import{StackNavigator} from 'react-navigation';
const WelcomeScreen =require('./app/js/Welcome');
const PharmacyScreen =require('./app/js/Pharmacy');
const PharmacyScreen2 =require('./app/js/Pharmacy2');
const MovieScreen =require('./app/js/Movies');
const GoodsScreen =require('./app/js/Goods');
const HealthCareScreen=require('./app/js/HealthCare');
const PersonalCareScreen=require('./app/js/PersonalCare');


const medplus = StackNavigator({
  Welcome: { screen: WelcomeScreen },
  Pharmacy: { screen: PharmacyScreen },
  PharmacyTwo: { screen: PharmacyScreen2 },
  MovieScreen: { screen: MovieScreen },
  Goods:{screen:GoodsScreen},
  HealthCare:{screen:HealthCareScreen},
  PersonalCare:{screen:PersonalCareScreen}
  
});



AppRegistry.registerComponent('medplus', () => medplus);
