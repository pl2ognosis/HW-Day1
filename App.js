import React,{Component} from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import BookList from './components/BookList';
import {Router, Scene} from 'react-native-router-flux';
import Detail from './components/Detail';


export default class App extends React.Component {

  render() {
    return (
      
      <Router>
        <Scene key="root">
          <Scene key="BookList" component={BookList} title="Top BEST SELLER Book" initial={true}/>
          <Scene key="Detail" component={Detail} title="Detail of Book" />
        </Scene>
      </Router>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 40
  },
});