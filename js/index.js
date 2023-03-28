var $ = document.querySelector.bind(document);

const keyList = document.querySelectorAll(".key");

function playSound(audioId) {

    $(audioId).play();
}

for(counter = 0; counter < keyList.length; counter++) {

    const key = keyList[counter];
    const instrument = key.classList[1];
    const audio__id = `#sound__${instrument}`;

    key.onclick = function() {
        playSound(audio__id);
    }
    
}