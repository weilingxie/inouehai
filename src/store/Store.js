import React, { useState, useMemo } from 'react';
import ConfigContext from '../contexts/ConfigContext';
import { IConfig } from '../types/Types'

const Store = ({ children }) => {
    const [ config, setConfig ] = useState({
        NumberOfTeams : 5      
    }); 

    // const providerConfig = useMemo(() => ({config, setConfig}),  [ config, setConfig ]);    

    return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigContext.Provider>
    );
};

export default Store;