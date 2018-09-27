import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import meteo from "./components/meteo";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <meteo />
      </div>
    );
  }
}

const styles = StyleSheet.create({
container:{
  alignItems: 'center',
  backgroundColor: '#61b3da'
  
}

});

