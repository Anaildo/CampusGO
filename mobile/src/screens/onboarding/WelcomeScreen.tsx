import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { theme } from '../../styles/theme';

export function WelcomeScreen({ navigation }: any) {
  function handleStart() {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/onibus.png')}
        style={styles.image}
      />

      <Text style={styles.title}>Bem-vindo ao Campus GO!</Text>

      <Text style={styles.subtitle}>
        O app ideal para não perder o horário do seu ônibus
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>Vamos lá</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 32,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.colors.white,
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.white,
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: theme.colors.white,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
