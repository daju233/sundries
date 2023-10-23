async function getsteam()
{
    const data = await fetch ('https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=59808D845F65E0DA823A66B9BED4CC25&steamid=76561197960434622&format=json');
    const mydata= await data.json();
    console.log(mydata);
}

getsteam();
