var Name = document.getElementById('name');
var Email = document.getElementById('email');
var Password = document.getElementById('password');
var LOGINBtn = document.getElementById('LOGINBtn');
var SIGNUPBtn = document.getElementById('SIGNUPBtn');
var signup = document.getElementById('SignUP')
var login = document .getElementById('LogIN')
var LOGOUTBtn = document.getElementById('LOGOUTBtn');
var char8 = document.getElementById('char8');
var uppercase = document.getElementById('uppercase');
var lowercase = document.getElementById('lowercase');
var digit = document.getElementById('digit');
var special = document.getElementById('special');

var CurUser 

var users= [];

if(localStorage.getItem('users')){
	users =JSON.parse(localStorage.getItem('users'));
}

function main(){
	addUser();
	resetUP();
}


function addUser(){
	if(!SIGNUPBtn.hasAttribute("valid-email") && !SIGNUPBtn.hasAttribute("valid-password") && !SIGNUPBtn.hasAttribute("valid-name")){
		if(Name.value && Email.value && Password.value){
			var user ={
				Name: Name.value ,
				Email : Email.value ,
				Password : Password.value ,
			};
			const userWithEmailExists = users.some(User => User.Email === user.Email);
			if(!userWithEmailExists){
				users.push(user);
				localStorage.setItem('users',JSON.stringify(users));
				document.getElementById('alert').innerHTML=`<span class=" text-success" style="font-family: 'PT Sans Caption', sans-serif; font-size: larger;">Success</span>`
			}
			else{
				document.getElementById('alert').innerHTML=`<span class=" text-danger" style="font-family: 'PT Sans Caption', sans-serif; font-size: larger;">email already exists</span>`
			}
		}
		
	}
}


function logIn(){
	CheckIfExists();
}



function CheckIfExists(){
	if(!LOGINBtn.hasAttribute("valid-email") && !LOGINBtn.hasAttribute("valid-password")){
		if(Email.value && Password.value){
			var user ={
				Email : Email.value ,
				Password : Password.value ,
			};
			const foundUser = users.find(User => User.Email === user.Email);

    		if (foundUser) {
				if(foundUser.Password === user.Password){
					CurUser = foundUser.Name; 
      			SwitchToHome();
				}
     			else{
					document.getElementById('alertIN').innerHTML = `<span class="text-danger" style="font-family: 'PT Sans Caption', sans-serif; font-size: larger;">Incorrect email or password</span>`;
				}
    		}
			else {
				document.getElementById('alertIN').innerHTML = `<span class="text-danger" style="font-family: 'PT Sans Caption', sans-serif; font-size: larger;">Incorrect email or password</span>`;
    		}
		}
		
	}
}

function SwitchToHome(){
	document.getElementById('main').innerHTML=`
	<header id="Header" class="vh-100 d-flex justify-content-center align-items-center mb-5">
      <!-- Start NavBar -->
      <nav class="navbar navbar-expand-lg bg-transparent fixed-top navbar-dark" id="navbar-example">
        <div class="container">
          <h3 class="text-decoration-none link-dark  bold text-white">SMART LOGIN</h3>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav nav-links ms-auto mb-2 mb-lg-0">
              <li class="nav-item m-2">
                <button class="btn p-2 border btn-main text-white border-warning btn-main" onclick="SwitchToLogIN()">LOGOUT</button>
            </ul>
          </div>
        </div>
      </nav>
    <!-- End NavBar -->
    <!-- Start header -->
      <div class=" text-center text-white ">
        <h1 style="font-size: 60px;">Welcome ${CurUser}</h1>
      </div>
    </header>
	`
}
function SwitchToSingUP() {
	document.getElementById('main').innerHTML=`
	<div class="container vh-100">
    <h1 class="p-5 text-center" id="body">SMART LOGIN</h1>
    <div class="w-50 m-auto py-5 px-5 shadow-lg login">
      <h3 class="mb-5 text-center">SIGNUP NOW</h3>
      <label><i class="fa-solid fa-user"></i> Name</label>
      <input type="text" placeholder="Enter your name" id="name" class="form-control my-4" oninput="checkName()" />
      <label><i class="fa-solid fa-envelope pe-2"></i> Email</label>
      <input type="email" placeholder="Enter your email" id="email" class="form-control my-4"
        oninput="checkEmailUP()" />
      <label><i class="fa-solid fa-lock pe-2"></i>Password</label>
      <input type="password" placeholder="Enter your password" id="password" class="form-control my-4"
        oninput="checkPasswordUP()" />
		<ul class="fa-ul">
          <li class="" id="char8"><span class="fa-li mt-1"><i class="fa-solid fa-check-square"></i></span>At least 8 characters long</li>
          <li class="" id="uppercase"><span class="fa-li mt-1"><i class="fa-solid fa-check-square"></i></span>Contains at least one uppercase letter</li>
          <li class="" id="lowercase"><span class="fa-li mt-1"><i class="fa-solid fa-check-square"></i></span>Contains at least one lowercase letter</li>
          <li class="" id="digit"><span class="fa-li mt-1"><i class="fa-solid fa-check-square"></i></span>Contains at least one digit</li>
          <li class="" id="special"><span class="fa-li mt-1"><i class="fa-solid fa-check-square"></i></span>Contains at least one special character</li>
        </ul>
      <button class="btn btn-primary form-control my-4" id="SIGNUPBtn" onclick="main()">
        SIGN UP
      </button>
      <p>
        Don’t have an account?
        <span id="LogIN" onclick="SwitchToLogIN()" style="cursor: pointer; text-decoration: underline">LOGIN</span>
      </p>
      <div class="text-center" id="alert"></div>
    </div>
  </div>
	`;
	Name = document.getElementById('name');
	Email = document.getElementById('email');
	Password = document.getElementById('password');
	SIGNUPBtn = document.getElementById('SIGNUPBtn');
	signup = document.getElementById('SignUP');
	char8 = document.getElementById('char8');
	uppercase = document.getElementById('uppercase');
	lowercase = document.getElementById('lowercase');
	digit = document.getElementById('digit');
	special = document.getElementById('special');
	
}

