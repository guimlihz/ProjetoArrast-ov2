import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '@/app/style';

const vagas = [
  { cargo: 'Ajudante Geral', empresa: 'Telecom', local: 'Taboão da Serra - SP', destaque: true },
  { cargo: 'Auxiliar de limpeza', empresa: 'Limpol', local: 'São Paulo - SP' },
  { cargo: 'Técnico de TI', empresa: 'Veronet', local: 'Taboão da Serra - SP' },
  { cargo: 'Forjador', empresa: 'Cimpal', local: 'Taboão da Serra - SP' },
  { cargo: 'Ajudante Geral', empresa: 'Forun', local: 'São Paulo - SP' },
];

export default function VagasScreen(){
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('@/assets/images/logoArrastão.png')} // Substitua pelo caminho correto
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.heading}>Vagas</Text>

      {vagas.map((vaga, index) => (
        <View
          key={index}
          style={[styles.vagaCard, vaga.destaque && styles.vagaDestaque]}
        >
          <View>
            <Text style={styles.vagaCargo}>{vaga.cargo}</Text>
            <Text style={styles.vagaEmpresa}>{vaga.empresa}</Text>
            <Text style={styles.vagaLocal}>{vaga.local}</Text>
          </View>
          <TouchableOpacity style={styles.saibaMaisButton}>
            <Text style={styles.saibaMaisText}>Saiba mais</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};
