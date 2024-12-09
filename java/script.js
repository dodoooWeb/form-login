const username=document.getElementById("username-login");
const pass=document.getElementById("pass-login");
const wrapper=document.getElementById('wrapper-dis');
const content=document.getElementById('content-dis');



function Onlogin(){
    if(username.value=='manith' && pass.value=='123'){
        alert('correct');
        wrapper.style.display='none';
        content.style.display='block';
    }else{
            alert('Invalid username or password!');
    }
}
function Onsignout(){
    content.style.display='none';
    wrapper.style.display='block';
    username.value='';
    pass.value='';

}


function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
    var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    function login() {
        x.style.left = "4px";
        y.style.right = "-520px";
        a.className += " white-btn";
        b.className = "btn";
        x.style.opacity = 1;
        y.style.opacity = 0;
    }
    function register() {
        x.style.left = "-510px";
        y.style.right = "5px";
        a.className = "btn";
        b.className += " white-btn";
        x.style.opacity = 0;
        y.style.opacity = 1;
    }

