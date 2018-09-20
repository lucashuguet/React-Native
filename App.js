import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Coucou</h1>
        </header>
        <p className="App-intro">
          Ceci a été programmé avec react,
          par Lucas Huguet.
        </p>
      </div>
    );
  }
}

const styles = StyleSheet.create({

  
});
