import React, { useState, useEffect } from 'react'

interface Fight {
    id: number,
    team1:{
        name: string,
        color:string
    },
    team2:{
        name: string,
        color:string
    },
    suburi:string,
    kihon:string,
    kata:string  
}

let initialFights : Fight[] = [
    {
        id: 1,
        team1:{
            "name":"A",
            "color":"red"
        },
        team2:{
            "name":"B",
            "color":"white"
        },
        suburi:"",
        kihon:"",
        kata:""
    },
    {
        id: 2,
        team1:{
            "name":"A",
            "color":"red"
        },
        team2:{
            "name":"C",
            "color":"white"
        },
        suburi:"",
        kihon:"",
        kata:""
    },
    {
        id: 3,
        team1:{
            "name":"B",
            "color":"red"
        },
        team2:{
            "name":"C",
            "color":"white"
        },
        suburi:"",
        kihon:"",
        kata:""
    },
    {
        id: 4,
        team1:{
            "name":"C",
            "color":"red"
        },
        team2:{
            "name":"D",
            "color":"white"
        },
        suburi:"",
        kihon:"",
        kata:""
    },
    {
        id: 5,
        team1:{
            "name":"B",
            "color":"red"
        },
        team2:{
            "name":"D",
            "color":"white"
        },
        suburi:"",
        kihon:"",
        kata:""
    },
];

let initialScore = [
        {
            name:"A",
            score:0
        },
        {
            name:"B",
            score:0
        },
        {
            name:"C",
            score:0
        },
        {
            name:"D",
            score:0
        },
        {
            name:"E",
            score:0
        }
]    



const MatchSheet = () => {
    const [fights, setFights ] = useState(initialFights);
    const [score, setScore] = useState(initialScore);

    const addScore = (team:string) => {
        let newScore = [...score];

        let index = -1;
        newScore.map((t, i) => {
            if(t.name === team) index = i;
        });

        newScore[index]= {...newScore[index], score: newScore[index].score+1};

        newScore.sort((team1,team2)=>(team1.score>team2.score) ? -1 : 1)
        console.log(newScore);
        setScore(newScore);
    }

    const removeScore = (team:string) => {
        let newScore = [...score];
        let index = -1;
        newScore.map((t, i) => {
            if(t.name === team) index = i;
        });
        newScore[index]= {...newScore[index], score: newScore[index].score-1};

        newScore.sort((team1,team2)=>(team1.score>team2.score) ? -1 : 1)
        console.log(newScore);
        setScore(newScore);
    }

    const setResult = (index:number, type: string, winTeam: string) => {
        let newFights = [...fights];
        newFights[index] = {...newFights[index], [type]:winTeam};
        setFights(newFights);
        console.log(winTeam)
        addScore(winTeam);
    }

    const resetResult = (index:number, type: string, resetTeam:string) => {
        let newFights = [...fights];
        newFights[index] = {...newFights[index], [type]:""};
        setFights(newFights);
        removeScore(resetTeam);
    }

    return (       
        <div>
            <table className="table table-striped">
                <thead>Score Board</thead>
                <tbody>
                    <tr>
                        <th>Team</th>
                        <th>Score</th>
                    </tr>
                    {
                        score.map((t, index) => (
                            <tr key={index+999}>
                                <td>{t.name}</td>
                                <td>{t.score}</td>
                            </tr>
                        ))                                                                                 
                    }
                </tbody>
            </table>

            <table className="table table-striped">
                <tbody>
                    <tr>
                        <th>#</th>
                        <th>Versus</th>
                        <th>Suburi</th>
                        <th>Kihon</th>
                        <th>Kata</th>
                    </tr>
                    {
                        fights.map((fight,index)=>{
                            let { id, team1, team2, suburi, kihon, kata } = fight;
                            /*setResult(index,'suburi',team1.name) */
                            let defaultResult = (<div><span style={{ backgroundColor: team1.color}} onClick={()=> setResult(index,'suburi',team1.name)}>{team1.name}</span>|<span style={{ backgroundColor: team2.color}}>{team2.name}</span></div>);

                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{team1.name}-{team2.name}</td>
                                    <td>{suburi==="" ? (<div><button className= {`btn btn-${team1.color==='red'?'danger':'light'}`} onClick={()=> setResult(index,'suburi',team1.name)}>{team1.name}</button><button  className= {`btn btn-${team2.color==='red'?'danger':'light'}`} onClick={()=> setResult(index,'suburi',team2.name)}  >{team2.name}</button></div>) : (<div><span>{suburi}  </span> <button className="btn btn-sm btn-outline-primary" onClick={()=> resetResult(index,'suburi', suburi)}>reset</button></div>)}</td>
                                    <td>{kihon==="" ? (<div><button className= {`btn btn-${team1.color==='red'?'danger':'light'}`} onClick={()=> setResult(index,'kihon',team1.name)}>{team1.name}</button><button className= {`btn btn-${team2.color==='red'?'danger':'light'}`} onClick={()=> setResult(index,'kihon',team2.name)} >{team2.name}</button></div>) : (<div><span>{kihon}  </span><button className="btn btn-sm btn-outline-primary"  onClick={()=> resetResult(index,'kihon',kihon)}>reset</button></div>)}</td>
                                    <td>{kata==="" ? (<div><button className= {`btn btn-${team1.color==='red'?'danger':'light'}`} onClick={()=> setResult(index,'kata',team1.name)}>{team1.name}</button><button className= {`btn btn-${team2.color==='red'?'danger':'light'}`} onClick={()=> setResult(index,'kata',team2.name)} >{team2.name}</button></div>) : (<div><span>{kata}</span><button className="btn btn-sm btn-outline-primary"  onClick={()=> resetResult(index,'kata',kata)}>reset</button></div>)}</td>                                
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