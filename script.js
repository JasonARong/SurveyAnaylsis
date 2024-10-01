import { chairsArr } from './allChairsAvg.js';

let chairScoreArr = [];
for (let i=0; i<chairsArr.length; i++){
    let scoreSum = 0;
    for (let key in chairsArr[i]){
        if (chairsArr[i].hasOwnProperty(key)){
            scoreSum += chairsArr[i][key];
        }
    }
    scoreSum = scoreSum.toFixed(2);

    let chairScore = {chairNum: i+1, score: scoreSum};
    chairScoreArr.push(chairScore);
}



chairScoreArr.sort((a, b) => b.score - a.score);
console.log(chairScoreArr);

for (let i=0; i<chairScoreArr.length; i++){
    let chairEle = document.createElement('div');
    chairEle.setAttribute('class', 'chairs');
    let chairNumber = chairScoreArr[i].chairNum;
    let chairScore = chairScoreArr[i].score;
    let chairEleInnerHTML = `
        <img src="./images/chair${chairNumber}.png" alt="chair${chairNumber} picture">
        <div>
            <h2>Chair ${chairNumber}</h2>
            <p>Score: ${chairScore}</p>
        </div>
    `;
    chairEle.innerHTML = chairEleInnerHTML;

    const main = document.querySelector('main');
    main.appendChild(chairEle);
}
