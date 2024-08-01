import { StyleSheet, View } from "react-native";
import { Card, Text, Title } from "react-native-paper";

export default function Settings() {
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content>
                <Title style={styles.title}>Configurações</Title>
                <Text style={styles.text}>Gerencie as configurações do seu aplicativo aqui.</Text>
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
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    card: {
        width: '80%',
    },
    text: {
        textAlign: 'center',
        marginVertical: 10,
    },
})