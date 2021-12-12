import React from 'react';
import { Linking, StyleSheet, Image, Text, View  } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


export default function DetailsScreen(props) {
  const navegarCurr = () => {
    props.navigation.navigate('Curriculum',
    {
      message: autor,
    }
    )
  }

  const autor = {
    name: 'Oscar',
    email: 'oscar.trujillo1985@gmail.com',
    phone: '604 12 07 83',
    twitter: '@OscarTrujilloXp',
  };

  let emailLink = 'mailto:'+ autor.email;
  let telLink = 'tel:'+ autor.phone;
  let twittLink = 'https://twitter.com/'+ autor.twitter;


  return (
    <View style={{ flex: 1 }}>
      <Card style={styles.card}>
            <Card.Title>Información sobre el autor</Card.Title>
            <Card.Divider/>
            <Text style={{marginBottom: 10}}>
            Aplicación creada por { autor.name }. A continuación puede consultar más información sobre el autor
            </Text>
            <Icon style={styles.icon} name="mail" type="ionicon"/>
            <Text style={{color: 'blue'}}
                  onPress={() => Linking.openURL(emailLink)}>
              { autor.email }
            </Text>

            <Icon style={styles.icon} name="call" type="ionicon"/>
            <Text style={{color: 'blue'}}
                  onPress={() => Linking.openURL(telLink)}>
              { autor.phone }
            </Text>

            <Icon style={styles.icon} name="logo-twitter" type="ionicon"/>
            <Text style={{color: 'blue'}}
                  onPress={() => Linking.openURL(twittLink)}>
              { autor.twitter }
            </Text>


            <Button
            title='Detalles del Currículum'

            onPress={() => navegarCurr()}
          />
      </Card>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
      paddingTop: 5,
      paddingRight: 5,
      paddingBottom: 10,
      paddingLeft: 10,
      width: '100%',
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center'
  },
  icon: {
    width: 25,
    height: 25,

  },
});