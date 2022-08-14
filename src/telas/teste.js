import { View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';


export function Teste() {

  const navigation = useNavigation();

  return (
    <View style={{ flex:1, backgroundColor: 'green', alignItems:'center', justifyContent: 'center'}}>
        <Text style={{ fontSize:22 }}> testando </Text>

        <Button title=' voltar' onPress={() => navigation.goBack() }/>
    </View>
  );
}