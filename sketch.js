// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(000000);
//   fill('#CF46FF')
//   circle(windowWidth/2, windowHeight/2, 50);
// }


let player = document.querySelector("lottie-player");
let dietSection = document.querySelector("#dietary")

document.querySelector("#dietary").style.display = "none"
document.querySelector("#playing").style.display = "none"
document.querySelector("#not-playing").style.display = "none"



setTimeout(function () {
    player.pause();
    console.log("svg paused")

}, 5000);
let msgID

function submitForm(event) {
    event.preventDefault();
    msgID = document.getElementById("ipt").value;
    gotData = IDSent(msgID)


}

const IDSent = async (message) => {
    const response = await fetch('https://l25tfgokh5.execute-api.us-east-2.amazonaws.com/post', {
        method: 'POST',
        body: JSON.stringify({
            "event": "ID",
            "ID": message
        }),
        headers: {
            'Content-Type': 'text/plain',
            'Accept': 'text/plain'
            // "Accept-Encoding": "gzip, deflate, br"
        }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(myJson)
    // return myJson

    if (myJson == false) {
        notif = document.querySelector("#notification");
        notif.classList.add("elementToFadeInOut");
        setTimeout(function () {
            // notif.classList.add("elementToFadeOut");
            notif.classList.remove("elementToFadeInOut");

        }, 4000);
    } else {
        player.play();
        hideSection = document.querySelector("#main-section")
        hideSection.classList.add("elementToFadeOut");
        hideSection.style.display = "hidden"

        setTimeout(function () {
            document.querySelector("#main-section").style.display = "none"
            playerName = document.createElement("h3");
            playerName.innerHTML = myJson["name"]
            document.querySelector("#player-name").appendChild(playerName)
            eventTime = document.createElement("h3")
            eventWhen = document.createElement("h3")
            eventLocation = document.createElement("h3")
            eventRSVP = document.createElement("h3")
            eventTime.innerHTML = myJson["time"]
            eventWhen.innerHTML = myJson["when"]
            eventLocation.innerHTML = myJson["location"]
            eventRSVP.innerHTML = myJson["RSVP"]
            dressCode = document.createElement("h3");
            dressCode.innerHTML = myJson["dress"]

            document.querySelector("#player-details").appendChild(eventWhen)
            document.querySelector("#player-details").appendChild(eventLocation)
            document.querySelector("#player-details").appendChild(eventTime)
            document.querySelector("#player-details").appendChild(dressCode)

            document.querySelector("#player-details").appendChild(eventRSVP)


            if (myJson["status"] == "none") {} else {
                eventStatus = document.createElement("h3")
                eventWhen.innerHTML = `Current Status: ${myJson["status"]}`
                document.querySelector("#player-status").appendChild(eventWhen)
            }

            playerSection = document.querySelector("#player-data");
            playerSection.classList.add("elementToFadeIn");
        }, 2000);

    }
}


const responseSendY = async () => {
    const response = await fetch('https://l25tfgokh5.execute-api.us-east-2.amazonaws.com/post', {
        method: 'POST',
        body: JSON.stringify({
            "event": "Yes",
            "response": "Yes",
            "ID": "none",
            "user": msgID
        }),
        headers: {
            'Content-Type': 'text/plain',
            'Accept': 'text/plain'
            // "Accept-Encoding": "gzip, deflate, br"
        }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(myJson)
    // return myJson

}

const responseSendN = async () => {
    const response = await fetch('https://l25tfgokh5.execute-api.us-east-2.amazonaws.com/post', {
        method: 'POST',
        body: JSON.stringify({
            "event": "No",
            "response": "No",
            "ID": "none",
            "user": msgID
        }),
        headers: {
            'Content-Type': 'text/plain',
            'Accept': 'text/plain'
            // "Accept-Encoding": "gzip, deflate, br"
        }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(myJson)
    // return myJson

}

const dietY = async (msg) => {
    const response = await fetch('https://l25tfgokh5.execute-api.us-east-2.amazonaws.com/post', {
        method: 'POST',
        body: JSON.stringify({
            "event": "Diet",
            "response": msg,
            "ID": "none",
            "user": msgID
        }),
        headers: {
            'Content-Type': 'text/plain',
            'Accept': 'text/plain'
            // "Accept-Encoding": "gzip, deflate, br"
        }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(myJson)
    // return myJson

}

const dietN = async () => {
    const response = await fetch('https://l25tfgokh5.execute-api.us-east-2.amazonaws.com/post', {
        method: 'POST',
        body: JSON.stringify({
            "event": "Diet",
            "response": "No",
            "ID": "none",
            "user": msgID
        }),
        headers: {
            'Content-Type': 'text/plain',
            'Accept': 'text/plain'
            // "Accept-Encoding": "gzip, deflate, br"
        }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(myJson)
    // return myJson

}

let yesButton = document.querySelector("#button-yes");
let noButton = document.querySelector("#button-no");

yesButton.onclick = function () {
    document.querySelector("#ipt").style.display = "none";
    playerSection = document.querySelector("#player-data");

    playerSection.classList.remove("elementToFadeIn");
    playerSection.classList.add("elementToFadeOut");
    responseSendY()
    setTimeout(function () {
        playerSection.style.display = "none";
        diet = document.querySelector("#dietary");
        diet.style.display = "block"
        diet.classList.add("elementToFadeInD");
    }, 2000);

};


noButton.onclick = function () {
    playerSection = document.querySelector("#player-data");
    playerSection.classList.remove("elementToFadeIn");
    playerSection.classList.add("elementToFadeOut");
    responseSendN()
    setTimeout(function () {


        notPlayin = document.querySelector("#not-playing");
        notPlayin.style.display = "block"
        notPlayin.classList.add("elementToFadeInD");
    }, 2000);

};


let dietYes = document.querySelector("#button-diet-sbmit");
let dietNo = document.querySelector("#button-diet-no");

dietYes.onclick = function (event) {
    event.preventDefault();
    dietaryReq = document.getElementById("dietry-ipt").value;
    // console.log("test")
    dietSection.classList.remove("elementToFadeInD");
    dietSection.classList.add("elementToFadeOuttwo");
    dietY(dietaryReq);
    setTimeout(function () {    
        playing = document.querySelector("#playing")
        playing.style.display = "block"
        playing.classList.add("elementToFadeInD");
    }, 2000);



};


dietNo.onclick = function (event) {
    event.preventDefault();
    dietN()
    dietSection.classList.remove("elementToFadeInD");
    dietSection.classList.add("elementToFadeOuttwo");
    setTimeout(function () {    
        playing = document.querySelector("#playing")
        playing.style.display = "block"
        playing.classList.add("elementToFadeInD");
    }, 2000);
};
