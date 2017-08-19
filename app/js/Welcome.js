
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

class Welcome extends Component{
    static navigationOptions = {
        title: 'Welcome',
        header:null,
      };
    render(){
        return(
        
                
                <View style={Styles.welcomeArea}>
                    <View style ={Styles.welcomeHeader}>
                        <Text style={Styles.headerTitle}>welcome</Text>
                        <Text style={Styles.companyName}>Medplus</Text>
                    </View>
                    <View style ={Styles.welcomeMenu}>
                        
                            <TouchableOpacity style ={Styles.SingleMenu} onPress={() => this.props.navigation.navigate('Pharmacy')}>
                            <Icon style={Styles.menuIcon} name ='ios-pin'/>
                               <Text style={Styles.menuTtile}>Online Pharmacy</Text>
                             
                            </TouchableOpacity>  
                            <TouchableOpacity style ={Styles.SingleMenu} onPress={() => this.props.navigation.navigate('Goods')}>
                               <Icon style={Styles.menuIcon} name ='ios-pin'/>
                               <Text style={Styles.menuTtile}>Consumer Goods</Text>
                             
                            </TouchableOpacity>  
                                                        
                            
                     </View>   
                     <View style ={Styles.welcomeMenu}>
                        
                            <TouchableOpacity style ={Styles.SingleMenu}>
                            <Icon style={Styles.menuIcon} name ='ios-pin'/>
                               <Text style={Styles.menuTtile}>Find a Doctor</Text>
                             
                            </TouchableOpacity>  
                            <TouchableOpacity style ={Styles.SingleMenu}>
                            <Icon style={Styles.menuIcon} name ='ios-pin'/>
                            <Text style={Styles.menuTtile}>My Order History</Text>
                             
                            </TouchableOpacity>  
                                                        
                            
                     </View>   

                     <View style ={Styles.welcomeMenu}>
                        
                            <TouchableOpacity style ={Styles.SingleMenu}>
                            <Icon style={Styles.menuIcon} name ='ios-pin'/>
                               <Text style={Styles.menuTtile}>My Prescription</Text>
                             
                            </TouchableOpacity>  
                            <TouchableOpacity style ={Styles.SingleMenu}>
                            <Icon style={Styles.menuIcon} name ='ios-pin'/>
                            <Text style={Styles.menuTtile}>My Reward Schemes</Text>
                             
                            </TouchableOpacity>  
                                                        
                            
                     </View>   

                     <View style ={Styles.welcomeMenu}>
                        
                            <TouchableOpacity style ={Styles.SingleMenu}>
                            <Icon style={Styles.menuIcon} name ='ios-pin'/>
                               <Text style={Styles.menuTtile}>My Offers</Text>
                             
                            </TouchableOpacity>  
                            <TouchableOpacity style ={Styles.SingleMenu}>
                            <Icon style={Styles.menuIcon} name ='ios-pin'/>
                            <Text style={Styles.menuTtile}>My Profile</Text>
                             
                            </TouchableOpacity>  
                                                        
                            
                     </View>   
            
                </View>
                
        )
    }

}


module.exports =Welcome;