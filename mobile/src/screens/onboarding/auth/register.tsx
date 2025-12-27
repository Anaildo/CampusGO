import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import { theme } from '../../../styles/theme';

export function RegisterScreen({ navigation }: any) {
  const [profile, setProfile] = useState<'student' | 'driver'>('student');

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../../assets/images/onibus.png')}
        style={styles.logo}
      />

      {/* Título */}
      <Text style={styles.title}>Cadastre-se</Text>
      <Text style={styles.subtitle}>
        Crie sua conta e junte-se a nós.
      </Text>

      {/* Tipo de perfil */}
      <View style={styles.switchContainer}>
        <TouchableOpacity
          style={[
            styles.switchButton,
            profile === 'student' && styles.switchActive,
          ]}
          onPress={() => setProfile('student')}
        >
          <Text
            style={[
              styles.switchText,
              profile === 'student' && styles.switchTextActive,
            ]}
          >
            Estudante
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.switchButton,
            profile === 'driver' && styles.switchActive,
          ]}
          onPress={() => setProfile('driver')}
        >
          <Text
            style={[
              styles.switchText,
              profile === 'driver' && styles.switchTextActive,
            ]}
          >
            Motorista
          </Text>
        </TouchableOpacity>
      </View>

     
      <TextInput
        style={styles.input}
        placeholder="Nome*"
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.input}
        placeholder="Email*"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        placeholderTextColor="#999"
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha*"
        placeholderTextColor="#999"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Criar conta</Text>
      </TouchableOpacity>

    
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>
          Já possui conta? <Text style={styles.linkBold}>Fazer login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  logo: {
    width: 52,
    height: 52,
    marginBottom: 24,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
  },
  switchContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },
  switchButton: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchActive: {
    backgroundColor: '#F5F5F5',
    borderColor: theme.colors.primary,
  },
  switchText: {
    fontSize: 14,
    color: '#666',
  },
  switchTextActive: {
    color: theme.colors.primary,
    fontWeight: '600',
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
    height: 48,
    backgroundColor: '#FFC107',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffffff',
  },
  link: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
  },
  linkBold: {
    color: theme.colors.primary,
    fontWeight: '700',
  },
});
