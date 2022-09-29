import React from "react";
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function BotaoIngressoTabBar(color, size, focused) {
    return (
        <View style={[style.container, {elevation: focused ? 0 : 5}]}>
            <MaterialIcons
                name='confirmation-number'
                color={'#fff'}
                size={30}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginBottom:30,
        backgroundColor: '#63E1FD'
    },

})