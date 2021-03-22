import React, { createContext, useState, useEffect } from 'react';

export const CryptoCurContext = createContext();

const CryptoCurContextProvider = (props) => {
    const [refreshing, setRefreshing] = useState(true);
    const [cryptoItems, setCryptoItems] = useState([]);
    const [addedCryptoItems, setAddedCryptoItems] = useState([]);

    // Get the needed data from API
    const getDataApi = () => {
        fetch('https://data.messari.io/api/v2/assets')
        .then((response) => response.json())
        .then((json) => {
        setRefreshing(false);
        setCryptoItems(json.data.map(data => ({
            id: data.id,
            symbol: data.symbol || 'No Data',
            name: data.name || 'No Data',
            priceUsd: data.metrics.market_data.price_usd || 'No Data',
            changePercent24h: data.metrics.market_data.percent_change_usd_last_24_hours || 'No Data'
        })))})
        .catch((error) => {
            console.error(error);
        });
    };
    
    // Use the useEffect hook on the fetch data function
    useEffect(() => {
        getDataApi();
    }, []);

    return (
        <CryptoCurContext.Provider value={{refreshing, cryptoItems}}>
            { props.children }
        </CryptoCurContext.Provider>
    )
}

export default CryptoCurContextProvider;