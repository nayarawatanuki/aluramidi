var $ = document.querySelector.bind(document);

const keyList = document.querySelectorAll(".key");

function playSound(audioId) {

    // console.log($(audioId).localName)

    if($(audioId) != null && $(audioId).localName === "audio") {

        $(audioId).play();

    } else {

        alert("Elemento não encontrado.");
    }
}

for(counter = 0; counter < keyList.length; counter++) {

    const key = keyList[counter];
    const instrument = key.classList[1];
    const audio__id = `#sound__${instrument}`;

    key.onclick = function() {
        playSound(audio__id);
    }

    key.onkeydown = function(event) {

        if(event.code === "Space" || event.code === "Enter") {

            key.classList.add("active");
        }
    }

    key.onkeyup = function() {
        key.classList.remove("active");
    }

}