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

}
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
delay(2800).then(() => dark.style.visibility = "hidden");

/*Sounds*/
const WarpBeam = new Audio();
WarpBeam.src = "sounds/Warp.mp3";
const MaskLaugh = new Audio();
MaskLaugh.src = "sounds/MaskLaugh.mp3";
const Alarm1 = new Audio();
Alarm1.src = "sounds/Alarm1.mp3";
const RAVESTYLE_2011 = new Audio();
RAVESTYLE_2011.src = "sounds/RAVESTYLE_2011.mp3";

/* Variables */
let RandomPositionX = Math.ceil(Math.random() * 100);
let RandomPositionY = Math.ceil(Math.random() * 100);


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

/* Masks */
let MaskGallery = document.getElementById("MaskGallery")

/* Yinyang */
let YinyangFace = document.getElementById("YinyangFace")

/* Heart */
let HAHAHA = document.getElementById("HAHAHA")

/* DancingSkeleton*/
let EyeSkeleton = document.getElementById("EyeSkeleton")


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
