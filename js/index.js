var $ = document.querySelector.bind(document);

const keyList = document.querySelectorAll(".key");
let counter = 0;

function playSound(audioId) {

    $(audioId).play();
}

while(counter < keyList.length) {

    const key = keyList[counter];
    const instrument = key.classList[1];

    // console.log(instrument);

    const audio__id = `#sound__${instrument}`;

    key.onclick = function() {
        playSound(audio__id);
    }

    counter++;

    // console.log(counter);
}