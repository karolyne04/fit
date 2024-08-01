// screens/HistoryScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Title } from 'react-native-paper';

export default function History() {
  return (
    <View style={styles.container}>
     <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Histórico</Title>
          <Text style={styles.text}>Exiba seu histórico de corridas aqui.</Text>
        </Card.Content>
      </Card>
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
  card: {
    width: '80%',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
    marginVertical: 10,
  },
});
