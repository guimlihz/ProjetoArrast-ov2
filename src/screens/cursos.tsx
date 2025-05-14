import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../../app/style';

export default function CursosScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("@/assets/images/logoArrastão.png")} // Substitua pelo caminho correto
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.heading}>Cursos livres</Text>

      <View style={styles.card}>
        <Image
          source={require('@/assets/images/cursoIngles.jpg')} // Imagem do curso de inglês
          style={styles.courseImage}
          resizeMode="cover"
        />
        <View style={styles.courseInfo}>
          <Text style={styles.courseTitle}>Curso de inglês básico</Text>
          <Text style={styles.courseDetails}>Carga horária: 40 horas</Text>
        </View>
      </View>

      <View style={[styles.card, styles.selectedCard]}>
        <Image
          source={require("@/assets/images/cursoInformatica.jpg")} // Imagem do curso de informática
          style={styles.courseImage}
          resizeMode="cover"
        />
        <View style={styles.courseInfo}>
          <Text style={styles.courseTitle}>Curso de Espanhol</Text>
          <Text style={styles.courseDetails}>Carga horária: 30 horas</Text>
        </View>
      </View>
    </ScrollView>
  );
};

