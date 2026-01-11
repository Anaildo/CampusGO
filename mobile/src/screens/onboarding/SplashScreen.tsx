import { View, Text, StyleSheet, Image, ActivityIndicator, useWindowDimensions } from 'react-native';
import React, { useEffect } from 'react';
import { theme } from '../../styles/theme';

export default function SplashScreen({ navigation }: any) {
  const { width } = useWindowDimensions();
  const imageSize = Math.min(240, Math.floor(width * 0.45));

  useEffect(() => {
    const t = setTimeout(() => {
      navigation.replace('Welcome');
    }, 1500);

    return () => clearTimeout(t);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/onibus.png')}
        style={[styles.image, { width: imageSize, height: imageSize }]}
        resizeMode="contain"
      />
      <Text style={styles.title}>Campus GO</Text>
      <ActivityIndicator size="large" color={theme.colors.white} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.white,
    marginBottom: 16,
  },
});
