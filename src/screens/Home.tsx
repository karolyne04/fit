// screens/HomeScreen.js
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Button, Card, Text, Title } from 'react-native-paper';

export default function Home() {
    const navigation = useNavigation();
    
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://media.istockphoto.com/id/932252642/pt/foto/the-perfect-combo-of-fresh-air-and-fitness.jpg?s=612x612&w=0&k=20&c=rITU6rvLHz-TOyC3zP219_5jzd_UsOUK9OjoUDFK598='}} style={styles.image}/>
      
      <Card>
        <Card.Content>
          <Title>Bem vindo ao Rastreador de Fitness</Title>
          <Text>Acompanhe suas corridas, veja o histórico e gerencie as configurações.</Text>
        </Card.Content>
      </Card>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={() => navigation.navigate('Track')} style={styles.button}>
          Registrar Corrida
        </Button>
        <Button mode="outlined" onPress={() => navigation.navigate('History')} style={styles.button}>
          Histórico
        </Button>
        <Button mode="outlined" onPress={() => navigation.navigate('Settings')} style={styles.button}>
          Configurações
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: "100%",
    height:200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer:{
    width: '80%',
    alignItems: 'center',
  },
  button: {
    marginVertical: 10,
  }
});
