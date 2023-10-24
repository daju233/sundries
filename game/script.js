import gamedata from './response.json' assert {type:'json'};
//import * as echarts from './echarts';

const gamearray=gamedata.response.games;

/*for(let i=0;i<gamedata.response.game_count;i++)
{
    for(let j=0;j<gamecount-i;i++)
    {
        if(gamearray[j].playtime_forever>gamearray[j+1].playtime_forever)
        {
            const temp = gamearray[j+1];
            gamearray[j+1]=gamearray[j];
            gamearray[j]=temp;
        }
    }
}*/
//为什么排序不成功???

gamearray.sort((a, b) => (a.playtime_forever > b.playtime_forever) ? -1 : 1);

for(var i in gamearray)
{
    if(gamearray[i].playtime_forever>=100)
    {
        var p =document.createElement("section")
            var text = document.createTextNode(gamearray[i].name+' : '+(gamearray[i].playtime_forever/60).toFixed(1)+'h')
            p.appendChild(text)
            document.body.appendChild(p)
    }
}