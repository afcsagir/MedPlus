
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';



import { Container, Content, Icon } from 'native-base';
var Styles =require('./../style/Style');

class Goods extends Component{
    static navigationOptions = {
        title: 'Consumer Goods',
      
      };
    render(){
        return(
        
                
                <View style={Styles.welcomeArea}>
                    <View style ={Styles.welcomeHeader}>
                        <Text style={Styles.headerTitle}>welcome</Text>
                        <Text style={Styles.companyName}>Pharmacy</Text>
                    </View>
                    <View style ={Styles.welcomeMenu}>
                        
                            <TouchableOpacity style ={Styles.SingleMenu} onPress={() => this.props.navigation.navigate('HealthCare')}>
   
                            {/* brwThDb -browse through Database */}
                            <Icon style={Styles.menuIcon} name ='ios-pin'/>
                               <Text style={Styles.menuTtile}>HealthCare</Text>
                             
                            </TouchableOpacity>  
                            <TouchableOpacity style ={Styles.SingleMenu} onPress={() => this.props.navigation.navigate('PersonalCare')}>
                               <Icon style={Styles.menuIcon} name ='ios-pin'/>
                               <Text style={Styles.menuTtile}>PersonalCare</Text>
                             
                            </TouchableOpacity>  
                                                        
                            
                     </View>   
                      
                     
            
                </View>
                
        )
    }

}


module.exports =Goods;