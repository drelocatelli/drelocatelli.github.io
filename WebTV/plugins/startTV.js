let channel = document.querySelector('.channelurl');
let televisao = document.querySelector('#televisao')
let videoPlayer = document.createElement('video')
televisao.appendChild(videoPlayer)

let source = document.createElement('source')
source.src = channel.value
source.type = "application/x-mpegURL";
videoPlayer.appendChild(source)

function changeChannel() {
    let channelOptions = document.querySelector('select#channel')
    
    function listaCanais(){
        getListOfChannels()
        source.src = channel.value
        playTV()
    }


    channelOptions.onchange = function(){
        listaCanais()
    }


    channel.onkeypress = function(e){
        if(e.key == "Enter"){
            source.src = channel.value
            playTV()
            console.clear()
        }        
    }
}

function playTV(){

    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(source.src);
        hls.attachMedia(videoPlayer);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            videoPlayer.play();
        });
        changeChannel()
    }

}

playTV()


