import React from 'react';
import CryptoCurContextProvider from './src/context/CryptoCurContext';
import HomeStack from './src/routes/HomeStack';

// Where the Context and Route folders are called
export default App = () => {

  return (
    <CryptoCurContextProvider>
      <HomeStack />
    </CryptoCurContextProvider>
  )
}