import React, { useContext} from 'react';
import { CryptoCurContext } from '../context/CryptoCurContext';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList } from 'react-native';

// Component building the selected Crypto Currencies List through the addedCryptoItems useState in context
const CryptoCurTracker = () => {
  
  const { addedCryptoItems, DeleteAddedCryptoItem } = useContext(CryptoCurContext);
  
  return (
    <SafeAreaView>
          <View>
              <FlatList
              data={addedCryptoItems}
              enableEmptySections={true}
              renderItem={({ item, index }) => (
// Removing a selected Crypto Currency from 'My Tracker' page
                    <TouchableOpacity style={styles.list} key={index} onPress={() => DeleteAddedCryptoItem(item.id)}>
                        <Text style={styles.text}>{item.symbol}</Text>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>{(item.priceUsd).toFixed(2)} USD</Text>
                        <Text style={styles.text}>{parseFloat(item.changePercent24h).toFixed(2)}%</Text>
                        <Text style={styles.minusText}>   -</Text>
                    </TouchableOpacity>
              )}
              />
          </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'space-between',
    flexDirection:'row',
    padding: 12,
    marginBottom:10,
    borderColor:'black',
    borderRadius:5,
    borderWidth:1,
    paddingHorizontal: 30,
    backgroundColor:'#D5D5D5'
  },
  minusText: {
    justifyContent: 'space-between',
    flexDirection:'row',
    fontSize:22,
    fontWeight:'bold'
},
  text: {
    padding:5,
    fontSize:15
  }
  });

export default CryptoCurTracker;