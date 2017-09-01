import React,{Component} from 'react';
import { StyleSheet, Text, View, ListView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Detail from './Detail';

const BookDetail = (props) => {
    const goToPageTwo = () => Actions.Detail({text: props.title,des:props.description});
    return(
    <View style={styles.container}>
        <Image source={{uri: props.book_image}} 
        style={styles.image}  resizeMode = "contain"/>
        <View style={styles.description}>
            <Text style = {styles.title}>{props.title}</Text>
            <Text style = {styles.author}>{props.author}</Text>
            <Text onPress={goToPageTwo}> More Detail </Text>
        </View>
    </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    image: {
        flex: 1,
        height: 120,
        width: 50,
    },
    description:{
        flex: 3,
        marginLeft: 15
    },
        title: {
        fontSize: 20,   
    },
        author: {
        fontSize: 18, 
    },  
});
export default BookDetail;