import React, { Component } from 'react';
import {

  StyleSheet
} from 'react-native';

module.exports =StyleSheet.create({
  welcomeArea:{
    flex:1,
    backgroundColor:'#0c1212',

  },
  welcomeHeader:{
    flex:1,
    backgroundColor:'#0c1212',
    justifyContent:'center',
    alignItems:'center',
  },
  welcomeMenu:{
    flex:1,
    backgroundColor:'#0c1212',
    justifyContent:'center',
    flexDirection:'row',
  },
  headerTitle:{
    fontSize:40,
    color:'#fff',
  },
  companyName:{
    fontSize:30,
    color:'#fff',
  },
  SingleMenu:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
   
  },
  menuIcon:{
    fontSize:50,
    color:'#74d8bb'
   
  },
  menuTtile:{
    fontSize:20,
    color:'#74d8bb'

  },
  API: {
    paddingTop: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  item:{
    margin: 5,
    padding:5,
    color:'slategrey',
    backgroundColor:'#F5FCFF',
    textAlign:'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },

});