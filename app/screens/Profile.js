import React from 'react'
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet, Button } from 'react-native'

export default function Profile({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style>This is the profile screen</Text>
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