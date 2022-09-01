const adDice = document.querySelector('#advice-dice');

let adId = document.querySelector('.adId');
let adContent = document.querySelector('.adContent');

/** Clicks */
adDice.addEventListener('click', function(){
    get();
})

/** Functions */
function get() {
    let url = "https://api.adviceslip.com/advice";

    fetch(url, { cache: "reload"}).then(
        response => response.json()
    ).then(
        data => {
            adId.innerHTML = data.slip.id;
            adContent.innerHTML = data.slip.advice;
        }
    )
}

get();