function SwitchToLogIN() {
	document.getElementById('main').innerHTML=`
	<div class="container vh-100">
    <h1 class="p-5 text-center" >SMART LOGIN</h1>
    <div class="w-50 m-auto py-5 px-5 shadow-lg login">
      <h3 class="mb-5 text-center">LOGIN NOW</h3>
        <label><i class="fa-solid fa-envelope pe-2"></i> Email</label>
        <input type="email" placeholder="Enter your email" id="email" class="form-control my-4" oninput="checkEmail()">
        <label><i class="fa-solid fa-lock pe-2"></i>Password</label>
        <input type="password" placeholder="Enter your password" id="password" class="form-control my-4" oninput="checkPassword()">
		<ul class="fa-ul">
          <li class="" id="char8"><span class="fa-li mt-1"><i class="fa-solid fa-check-square"></i></span>At least 8 characters long</li>
          <li class="" id="uppercase"><span class="fa-li mt-1"><i class="fa-solid fa-check-square"></i></span>Contains at least one uppercase letter</li>
          <li class="" id="lowercase"><span class="fa-li mt-1"><i class="fa-solid fa-check-square"></i></span>Contains at least one lowercase letter</li>
          <li class="" id="digit"><span class="fa-li mt-1"><i class="fa-solid fa-check-square"></i></span>Contains at least one digit</li>
          <li class="" id="special"><span class="fa-li mt-1"><i class="fa-solid fa-check-square"></i></span>Contains at least one special character</li>
        </ul>
        <button class="btn btn-primary form-control my-4" id="LOGINBtn" onclick = "logIn()" >LOG IN</button>
        <p>Don’t have an account? <span id="SignUP" onclick="SwitchToSingUP()" style="cursor: pointer; text-decoration: underline;" >SIGNUP</span></p>
        <div class="text-center" id="alertIN"></div>
    </div>
  </div>
	`;
	Email = document.getElementById('email');
	Password = document.getElementById('password');
	login = document .getElementById('LogIN');
	LOGINBtn = document.getElementById('LOGINBtn');
	char8 = document.getElementById('char8');
	uppercase = document.getElementById('uppercase');
	lowercase = document.getElementById('lowercase');
	digit = document.getElementById('digit');
	special = document.getElementById('special');
}
var regexName=/^[a-zA-Z1-9]{3,}$/;

function checkName(){
	
	if(!regexName.test(Name.value)){
		SIGNUPBtn.setAttribute("valid-name","NO");
		Name.classList.add("is-invalid");
	}else{
		SIGNUPBtn.removeAttribute("valid-name","NO");
		Name.classList.add("is-valid");
        Name.classList.remove("is-invalid");
	}
	if(Name.value == ""){
    	Name.classList.remove("is-valid");
		Name.classList.remove("is-invalid");
	}
	document.getElementById('alert').innerHTML =''
}
var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function checkEmail(){
	if(!regexEmail.test(Email.value)){
		LOGINBtn.setAttribute("valid-email","NO");
		
		Email.classList.add("is-invalid");
	}else{
		LOGINBtn.removeAttribute("valid-email","NO");
		
		Email.classList.add("is-valid");
        Email.classList.remove("is-invalid");
	}
	if(Email.value == ""){
    	Email.classList.remove("is-valid");
		Email.classList.remove("is-invalid");
	}
	document.getElementById('alertIN').innerHTML =''
}
var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function checkEmailUP(){
	if(!regexEmail.test(Email.value)){
		SIGNUPBtn.setAttribute("valid-email","NO");
		Email.classList.add("is-invalid");
	}else{
		SIGNUPBtn.removeAttribute("valid-email","NO");
		Email.classList.add("is-valid");
        Email.classList.remove("is-invalid");
	}
	if(Email.value == ""){
    	Email.classList.remove("is-valid");
		Email.classList.remove("is-invalid");
	}
	document.getElementById('alert').innerHTML =''

}

