import React, { useState, useContext } from 'react'
import { IConfig } from './types/Types'
import ConfigContext from './contexts/ConfigContext'

const Setup = () => {
    // const [ config, setConfig ] = useState<IConfig>({
    //     NumberOfTeams : 5
    // });
    const { config, setConfig } = useContext(ConfigContext);
    // const [ NumberOfTeams, setNumberOfTeams ] = useState(config.defaultNumberOfTeams);

    console.log(config);
    const onChangeNumberOfTeams = (e : React.ChangeEvent<HTMLInputElement>) => {
        let newNumberOfTeams: number = +e.target.value;
        setConfig && setConfig({
            NumberOfTeams:newNumberOfTeams
        });
        console.log(config);
    }

    const onCreateMatch = () => {
        console.log(config.NumberOfTeams);
    }
  
    return (
        <div className="d-grid gap-2">
            <div className="input-group">
                <span className="input-group-text">Number of teams</span>
                <input type='number' className="form-control" value={config.NumberOfTeams} onChange = {onChangeNumberOfTeams}></input>            
            </div>
            <button type="button" className="btn btn-info" onClick={onCreateMatch}>Create Match</button>
        </div>
    )
}

export default Setup;