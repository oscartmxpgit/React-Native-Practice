import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Image, Text, View  } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default function DetallesAutor(props) {

    let listaTrabajos = [{fecha: '2012-2015',  desc: 'Administrador de redes'}, {fecha: '2015-2019',  desc: 'Ingeniero informático'}]

    //let miAutor=props.route.params.message;
    let miAutor = {
        name: 'Oscar',
        email: 'oscar.trujillo1985@gmail.com',
        phone: '604 12 07 83',
        twitter: '@oscartmxp',
      };

    return (
        <View style={{ flex: 1 }}>

            <Card style={styles.card}>
                <Card.Title>Página de Curriculum</Card.Title>
                <Card.Divider/>
                <Text style={{marginBottom: 10}}>
                Lista de trabajos de {miAutor.name}
                </Text>
                <ScrollView>
                {
                listaTrabajos.map((trab) => (
                    <ListItem bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{trab.fecha + ' - ' + trab.desc}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                    </ListItem>
                ))
                }
                </ScrollView>
                <Button title="Volver atrás" onPress={() => props.navigation.goBack()} />
            </Card>

            <StatusBar style="auto" />
        </View>
        );
    }

const styles = StyleSheet.create({
    card: {
        paddingTop: 5,
        paddingRight: 5,
        paddingBottom: 10,
        paddingLeft: 10
    }
  });
