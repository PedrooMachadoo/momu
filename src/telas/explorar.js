import React from 'react';
import * as Location from 'expo-location';
//import {Location, Permissions} from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput, ScrollView, FlatList, Dimensions, Platform } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { ComponenteBola } from '../componentes/componenteBola';
import { ComponenteQuadrado } from '../componentes/componenteQuadrado';
import { ComponenteRetangulo } from '../componentes/componenteRetangulo';
import { useState, useEffect } from 'react';


import MapView, { Marker, Callout, Circle } from 'react-native-maps';



export function Explorar() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [marker, setMarker] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      
    })();
  }, []);

  const novaMarcacao = (coordinate) => {
    setMarker([...marker, coordinate]);
  }

  return (
    <View style={style.container}>

      <StatusBar style="auto" />

      <View style={style.maps}>
        <MapView
          onPress={(e) => novaMarcacao(e.nativeEvent.coordinate)} /* cria marcação por click*/
          style={style.map}
        // initialRegion={{
         //   latitude: -8.1551218,
         //   longitude: -34.9215322,
          //  latitudeDelta: 0.922,
          //  longitudeDelta: 0.0421,
        //  }}
          showsUserLocation={true}
          loadingEnabled={true}
          mapType='standard'
        >

          {marker.length > 0 && (
            marker.map((m) => {
              return (
                <Marker
                  coordinate={m}
                  key={Math.random().toString()}
                  pinColor="#63E1FD"
                  title="Local evento"
                  description="descrição do evento (evento perto de você)"
                >
                  <Callout>
                    <View style={style.marcacao} />
                  </Callout>
                </Marker>
              )
            })
          )}

        {/* colocar um circulo em vola do usuario com animação 
        <Circle
            center={{}}
            radius={2000}
            strokeWidth={0}
            fillColor="rgba(99,225,253,0.2)"
          />*/}

          {/* <Marker
            coordinate={{latitude: -8.1551218, longitude: -34.9215322,}}
            title="Local evento"
            description="descrição do evento (evento perto de você)"
          />*/}
        </MapView>
      </View>

      <View style={style.absolute}>

        <View style={style.filtro}>

          {/*<TextInput
            style={style.input}
            placeholder='pesquisar'
            autoCorrect={false}
          />*/}

          <Text style={style.Botaofiltro}>
            Filtro
          </Text>

          <MaterialIcons
            style={style.input2}
            name='tune'
            color={'black'}
            size={24}
          />

        </View>

        <View style={style.bola}>

          <MaterialIcons
            style={style.input3}
            name='my-location'
            color={'black'}
            size={24}
          />

        </View>

      </View>

      <View style={style.containerQuadrado}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <ComponenteQuadrado />
          <ComponenteQuadrado />
          <ComponenteQuadrado />
          <ComponenteQuadrado />
        </ScrollView>
      </View>

    </View>
  );
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  maps: {
    //marginTop:35,
    width: '100%',
    height: '60%',
    backgroundColor: '#63E1FD',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
    //marginBottom: 200
  },

  map: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },

  absolute: {
    position: 'absolute',
    flexDirection: 'row',
    //justifyContent: 'space-between'
  },

  filtro: {
    marginTop: 80,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: 'row',
    //justifyContent: 'space-between',
    width: '55%',
    alignItems: 'center',
    paddingTop: 280,

  },

  Botaofiltro: {

    backgroundColor: 'white',
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 9,
    paddingHorizontal: 10

  },

  input2: {
    backgroundColor: 'white',
    paddingRight: 10,
    paddingVertical: 10,
    paddingLeft: 15,
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
  },

  input3: {

    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 13


  },

  bola: {
    width: 50,
    height: 50,
    backgroundColor: '#ffff',
    borderRadius: 50,
    elevation: 1,
    marginTop: 360,
    marginLeft: 100

  },

  containerQuadrado: {

    flexDirection: 'row',
    paddingVertical: 30,
    paddingHorizontal: 10
  },

  marcacao: {
    width: 30,
    height: 30,
    backgroundColor: '#c1c1c1'
  }

})