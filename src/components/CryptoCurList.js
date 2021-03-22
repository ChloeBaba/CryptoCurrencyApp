import React, { useContext } from 'react';
import { CryptoCurContext } from '../context/CryptoCurContext';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, RefreshControl, SafeAreaView, FlatList } from 'react-native';

// Component building the list of all the Crypto Currencies available in the API using Context
const CryptoCurList = () => {
    const { cryptoItems, refreshing, AddCryptoItem, onRefreshCryptoItems } = useContext(CryptoCurContext);
    
    return ( 
        <SafeAreaView>
            <View>
                { refreshing ? (<ActivityIndicator />) :
                <FlatList
                data={cryptoItems}
                enableEmptySections={true}
                renderItem={({ item, index }) => (
// Adding a selected Crypto Currency to "My Tracker" page
                    <TouchableOpacity style={styles.list} key={index} onPress={() => AddCryptoItem(item.id)}>
                        <Text style={styles.text}>{item.symbol}</Text>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>{(item.priceUsd).toFixed(2)} USD</Text>
                        <Text style={styles.text}>{parseFloat(item.changePercent24h).toFixed(2)}%</Text>
                        <Text style={styles.plusText}>+</Text>
                    </TouchableOpacity>  
                )}
// Refresh the Crypto Currencies values on swipe down
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefreshCryptoItems}/>
                }
                />
                }
            </View>
        </SafeAreaView>
     );
}

const styles = StyleSheet.create({
    list: {
        justifyContent: 'space-between',
        flexDirection:'row',
        padding: 10,
        marginBottom:10,
        borderColor:'black',
        borderRadius:5,
        borderWidth:1,
        backgroundColor:'#D5D5D5'
    },
    plusText: {
        justifyContent: 'space-between',
        flexDirection:'row',
        fontSize:20,
        fontWeight:'bold'
    },
    text: {
        padding:8,
        fontSize:15
      }
    });
 
export default CryptoCurList;