window.onload = function () {
	GreenBirds.style.visibility = "hidden"
	Heart1.style.visibility = "hidden"
	DancingSkeleton.style.visibility = "hidden"
	infZ.style.visibility = "hidden"
	HAHAHA.style.visibility = "hidden"
	EyeSkeleton.style.visibility = "hidden"
	Yinyang.style.visibility = "hidden"
	TwoMasks.style.visibility = "hidden"
	FairyFlight.style.visibility = "hidden"
	MaskGallery.style.visibility = "hidden"
	FairyDialog1.style.visibility = "hidden"
	YinyangFace.style.visibility = "hidden"
	BrowserType.style.visibility = "hidden"
	WeAreComing.style.visibility = "hidden"
	Church1.style.visibility = "hidden"
	RadiationLogo.style.visibility = "hidden"
	AstrologyDesk.style.visibility = "hidden"
	Mushrooms.style.visibility = "hidden"
	SpiningMoney.style.visibility = "hidden"

}
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
delay(5000).then(() => dark.style.visibility = "hidden");

/*Sounds*/
const WarpBeam = new Audio();
WarpBeam.src = "sounds/Warp.mp3";
const MaskLaugh = new Audio();
MaskLaugh.src = "sounds/MaskLaugh.mp3";
const Alarm1 = new Audio();
Alarm1.src = "sounds/Alarm1.mp3";
const RAVESTYLE_2011 = new Audio();
RAVESTYLE_2011.src = "sounds/RAVESTYLE_2011.mp3";
const Never_Stop = new Audio();
Never_Stop.src = "sounds/Never_Stop.mp3";

/* Variables */
let RandomPositionX = Math.ceil(Math.random() * 100);
let RandomPositionY = Math.ceil(Math.random() * 100);
		var browserName = (function (agent) {
        switch (true) {
            case agent.indexOf("edge") > -1: return "MS Edge";
            case agent.indexOf("edg/") > -1: return "Edge ( chromium based)";
            case agent.indexOf("opr") > -1 && !!window.opr: return "Opera";
            case agent.indexOf("chrome") > -1 && !!window.chrome: return "Chrome";
            case agent.indexOf("trident") > -1: return "MS IE";
            case agent.indexOf("firefox") > -1: return "Mozilla Firefox";
            case agent.indexOf("safari") > -1: return "Safari";
            default: return "other";
        }
    })(window.navigator.userAgent.toLowerCase());	
	function json(url) {
		return fetch(url).then(res => res.json());
	}
	let apiKey = '862302deb1283c819c57d614689bd5ebff470888d07b1b027e4ba049';
	json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
	let IP = data.ip
	let City = data.city
	BrowserType.innerHTML=(browserName + " " + IP + " " + City)	
	});
/* Start */
let Logo = document.getElementById("Logo")
let inf5 = document.getElementById("inf5")
let plate1 = document.getElementById("plate1")
let JumpVideo1 = document.getElementById("JumpVideo1")
let dark = document.getElementById("dark")

/* Plate1 */
let GreenBirds = document.getElementById("GreenBirds")
let Heart1 = document.getElementById("Heart1")
let DancingSkeleton = document.getElementById("DancingSkeleton")
let infZ = document.getElementById("infZ")

/* Plate2 */
let Yinyang = document.getElementById("Yinyang")
let TwoMasks = document.getElementById("TwoMasks")
let FairyFlight = document.getElementById("FairyFlight")
let FairyDialog1 = document.getElementById("FairyDialog1")

/* Plate3*/
let Church1 = document.getElementById("Church1")
let RadiationLogo = document.getElementById("RadiationLogo")

/* Masks */
let MaskGallery = document.getElementById("MaskGallery")

/* Yinyang */
let YinyangFace = document.getElementById("YinyangFace")
let BrowserType = document.getElementById("BrowserType")
let WeAreComing = document.getElementById("WeAreComing")

/* Heart */
let HAHAHA = document.getElementById("HAHAHA")

