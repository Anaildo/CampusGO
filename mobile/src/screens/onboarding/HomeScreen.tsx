import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, Alert } from 'react-native';
import { API_CONFIG } from '../../config/api';

type Onibus ={
    id: number;
    nome: string;
};

export function HomeScreen({ navigation }: any){
    const [onibus, setOnibus] = useState<Onibus[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        carregarOnibus();
    }, []);

    async function carregarOnibus(){
        try{
            setLoading(true);
            setError(null);
            
            const response = await fetch(API_CONFIG.ENDPOINTS.ONIBUS, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Verifica se a resposta é válida
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            
            // Valida se os dados são um array
            if (Array.isArray(data)) {
                setOnibus(data);
            } else {
                throw new Error('Resposta da API não é um array válido');
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido ao carregar os ônibus';
            console.error('Erro ao carregar os ônibus:', errorMessage);
            setError(errorMessage);
            
            // Mostra alerta para o usuário
            Alert.alert(
                'Erro ao carregar dados',
                `Não foi possível conectar ao servidor.\n\nVerifique se:\n• O backend está rodando\n• O IP está correto em src/config/api.ts\n• O celular está na mesma rede Wi-Fi\n\nErro: ${errorMessage}`,
                [{ text: 'Tentar novamente', onPress: carregarOnibus }]
            );
        } finally {
            setLoading(false);
        }
    }

    return(
        <View style={styles.container}>

            {/*Header*/}
            <View style={styles.header}>
                
                <View style={styles.headerEsq}>
                    <Text style={styles.welcomeText}>Bem Vindo,</Text>
                    <Text style={styles.userName}>Usuário</Text>
                </View>
                
                <Image 
                    source={require('../../assets/images/onibus.png')} 
                    style={styles.headerImage}
                    resizeMode="contain"
                    />

            </View>

            {/*Card Itinerário*/}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Itinerário dos ônibus</Text>

                <View style={styles.scheduleContainer}>
                    <View>
                        <Text style={styles.scheduleTitle}>Saindo da rodoviária</Text>
                        <Text>07:20</Text>
                        <Text>09:15</Text>
                        <Text>11:10</Text>
                        <Text>15:15</Text>
                        <Text>17:00</Text>
                        <Text>21:50</Text>
                    </View>

                    {/* Barra vertical */}
                    <View style={styles.verticalDivider} />

                    <View>
                        <Text style={styles.scheduleTitle}>Saindo da faculdade</Text>
                        <Text>07:35</Text>
                        <Text>09:30</Text>
                        <Text>11:25</Text>
                        <Text>15:30</Text>
                        <Text>17:15</Text>
                        <Text>21:45</Text>
                    </View>
                </View>
            </View>

            {/* Botão iniciar rota*/}
            <TouchableOpacity style={styles.routeButton}>
                <Text style={styles.routeButtonText}>Iniciar rota</Text>
            </TouchableOpacity>

            {/*Lista de ônibus vinda do backend*/}
            {loading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#6B6B6B" />
                    <Text style={styles.loadingText}>Carregando ônibus...</Text>
                </View>
            ) : error ? (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>❌ {error}</Text>
                    <TouchableOpacity style={styles.retryButton} onPress={carregarOnibus}>
                        <Text style={styles.retryButtonText}>Tentar novamente</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <FlatList
                    data={onibus}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <View style={styles.busItem}>
                            <Text>{item.nome}</Text>
                            <Text style={styles.plus}>+</Text>
                        </View>
                    )}
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>Nenhum ônibus encontrado</Text>
                    }   
                />
            )}

            {/* Botão cadastrar novo ônibus */}
            <TouchableOpacity 
                style={styles.addBusButton}
                onPress={() => navigation.navigate('AddBus')}
            >
                <Text style={styles.addBusButtonText}>Cadastrar novo ônibus</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 20,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        paddingHorizontal: 16,
        marginBottom: 16,
    },  

    headerEsq: {
        marginTop: 60,
        marginBottom: 20,
    },

    headerImage: {
        marginTop: 40,
        width: 120,
        height: 120,
    },

    welcomeText: {
        fontSize: 22,
        color: '#000',
    },

    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
    },

    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
    },
  
    cardTitle: {
        backgroundColor: '#6B6B6B',
        borderRadius: 20,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#FFFFFF',
        textAlign: 'center',      
        paddingVertical: 8,       
        paddingHorizontal: 16,
    },

    scheduleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },

    scheduleTitle: {
        fontWeight: 'bold',
        marginBottom: 6,
    },

    column: {
        flex: 1,
    },

    verticalDivider: {
        width: 1.5,
        backgroundColor: '#444', 
        marginHorizontal: 12,    
    },

    routeButton: {
        backgroundColor: '#6B6B6B',
        paddingVertical: 12,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 20,
    },

    routeButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },

    busItem: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 12,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    
    plus: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    emptyText: {
        textAlign: 'center',
        color: '#999',
        marginTop: 10,
    },

    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
    },

    loadingText: {
        marginTop: 12,
        color: '#6B6B6B',
        fontSize: 16,
    },

    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
        paddingHorizontal: 20,
    },

    errorText: {
        color: '#FF3B30',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },

    retryButton: {
        backgroundColor: '#6B6B6B',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 20,
        alignItems: 'center',
    },

    retryButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },

    addBusButton: {
        backgroundColor: '#6B6B6B',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },

    addBusButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    
});