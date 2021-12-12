import React from 'react';
import {ScrollView, Image, StyleSheet,  View, Text,  } from 'react-native';

import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default function DetailsScreen(props) {
  const findMovieById = (id) => {
    let foundUser = null;
    let MOVIES=props.route.params.pelis;
    for (let key in MOVIES) {
        if (MOVIES[key].id == id) {
          return MOVIES[key];
        }
    }
  }
  let mipeli=findMovieById(props.route.params.message);
  let miposter=mipeli.poster;
  return (
        <ScrollView style={{ flex: 1 }}>
          <Card style={styles.card}>
                <Card.Title>Detalles de la Película</Card.Title>
                <Card.Divider/>
                <Card.Image style={styles.cardImg} source={{ uri: miposter }} />
                <Text style={{marginBottom: 10}}>
                {mipeli.title}
                </Text>
                <Text style={{marginBottom: 10}}>
                {mipeli.director}
                </Text>
                <Text style={{marginBottom: 10}}>
                {mipeli.synopsis}
                </Text>
                <Button title="Volver atrás" onPress={() => props.navigation.goBack()} />
            </Card>
          </ScrollView>
  );
}


const styles = StyleSheet.create({
  card: {
      paddingTop: 5,
      paddingRight: 5,
      paddingBottom: 10,
      paddingLeft: 10
  },
  cardImg: {
    height: 260,
    resizeMode: 'contain'
  }
});