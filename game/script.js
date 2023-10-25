import gamedata from './response.json' assert {type:'json'};

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
const gametimes = new Array();
const gamenames = new Array();

for(var i in gamearray)
{
    if(gamearray[i].playtime_forever>=800)
    {
        gamenames[i]=gamearray[i].name;
        gametimes[i]=(gamearray[i].playtime_forever/60).toFixed(1);
    }
}
console.log(gametimes);

 // 基于准备好的dom，初始化echarts实例
 var myChart = echarts.init(document.getElementById('main'));

 // 指定图表的配置项和数据
 var option = {
   title: {
     text: 'Steam游戏库数据'
   },
   tooltip: {},
   legend: {
     data: ['游戏时长']
   },
   yAxis: {
     data:gamenames
   },
   xAxis: {},
   series: [
     {
       name: '游戏时长',
       type: 'bar',
       data:gametimes
     }
   ]
 };

 // 使用刚指定的配置项和数据显示图表。
 myChart.setOption(option);