const input=document.getElementById("userInput");
const button=document.getElementById("sendButton");
const messages=document.getElementById("chatMessages");
button.onclick=function(){
    let text=input.value.trim();
    if(text==="")return;
    let user=document.createElement("div");
    user.className="message user-message";
    user.innerText=text;
    messages.appendChild(user);
    input.value="";
    messages.scrollTop=messages.scrollHeight;
};
input.addEventListener("keydown",function(e){
    if(e.key==="Enter"){
        button.click();
    }
});
const micButton=document.getElementById("micButton");
const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
if(SpeechRecognition){
const recognition=new SpeechRecognition();
recognition.lang="en-IN";
recognition.continuous=false;
recognition.interimResults=false;
micButton.addEventListener("click",function(){
recognition.start();
micButton.classList.add("listening");
});
recognition.onresult=function(event){
const voiceText=event.results[0][0].transcript;
input.value=voiceText;
micButton.classList.remove("listening");
};
recognition.onerror=function(){
micButton.classList.remove("listening");
};
recognition.onend=function(){
micButton.classList.remove("listening");
};
}else{
micButton.addEventListener("click",function(){
alert("Voice recognition is not supported in this browser.");
});
}
const hamburger=document.querySelector(".hamburger-menu");
const sideMenu=document.getElementById("sideMenu");
hamburger.addEventListener("click",function(){
    sideMenu.classList.toggle("open");
});
const themeToggle=document.getElementById("themeToggle");

themeToggle.addEventListener("click",function(){

document.body.classList.toggle("dark-mode");

const icon=themeToggle.querySelector(".material-symbols-outlined");

if(document.body.classList.contains("dark-mode")){
icon.textContent="light_mode";
}else{
icon.textContent="dark_mode";
}
});