var minLengthRegex = /.{8,}/;
var uppercaseRegex = /[A-Z]/;
var lowercaseRegex = /[a-z]/;
var digitRegex = /\d/;
var specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-=/]/;

function checkPasswordUP(){
	var hasMinLength = minLengthRegex.test(Password.value);
	if(hasMinLength){
		char8.classList.add("text-success")
		char8.classList.remove("text-danger")
	}
	else{
		char8.classList.add("text-danger")
		char8.classList.remove("text-success")
	}
  	var hasUppercase = uppercaseRegex.test(Password.value);
	if(hasUppercase){
		uppercase.classList.add("text-success")
		uppercase.classList.remove("text-danger")
	}
	else{
		uppercase.classList.add("text-danger")
		uppercase.classList.remove("text-success")
	}
  	var hasLowercase = lowercaseRegex.test(Password.value);
	if(hasLowercase){
		lowercase.classList.add("text-success")
		lowercase.classList.remove("text-danger")
	}
	else{
		lowercase.classList.add("text-danger")
		lowercase.classList.remove("text-success")
	}
  	var hasDigit = digitRegex.test(Password.value);
	if(hasDigit){
		digit.classList.add("text-success")
		digit.classList.remove("text-danger")
	}
	else{
		digit.classList.add("text-danger")
		digit.classList.remove("text-success")
	}
  	var hasSpecialChar = specialCharRegex.test(Password.value);
	if(hasSpecialChar){
		special.classList.add("text-success")
		special.classList.remove("text-danger")
	}
	else{
		special.classList.add("text-danger")
		special.classList.remove("text-success")
	}
	var isValid = hasMinLength && hasUppercase && hasLowercase && hasDigit && hasSpecialChar;

	if(!isValid){
		SIGNUPBtn.setAttribute("valid-password","NO");
		Password.classList.add("is-invalid");
	}else{
		
		SIGNUPBtn.removeAttribute("valid-password","NO");
		Password.classList.add("is-valid");
        Password.classList.remove("is-invalid");
	}
	if(Password.value == ""){
    	Password.classList.remove("is-valid");
		Password.classList.remove("is-invalid");
	}
	document.getElementById('alert').innerHTML =''

}
function checkPassword(){
	var hasMinLength = minLengthRegex.test(Password.value);
	if(hasMinLength){
		char8.classList.add("text-success")
		char8.classList.remove("text-danger")
	}
	else{
		char8.classList.add("text-danger")
		char8.classList.remove("text-success")
	}
  	var hasUppercase = uppercaseRegex.test(Password.value);
	if(hasUppercase){
		uppercase.classList.add("text-success")
		uppercase.classList.remove("text-danger")
	}
	else{
		uppercase.classList.add("text-danger")
		uppercase.classList.remove("text-success")
	}
  	var hasLowercase = lowercaseRegex.test(Password.value);
	if(hasLowercase){
		lowercase.classList.add("text-success")
		lowercase.classList.remove("text-danger")
	}
	else{
		lowercase.classList.add("text-danger")
		lowercase.classList.remove("text-success")
	}
  	var hasDigit = digitRegex.test(Password.value);
	if(hasDigit){
		digit.classList.add("text-success")
		digit.classList.remove("text-danger")
	}
	else{
		digit.classList.add("text-danger")
		digit.classList.remove("text-success")
	}
  	var hasSpecialChar = specialCharRegex.test(Password.value);
	if(hasSpecialChar){
		special.classList.add("text-success")
		special.classList.remove("text-danger")
	}
	else{
		special.classList.add("text-danger")
		special.classList.remove("text-success")
	}

	var isValid = hasMinLength && hasUppercase && hasLowercase && hasDigit && hasSpecialChar;
	if(!isValid){
		LOGINBtn.setAttribute("valid-password","NO");
		
		Password.classList.add("is-invalid");
	}else{
		LOGINBtn.removeAttribute("valid-password","NO");
		
		Password.classList.add("is-valid");
        Password.classList.remove("is-invalid");
	}
	if(Password.value == ""){
    	Password.classList.remove("is-valid");
		Password.classList.remove("is-invalid");
	}
	document.getElementById('alertIN').innerHTML =''
}
function resetUP(){
	Name.value ="" 
	Email.value =""
	Password.value =""
	Name.classList.remove("is-valid");
	Name.classList.remove("is-invalid");
	Email.classList.remove("is-valid");
	Email.classList.remove("is-invalid");
	Password.classList.remove("is-valid");
	Password.classList.remove("is-invalid");

}

function resetIN(){
	Email.value =""
	Password.value =""
	Email.classList.remove("is-valid");
	Email.classList.remove("is-invalid");
	Password.classList.remove("is-valid");
	Password.classList.remove("is-invalid");

}
