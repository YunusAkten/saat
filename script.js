function getName() {
	let namePrompt = prompt("Adınız nedir?");
	let spanName = document.querySelector("#myName");
	let name = namePrompt[0].toUpperCase() + namePrompt.slice(1);
	spanName.innerHTML = name;
	localStorage.setItem("name", name);
}
if (!localStorage.getItem("name")) {
	getName();
} else {
	let spanName = document.querySelector("#myName");
	spanName.innerHTML = localStorage.getItem("name");
}
let newUser = document.querySelector("#newUser");
newUser.addEventListener("click", () => {
	getName();
});
function getTime() {
	let date = new Date();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let second = date.getSeconds();
	// 10 dan küçük olduğu zaman tek sayı gösteriyor ve hoş gözükmüyor
	if (second < 10) {
		second = "0" + second;
	}
	//yukardakinin aynısı dakika için
	if (minute < 10) {
		minute = "0" + minute;
	}
	let hourSpan = document.querySelector("#hour");
	let minuteSpan = document.querySelector("#minute");
	let secondSpan = document.querySelector("#second");
	hourSpan.innerHTML = hour;
	minuteSpan.innerHTML = minute;
	secondSpan.innerHTML = second;
	setTimeout(getTime, 1000);
}
getTime();