/* DancingSkeleton*/
let EyeSkeleton = document.getElementById("EyeSkeleton")

/* Church */
let AstrologyDesk = document.getElementById("AstrologyDesk")
let Mushrooms = document.getElementById("Mushrooms")
let SpiningMoney = document.getElementById("SpiningMoney")

function Plate1Tp() {
	WarpBeam.play();
	Logo.style.visibility = "hidden"
	inf5.style.visibility = "hidden"
	JumpVideo1.style.visibility = "hidden"
	plate1.style.visibility = "hidden"
	plate2.style.visibility = "hidden"
	plate3.style.visibility = "hidden"
	plate4.style.visibility = "hidden"
	GreenBirds.style.visibility = "visible"
	Heart1.style.visibility = "visible"
	DancingSkeleton.style.visibility = "visible"
	infZ.style.visibility = "visible"
}
function Plate2Tp() {
	WarpBeam.play();
	Logo.style.visibility = "hidden"
	inf5.style.visibility = "hidden"
	JumpVideo1.style.visibility = "hidden"
	plate1.style.visibility = "hidden"
	plate2.style.visibility = "hidden"
	plate3.style.visibility = "hidden"
	plate4.style.visibility = "hidden"
	Yinyang.style.visibility = "visible"
	TwoMasks.style.visibility = "visible"
	FairyFlight.style.visibility = "visible"
	FairyDialog1.style.visibility = "visible"
}
function Plate3Tp() {
	WarpBeam.play();
	Logo.style.visibility = "hidden"
	inf5.style.visibility = "hidden"
	JumpVideo1.style.visibility = "hidden"
	plate1.style.visibility = "hidden"
	plate2.style.visibility = "hidden"
	plate3.style.visibility = "hidden"
	plate4.style.visibility = "hidden"
	Church1.style.visibility = "visible"
	RadiationLogo.style.visibility = "visible"
}
function Heart1Tp() {
	WarpBeam.play();
	GreenBirds.style.visibility = "hidden"
	Heart1.style.visibility = "hidden"
	DancingSkeleton.style.visibility = "hidden"
	infZ.style.visibility = "hidden"
	HAHAHA.style.visibility = "visible"
}
function DancingSkeletonTp() {
	WarpBeam.play();
	GreenBirds.style.visibility = "hidden"
	Heart1.style.visibility = "hidden"
	DancingSkeleton.style.visibility = "hidden"
	infZ.style.visibility = "hidden"
	EyeSkeleton.style.visibility = "visible"
	var myInterval2 = setInterval(function() {
		let RandomPositionX = Math.ceil(Math.random() * 1000) + "px"
		let RandomPositionY = Math.ceil(Math.random() * 300) + "px";
		EyeSkeleton.style.left = RandomPositionX;
		EyeSkeleton.style.top = RandomPositionY;
		RAVESTYLE_2011.play();
	}, 500);
}
function Yinyang1Tp() {
	Yinyang.style.visibility = "hidden"
	TwoMasks.style.visibility = "hidden"
	FairyFlight.style.visibility = "hidden"
	FairyDialog1.style.visibility = "hidden"
	YinyangFace.style.visibility = "visible"
	WeAreComing.style.visibility = "visible"
	BrowserType.style.visibility = "visible"
	var myInterval = setInterval(function() {
    Alarm1.play();
	}, 100);
}
function Masks1Tp() {
	MaskLaugh.play();
	Yinyang.style.visibility = "hidden"
	TwoMasks.style.visibility = "hidden"
	FairyFlight.style.visibility = "hidden"
	FairyDialog1.style.visibility = "hidden"
	MaskGallery.style.visibility = "visible"
}
function ChurchTp() {
	Church1.style.visibility = "hidden"
	RadiationLogo.style.visibility = "hidden"
	AstrologyDesk.style.visibility = "visible"
	Mushrooms.style.visibility = "visible"
	SpiningMoney.style.visibility = "visible"
	var myInterva3 = setInterval(function() {
    Never_Stop.play();
	}, 100);
}
