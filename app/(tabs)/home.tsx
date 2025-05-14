import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../style';
import {router} from 'expo-router'
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
       // source={require("@/assets/images/logoArrastão.png")} // Substitua pelo caminho correto da sua logo
        style={styles.logo}
        resizeMode="contain"
      />

      <TouchableOpacity style={[styles.button, styles.yellow] } onPress={() => router.push("/router/routerCursos")}>
        <Text style={styles.buttonTitle}  >Cursos livres</Text>
        <Text style={styles.buttonSubtitle}>Inscreva-se</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.red]} onPress={() => router.push("/router/routerVagas")}>
        <Text style={styles.buttonTitle}>Vagas de emprego</Text>
        <Text style={styles.buttonSubtitle}>Cadastre-se</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.blue]} onPress={() => router.push("/router/routerMenu")}>
        <Text style={styles.buttonTitle}>Conta</Text>
        <Text style={styles.buttonSubtitle}>Veja</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.green]} onPress={() => router.push("/router/routerCursos")}>
        <Text style={styles.buttonTitle}>Campanhas</Text>
        <Text style={styles.buttonSubtitle}>Veja</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;


