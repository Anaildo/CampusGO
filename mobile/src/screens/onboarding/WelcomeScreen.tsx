import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { theme } from '../../styles/theme';


export default function WelcomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
  <Image
  source={require('../../assets/images/onibus.png')}
  style={styles.image}
  resizeMode="contain"
/>



      <Text style={styles.title}>Bem-vindo ao Campus GO!</Text>

      <Text style={styles.subtitle}>
        O app ideal para não perder o horário do seu ônibus
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Welcome')}
      >
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
    width: '58%',
    maxWidth: 260,
    height: undefined,
    aspectRatio: 1,
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
