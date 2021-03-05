import React from 'react'
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet, Button } from 'react-native'

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style>This is the home screen</Text>
                <Button onPress={() => navigation.navigate('Settings')}
                    title="Next"
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 40
    },
});