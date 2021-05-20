
import React, { useState} from 'react'
import { Fight, Score } from './types/Types'
import InitialFights from './default/InitialFights.json'
import InitialScore from './default/InitialScore.json'
import MatchSheet from './components/MatchSheet'
import ScoreBoard from './components/ScoreBoard'
import './App.css';

function App() {

  const [fights, setFights ] = useState<Fight[]>(InitialFights);
    const [score, setScore] = useState<Score[]>(InitialScore);

    const addScore = (team:string) => {
        let newScore = [...score];

        let index = -1;
        newScore.map((t, i) => {
            if(t.name === team) index = i;
            return i;
        });

        newScore[index]= {...newScore[index], score: newScore[index].score+1};

        newScore.sort((team1,team2)=>(team1.score>team2.score) ? -1 : 1)
        
        setScore(newScore);
    }

    const removeScore = (team:string) => {
        let newScore = [...score];
        let index = -1;
        newScore.map((t, i) => {
            if(t.name === team) index = i;
            return i;
        });
        newScore[index]= {...newScore[index], score: newScore[index].score-1};

        newScore.sort((team1,team2)=>(team1.score>team2.score) ? -1 : 1)
        
        setScore(newScore);
    }
    
    const setResult = (index:number, type: string, winTeam: string): void => {
        let newFights = [...fights];
        newFights[index] = {...newFights[index], [type]:winTeam};
        setFights(newFights);
        
        addScore(winTeam);
    }

    const resetResult = (index:number, type: string, resetTeam:string) => {
        let newFights = [...fights];
        newFights[index] = {...newFights[index], [type]:""};
        setFights(newFights);
        removeScore(resetTeam);
    }

    const changeColor = (index:number) => {
        let newFights = [...fights];
        let team1Color = newFights[index].team1.color;
        let team2Color = newFights[index].team2.color;
        newFights[index].team1.color =  team2Color;
        newFights[index].team2.color =  team1Color;
        setFights(newFights);
    }


  return (
    <div className="App">
      <div className="container">
        <div className="row align-items-center justify-content-center">          
          <div className="sm-12 md-8 lg-6">
            <h1>Inoue Hai Kihon Competition</h1>
            <ScoreBoard score={score} />
            <hr />
            <MatchSheet fights={fights} setResult={setResult} resetResult={resetResult} changeColor={changeColor}  />
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
