import React, { useState, useEffect } from 'react'

interface Props {
    index:number,
    type:string,
    result:string,
    team1:{
        name:string,
        color:string,
    },
    team2:{
        name:string,
        color:string,
    },
    setResult(index:number,type:string,name:string): ()=>void,
    resetResult(index:number,type:string, result:string):()=>void
}

const ResultButtons = ({index, type, result, team1, team2, setResult, resetResult} :Props)  => {
    

    return (       
        {result==='' ? 
            (<div>
                <button 
                    className= {`btn btn-${team1.color==='red'?'danger':'light'}`} 
                    onClick={()=> setResult(index,type,team1.name)}>
                    {team1.name}
                </button>
                <button  
                    className= {`btn btn-${team2.color==='red'?'danger':'light'}`} 
                    onClick={()=> setResult(index,type,team2.name)}>
                    {team2.name}
                </button>
            </div>) : 
            (<div>
                <span>{result} </span>
                <button 
                    className="btn btn-sm btn-outline-primary" 
                    onClick={()=> resetResult(index,type, result)}>
                    reset
                </button>
            </div>)
        }           
    );
}

export default ResultButtons;