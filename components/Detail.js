import React,{Component} from 'react';
import { StyleSheet, Text, View ,ListView} from 'react-native';
import { Actions } from 'react-native-router-flux';
    
    const Detail = (props) =>(
      
        
          <View style={styles.container}>
              <Text>Detail :</Text>
              <Text>TITLE :{props.text}</Text>
              <Text>DESCRIPTION :{props.des}</Text>
              
          </View>
    )  
    
    
    const styles = StyleSheet.create({
      container: {
        
      },
    });
    export default Detail;