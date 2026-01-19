import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { useState } from 'react';
import { theme } from '../../styles/theme';

export function AddBusScreen({ navigation }: any) {
  const [identificador, setIdentificador] = useState('');
  const [placa, setPlaca] = useState('');
  const [cor, setCor] = useState('');
  const [capacidade, setCapacidade] = useState('');
  const [arCondicionado, setArCondicionado] = useState(true);

  function handleCancel() {
    navigation.goBack();
  }

  function handleAdd() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleCancel} style={styles.backButton}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Adicionar ônibus</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.form}>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Identificador do ônibus</Text>
          <TextInput
            style={styles.input}
            placeholder="Ônibus do IFCE I"
            placeholderTextColor="#999"
            value={identificador}
            onChangeText={setIdentificador}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Placa do veículo</Text>
          <TextInput
            style={styles.input}
            placeholder="ABCD-9999"
            placeholderTextColor="#999"
            value={placa}
            onChangeText={setPlaca}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Cor do veículo</Text>
          <TextInput
            style={styles.input}
            placeholder="Verde limão"
            placeholderTextColor="#999"
            value={cor}
            onChangeText={setCor}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Capacidade</Text>
          <TextInput
            style={styles.inputNumber}
            placeholder="1"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={capacidade}
            onChangeText={setCapacidade}
          />
        </View>

        <View style={styles.fieldContainer}>
          <View style={styles.switchContainer}>
            <Text style={styles.label}>Ar-condicionado</Text>
            <Switch
              value={arCondicionado}
              onValueChange={setArCondicionado}
              trackColor={{ false: '#D1D1D1', true: '#4CAF50' }}
              thumbColor={arCondicionado ? '#FFFFFF' : '#F4F3F4'}
            />
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 24,
    color: '#000',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  placeholder: {
    width: 40,
  },
  form: {
    flex: 1,
    padding: 20,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: theme.colors.gray,
    borderRadius: 8,
    paddingHorizontal: 12,
    color: theme.colors.text,
    fontSize: 16,
  },
  inputNumber: {
    width: 80,
    height: 48,
    backgroundColor: theme.colors.gray,
    borderRadius: 8,
    paddingHorizontal: 12,
    color: theme.colors.text,
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  cancelButton: {
    flex: 1,
    height: 48,
    backgroundColor: '#FF3B30',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  addButton: {
    flex: 1,
    height: 48,
    backgroundColor: '#34C759',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
