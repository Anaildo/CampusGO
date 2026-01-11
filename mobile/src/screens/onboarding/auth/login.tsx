import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import {theme} from '../../../styles/theme'; 

export function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/onibus.png')}
        style={styles.image}
      />

      <Text style={styles.title}>Entrar</Text>
      <Text style={styles.subtitle}>Por favor, insira seus dados.</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>
          Ainda não possui conta?{' '}
          <Text style={styles.linkBold}>Cadastrar-se</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    color: theme.colors.primary,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.text,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: theme.colors.gray,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    color: theme.colors.text,
  },
  button: {
    width: '100%',
    height: 48,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: theme.colors.white,
    fontWeight: 'bold',
  },
  link: {
    color: theme.colors.text,
    marginTop: 12,
  },
  linkBold: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
});
