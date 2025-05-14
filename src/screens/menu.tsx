import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../app/style';

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/logoArrastão.png')} // Substitua pelo caminho correto
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.heading}>Conta</Text>

      <TouchableOpacity style={styles.accountButton}>
        <Text style={styles.accountButtonText}>Alterar dados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.accountButton}>
        <Text style={styles.accountButtonText}>Alterar senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.accountButton}>
        <Text style={styles.accountButtonText}>Configurações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.accountButton}>
        <Text style={styles.accountButtonText}>Dados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.accountButton}>
        <Text style={styles.accountButtonText}>Privacidade</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.accountButton}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

