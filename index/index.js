function jsonp(req) {
    var script = document.createElement('script');
    var url = req.url + '&callback=' + req.callback.name;
    script.src = url;
    //console.log(req.callback);console.log(req.callback.name);
    document.getElementsByTagName('head')[0].appendChild(script);
}//加入一条script标签

function getsteam(res){
    //console.log("woxihuanni");
    console(res);
}//回调函数

jsonp({
    url : 'https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=59808D845F65E0DA823A66B9BED4CC25&steamid=76561197960434622&format=json',
    callback : getsteam
});