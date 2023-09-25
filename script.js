let name = prompt("Adınız nedir?");
let spanName = document.querySelector("#myName");
spanName.innerHTML = name[0].toUpperCase() + name.slice(1);

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
	console.log(second);
	hourSpan.innerHTML = hour;
	minuteSpan.innerHTML = minute;
	secondSpan.innerHTML = second;
	setTimeout(getTime, 1000);
}
getTime();
