
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

class Pharmacy extends Component{
    static navigationOptions = {
        title: 'Pharmacy',
      
      };
    render(){
        return(
        
                
                <View style={Styles.welcomeArea}>
                    <View style ={Styles.welcomeHeader}>
                        <Text style={Styles.headerTitle}>welcome</Text>
                        <Text style={Styles.companyName}>Pharmacy</Text>
                    </View>
                    <View style ={Styles.welcomeMenu}>
                        
                            <TouchableOpacity style ={Styles.SingleMenu} onPress={() => this.props.navigation.navigate('PharmacyTwo')}>
   
                            {/* brwThDb -browse through Database */}
                            <Icon style={Styles.menuIcon} name ='ios-pin'/>
                               <Text style={Styles.menuTtile}>Browse Through database</Text>
                             
                            </TouchableOpacity>  
                            <TouchableOpacity style ={Styles.SingleMenu} onPress={() => this.props.navigation.navigate('MovieScreen')}>
                               <Icon style={Styles.menuIcon} name ='ios-pin'/>
                               <Text style={Styles.menuTtile}>Type Your Medicine(Movies)</Text>
                             
                            </TouchableOpacity>  
                                                        
                            
                     </View>   
                     <View style ={Styles.welcomeMenu}>
                        
                            <TouchableOpacity style ={Styles.SingleMenu}>
                            <Icon style={Styles.menuIcon} name ='ios-pin'/>
                               <Text style={Styles.menuTtile}>Picture of Your Prescription</Text>
                             
                            </TouchableOpacity>  
                            <TouchableOpacity style ={Styles.SingleMenu}>
                            <Icon style={Styles.menuIcon} name ='ios-pin'/>
                            <Text style={Styles.menuTtile}>Pickup From Gallery</Text>
                             
                            </TouchableOpacity>  
                                                        
                            
                     </View>   
                     <View style ={Styles.welcomeMenu}>
                        
                            <TouchableOpacity style ={Styles.SingleMenu}>
                            <Icon style={Styles.menuIcon} name ='ios-pin'/>
                               <Text style={Styles.menuTtile}>Refill From Your Previous Order</Text>
                             
                            </TouchableOpacity>  
                            <TouchableOpacity style ={Styles.SingleMenu}>
                            <Icon style={Styles.menuIcon} name ='ios-pin'/>
                            <Text style={Styles.menuTtile}>Help - How To Use It</Text>
                             
                            </TouchableOpacity>  
                                                        
                            
                     </View>   
            
                </View>
                
        )
    }

}


module.exports =Pharmacy;