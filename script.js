let btn=document.querySelector("#btn");
let content=document.querySelector("#content");
let voice=document.querySelector("#voice");

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day=new Date();
    let hours=day.getHours();
    if(hours>=0 && hours<12) {
        speak("Good Morning Sir");
    }
     else if(hours>=12 && hours <16) {
        speak("Good Afternoon Sir");
    } else if(hours>=16 && hours <19) {
        speak("Good Afternoon Sir");
    }
    else{
        speak("Good Night Sir");
    }
}
 window.addEventListener('load',()=> {
    wishMe();
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition();
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText=transcript;
    takeCommand(transcript.toLowerCase())
};
btn.addEventListener('click',()=>{
    recognition.start()
    btn.Style.display="none";
    voice.Style.display="block";
});

function takeCommand(message) {
    btn.Style.display="flex"
    voice.Style.display="none"
    if(message.includes("Hello") || message.includes("hey")){
        speak("Hello Sir,What can i help you?");
    }
    else if (message.includes("Who are you")) {
        speak("I am virtual assistant, created by Ajay Sir");
    }else if(message.includes("open youtube")){
        speak("opening youtube...");
        window.open("https://www.youtube.com","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...");
        window.open("https://www.google.com","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...");
        window.open("https://www.facebook.com","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...");
        window.open("https://www.instagram.com","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator...");
        window.open("calculator://","_blank")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp...");
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
       let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
       speak(time);
    }
    else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date);
     }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("charlie","")|| message.replace("charli","");
        speak(`this is what i found on internet regarding ${message.replace("charlie","") || message.replace("charli","")}`);
        window.open(`https://www.google.com/search?q=${message.replace("charli","")}`,"_blank");
    }
}