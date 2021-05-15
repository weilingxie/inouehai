import React, { createContext } from 'react'
 import { IConfig } from '../types/Types'

export type ConfigContextPros = {
    config: IConfig,
    setConfig?: React.Dispatch<React.SetStateAction<IConfig>>
}

const ConfigContext = createContext<ConfigContextPros>({ 
    config: { NumberOfTeams : 5 }
});

export default ConfigContext ;