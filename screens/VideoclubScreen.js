import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, ListItem, Button, Avatar } from 'react-native-elements';
import { View,  SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { CONFIG } from "../shared/config";

export default class VideoClub extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      isLoading: false,
      error: false
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    try {
        this.setState({ isLoading: true });
        let response = await fetch(CONFIG.baseUrl + "/catalog");
        let data = await response.json();
        console.log(data);
        this.setState({ movies: data, isLoading: false });
    } catch (error) {
        console.log(error);
        this.setState({ error: error, isLoading: false });
    }
}

  render() {
    const { movies, error, isLoading } = this.state;
    if (error){
      <SafeAreaProvider style={{ flex: 1}}>
         <SafeAreaView style={styles.container}>
          <Text style={{marginBottom: 10}}>error.message</Text>
        </SafeAreaView>
        </SafeAreaProvider>
    }
    if (isLoading){
      <SafeAreaProvider style={{ flex: 1}}>
        <SafeAreaView style={styles.container}>
          <Text style={{marginBottom: 10}}>"Loading..."</Text>
        </SafeAreaView>
        </SafeAreaProvider>
    }

    return (
    <SafeAreaProvider style={{ flex: 1}}>
      <SafeAreaView style={styles.container}>
      <Button title="Volver atrás" onPress={() => this.props.navigation.goBack()} />
        <ScrollView>
        {
          movies.map((movie) => (
            <ListItem
              bottomDivider
              key={movie.id}
              onPress={() => this.props.navigation.navigate('Details',
              {
                pelis: movies,
                message: movie.id
              })}
            >
              <Avatar source={{ uri: movie.poster }} />
              <ListItem.Content>
                <ListItem.Title>{movie.title + ' - ' + movie.director}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          ))
        }
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 10,
    paddingLeft: 10,
    width: '100%',

  },
});