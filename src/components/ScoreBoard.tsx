import React from 'react'
import { Score } from '../types/Types'


interface ScoreBoardProps {
    score: Score[];
}

const ScoreBoard = ({ score } : ScoreBoardProps) => {    

    return (       
        <div>
            <h3 className="text-center">Score Board</h3>
            <table className="table table-striped">                
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>                    
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
        </div>
    );
}

export default ScoreBoard;