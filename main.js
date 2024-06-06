var button = document.getElementById("button");
var input = document.getElementById("input");
button.addEventListener("click", function(){
    if(input.value==="redback4075"){
       let myDiv = document.createElement("div");
       myDiv.innerHTML=`<p>
            <strong>Speakers:</strong>
          </p>
          <p>Headphone cable</p>
          <p>Measure with ruler</p>
          <p>Download audio recording</p>
          <p>Js code for delay</p>
          <p>Test that code</p>
          <p>Make sure laptop is fully charged</p>
          <p>In settings make never sleep</p>
          <p>Make sure machine is on</p>
          <p>Plug laptop into machine</p>
          <p>Click run code</p>
          <p>Start timer</p>
          <p>Discreetly walk away</p>
          <p>When timer is at 0 then plan executed unless failure</p>
          <p>If failure go back and retrieve laptop</p>
          <p>
            <strong>Firewall:</strong>
          </p>
          <p>Work outside</p>
          <p>Pick up network connection</p>
          <p>Move around to secure best location</p>
          <p>Join network</p>
          <p>Browse the internet!</p>`;
          document.body.appendChild(myDiv);
    }
});