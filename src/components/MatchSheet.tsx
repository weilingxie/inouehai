import React from 'react'
import Result from './Result'
import ResultButtons from './ResultButtons'

import { Fight } from '../types/Types'



interface MatchSheetProps {
    fights: Fight[];
    resetResult:(index:number,type:string, result:string)=>void;
    setResult : (index:number,type:string,name:string) => void;
    changeColor : (index:number) => void;

}

const MatchSheet = ({ fights, setResult, resetResult, changeColor } : MatchSheetProps) => {    

    return (       
        <div>            
            <h3  className="text-center">Fights</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Versus</th>
                        <th>Suburi</th>
                        <th>Kihon</th>
                        <th>Kata</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>                    
                    {
                        fights.map((fight,index)=>{
                            let { id, team1, team2, suburi, kihon, kata } = fight;                                                      

                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{team1.name}-{team2.name}</td>                                    
                                    <td>{suburi==="" ? <ResultButtons index={index} type='suburi' team1={team1} team2={team2} setResult={setResult} /> : <Result index={index} type='suburi' result={suburi} resetResult={resetResult} />}</td>
                                    <td>{kihon==="" ? <ResultButtons index={index} type='kihon' team1={team1} team2={team2} setResult={setResult} /> : <Result index={index} type='kihon' result={kihon} resetResult={resetResult} />}</td>
                                    <td>{kata==="" ? <ResultButtons index={index} type='kata' team1={team1} team2={team2} setResult={setResult} /> : <Result index={index} type='kata' result={kata} resetResult={resetResult} />}</td>                                    
                                    <td><button className="btn btn-sm btn-success" onClick={()=>changeColor(index)}>switch color</button></td>
                                </tr>
                            )                        
                        })
                    }                
                </tbody>
            </table>
        </div>
    );
}

export default MatchSheet;