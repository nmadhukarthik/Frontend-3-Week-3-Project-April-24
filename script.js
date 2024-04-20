let scoreObj = {red:100,blue:50,green:150,yellow:100}
let colors = ["red", "blue", "green", "yellow"]

function OpeningCeremony() 
{
    setTimeout(()=> { console.log("Let the games begin")
    scoreObj = {red:0,blue:0,green:0,yellow:0}
    console.log(scoreObj)
    //callback(scoreObj,Race100M)}
    Race100M(scoreObj)}
    , 1000)
}

 

function Race100M(scoreObj)
{
    setTimeout(()=>{  
        //console.log(scoreObj)
        colors.forEach(color => { scoreObj[color] = Math.floor(Math.random()*6) + 10})
        console.log(scoreObj)
        colors.sort((a,b) => scoreObj[a] - scoreObj[b])
        scoreObj[colors[0]] += 50
        scoreObj[colors[1]] += 25


        // ---------------NEVER EVER CODE LIKE BELOW--------------------------------------
        // let arr = []
        // for(let item in scoreObj)
        // { scoreObj[item] = Math.floor(10 + Math.random()*(15 - 10 + 1)); arr.push( scoreObj[item]) }   //Math.floor(Math.random()*6) + 10
        // let minimum = Math.min(...arr)
        // let ind1 = arr.indexOf(minimum)
        // console.log(arr)
        // scoreObj[colors[ind1]] = 50
        // console.log(scoreObj)

        // let minimum2 = Infinity
        // console.log(arr)
        // for(let i of arr)
        // { 
        //     if( i != minimum ) 
        //     { 
        //         console.log(minimum2)
        //         if(i < minimum2)
        //         { minimum2 = i } 
        //     } 
        // }
        // console.log(minimum2)
        // let ind2 = arr.indexOf(minimum2)
        // scoreObj[colors[ind2]] = 25
        //------------------------------------------------------------------------------------


        console.log(scoreObj)
        colors.sort((a,b) => scoreObj[b] - scoreObj[a])
        console.log(` ${colors[0]} came first in Race100M with ${scoreObj[colors[0]]} points.`)
        LongJump(scoreObj)
        //callback(scoreObj,LongJump)
    },3000)

}

function LongJump(callback)
{
    setTimeout(()=> { 
    let randomIndex = Math.floor(Math.random()*colors.length)
    // console.log(scoreObj[colors[randomIndex]])
    scoreObj[colors[randomIndex]] += 150
    console.log(scoreObj)
    colors.sort((a,b) => scoreObj[b] - scoreObj[a])
    console.log(` ${colors[0]} came first in LongJump with ${scoreObj[colors[0]]} points.`)
    // console.log(scoreObj)
    HighJump(scoreObj)
    //callback(scoreObj,HighJump)
    },2000)

}


function HighJump()
{
    let userInput = prompt("What colour secured the highest jump:");
    if (userInput in scoreObj)
    { scoreObj[userInput] += 100 }
    else
    { console.log ("Event was cancelled") }

    console.log(scoreObj)
    colors.sort((a,b) => scoreObj[b] - scoreObj[a])
    console.log(` ${colors[0]} came first in HighJump with ${scoreObj[colors[0]]} points.`)
    AwardCeremony(scoreObj)
}

function AwardCeremony()
{
    colors.sort((a,b) => scoreObj[b] - scoreObj[a])
    console.log(` ${colors[0]} came first with ${scoreObj[colors[0]]} points. ${colors[1]} came second with ${scoreObj[colors[1]]} points. ${colors[2]} came third with ${scoreObj[colors[2]]} points. ${colors[3]} came fourth with ${scoreObj[colors[3]]} points. `)

}


OpeningCeremony(scoreObj)