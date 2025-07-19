let box = document.querySelector(".box"); 
let btn = document.querySelector("button"); 
const speakFunc = (input) => { 
let speakInput = new SpeechSynthesisUtterance (input); 
//speakInput.rate = 1.2; 
speakInput.pitch = 11; 
speakInput.lang = "en-GB"; 
window.speechSynthesis.speak(speakInput); 
} 
window.onload = () => { 

//speakFunc("Hello just for code");   
greetingFunc();
}
const greetingFunc = () => { 
let date = new Date(); 
let hour = date.getHours(); 
if (hour >= 0 && hour < 12) { 
speakFunc("Good Morning sir, how can i help you"); 
} else if (hour >= 12 && hour < 16) { 
    speakFunc ("Good Afternoon sir ,how can i help you"); 
} else { 
    speakFunc ("Good Evening sir,how can i help you"); 

}
}
const startVoiceInput=()=>{
    if ('webkitSpeechRecognition' in window) { 
        let recognition=new webkitSpeechRecognition(); 
        recognition.lang='en-US'; 
        recognition.onresult =(e)=>{
            let spokenText = e.results[0][0].transcript; 
            handleCommand(spokenText);
             box.classList.remove("btn-box") ;
             btn.innerHTML=`<i class="fa-solid fa-microphone-lines-slash"></i>`;
(e.results[0][0].transcript);
        }
       recognition.start(); 
    } else { 
        console.log("speech recognition not supported"); 
    }
}
btn.onclick = () => { 
    box.classList.add("btn-box");
    btn.innerHTML=`<i class="fa-solid fa-microphone-lines"></i>`;
    startVoiceInput();
}
const handleCommand= (command)=>{
    console.log(command);
if(command.includes("Hello")|| command.includes("Hey") || command.includes("Hi")|| command.includes("Hoye"))
    { 
        speakFunc("Hello sir,how can i help you"); 
    }
else if(command.includes("Who are you")|| command.includes("Developed") || command.includes("who")||  command.includes("hu r u"))
        { 
            speakFunc("I am a voice assistant ,developed by nayan naskar"); 
        }
 else if(command.includes("Open YouTube")|| command.includes("YouTube") )
        { 
                speakFunc("OPening youtube"); 
                window.open("https://www.youtube.com/"); 
        }
 else if(command.includes("Open Google")|| command.includes("Google") )
        { 
                speakFunc("OPening google"); 
                window.open("https://www.google.com/"); 

        }
else if (command.includes("Open WhatsApp")|| command.includes("WhatsApp"))
       {
    speakFunc("opening youtube");
    window.open("https://www.whatsapp.com/"); 
       }
else if (command.includes("playing Arijit Singh song")|| command.includes("Song")|| command.includes("Arijit Singh")|| command.includes("Play Arijit Singh song") )
        {
     speakFunc("playing arijit singh song");
    window.open("https://www.youtube.com/watch?v=XcHCnX6mmxE")
        }
else if  (command.includes("Open Netflix")|| command.includes("Netflix") )
{
    speakFunc("opening Netflix"); 
    window.open("https://www.netflix.com/"); 
}
else if (command.includes("Open Amazon")|| command.includes("Amazon") )
{
    speakFunc("opening Amazon"); 
    window.open("https://www.amazon.com/");

}
else if (command.includes("Open Flipkart")|| command.includes("Flipkart") )
{
    speakFunc("opening Flipkart"); 
    window.open("https://www.flipkart.com/");

}
else if(command.includes("Open Facebook")|| command.includes("Facebook") )
{
    speakFunc("opening Facebook"); 
    window.open("https://www.facebook.com/");

}
else if(command.includes("Open Instagram")|| command.includes("Instagram") )
{
    speakFunc("opening Instagram"); 
    window.open("https://www.instagram.com/");

}
else if (command.includes("Open Twitter")|| command.includes("Twitter") )
{
    speakFunc("opening Twitter"); 
    window.open("https://www.twitter.com/");

}
else if (command.includes("arman malik")|| command.includes("playing arman malik song") )
    {
        speakFunc("palying arman mallik song"); 
        window.open("https://www.youtube.com/watch?v=sfczxZvp2c4");
    
    }
else 
        {
            speakFunc(`This is ,i found internet regarding ${command}`); 
            window.open(`https://www.google.com/search?q=${command}`)

        }
}