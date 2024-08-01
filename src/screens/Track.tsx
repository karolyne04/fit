// screens/TrackRunScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import * as Sensors from 'expo-sensors';
import { Button, Card, Title } from 'react-native-paper';

export default function Track() {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
  const [steps, setSteps] = useState(0);
  const [subscription, setSubscription] = useState<any>(null);

  const calculateMagnitude = ({ x, y, z }: { x: number; y: number; z: number }) => {
    return Math.sqrt(x * x + y * y + z * z);
  };

  const stepCounter = (accelerometerData: any) => {
    const { x, y, z } = accelerometerData;
    const magnitude = calculateMagnitude({ x, y, z });

    // Limite para detectar passos (ajuste conforme necessário)
    const stepThreshold = 1.2;

    if (magnitude > stepThreshold) {
      setSteps((prevSteps) => prevSteps + 1);
    }
  };

  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);
        stepCounter(accelerometerData);
        // lógica para calcular passos
      })
    );
    Accelerometer.setUpdateInterval(1000);
  };

  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Passos</Title>
          <Text style={styles.text}>{steps}</Text>
        </Card.Content>

      </Card>
      <View style={styles.buttonContainer}>
        <Button mode="contained"  onPress={subscribe} style={styles.button}>
          Iniciar
        </Button>
        <Button mode="outlined" onPress={unsubscribe} style={styles.button}>
          Parar
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: '60%',
  },
  card: {
    marginBottom: 20,
    width: '80%',
  },
  button: {
    width: "48%",

  }
})
