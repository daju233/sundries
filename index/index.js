const ap = new APlayer({
    container: document.getElementById('aplayer'),
    lrcType:3,
    audio: [{
        name: '対象a',
        artist: ' anNina',
        url: 'music1.mp3',
        cover: 'cover.jpg',
        lrc:'lrc.lrc'
    }]
});

let aplayer = document.getElementById('aplayer');
let xiaoren = document.getElementById('xiaoren');
aplayer.addEventListener('click',()=>{
    if(ap.audio.paused===false) 
    {
        
        xiaoren.style.animationPlayState="running";
        console.log('1'+ap.audio.paused);
    }
    else if(ap.audio.paused===true)
    {
        xiaoren.style.animationPlayState="paused";
    }

})
