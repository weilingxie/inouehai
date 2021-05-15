import React, { useState } from 'react'

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
    result:{
        suburi:string,
        kihon:string,
        kata:string
    }    
}

let fights : Fight[] = [

];

let teams = {
    A:0,
    B:0,
    C:0    
}

const MatchSheet = () => {
    const NumberOfTeams = ['A','B','C'];            

    return (
        
        <table className="table table-striped">
            <thead>Match Sheet</thead>
            <tbody>
                <tr>
                    <th>#</th>
                    <th>Versus</th>
                    <th>Result</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>A-B</td>
                    <td><span>A</span> | <span>B</span></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>A-C</td>
                    <td><span>A</span> | <span>C</span></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>B-C</td>
                    <td><span>B</span> | <span>C</span></td>
                </tr>
            </tbody>
        </table>
    );
}

export default MatchSheet;