import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View  } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { DrawerActions } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';


export default function HomeScreen(props) {

  const updateDrawer = () => {
    const jumpToAction = DrawerActions.jumpTo('About');
    props.navigation.dispatch(jumpToAction);
    //props.navigation.navigate('About')

  };

  return (

    <View style={{ flex: 1 }}>
      <Card style={styles.card}>
            <Text style={{textAlign: 'center', marginBottom: 10}}> Bienvenido a</Text>
            <Card.Title>¡Videoclub!</Card.Title>
            <Card.Divider/>
            <Text style={{marginBottom: 10}}>
            ¡Videoclub es una aplicación desarrollada con Ionic.{"\n"}
            Para acceder a la gestión del videoclub pulsa el siguiente botón:
            </Text>
            <Button
            icon={<Icon name='videocam' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Acceso a iVideoClub'
            onPress={() => props.navigation.navigate('VideoClub')}
        />
        </Card>

      <Card style={styles.card}>
            <Card.Title>Información sobre el autor</Card.Title>
            <Card.Divider/>
            <Text style={{marginBottom: 10}}>
            Aplicación desarrollada por Oscar
            </Text>
            <Button
            icon={<Icon name='person' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Consultar Información'
            onPress={() => updateDrawer()}
            />
        </Card>
        <StatusBar style="auto" />
    </View>
  );

}


const styles = StyleSheet.create({
    card: {
        flex:1,
        backgroundColor: '#fff',
        paddingTop: 5,
        paddingRight: 5,
        paddingBottom: 10,
        paddingLeft: 10,
        width: '100%',
    }
  });
