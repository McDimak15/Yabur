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
	AstrologyDesk.style.visibility = "hidden"
	RadiationDangerPass.style.visibility = "hidden"
	PassControle.style.visibility = "hidden"
	RadiationLogoConfirm.style.visibility = "hidden"
	ZodiacSign1.style.visibility = "hidden"
	AngelicNose.style.visibility = "hidden"
	ChooseCorrectDialog.style.visibility = "hidden"
	HelpEye.style.visibility = "hidden"
	EyeStory.style.visibility = "hidden"

}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
delay(500).then(() => dark.style.visibility = "hidden");

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
const AngelicTeleport = new Audio();
AngelicTeleport.src = "sounds/AngelicTp.mp3";
const AngelicLoop = new Audio();
AngelicLoop.src = "sounds/AngelicLoop.mp3";
const MorseCode = new Audio();
MorseCode.src = "sounds/MorseCode.mp3";

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

/* Plate3 */
let Church1 = document.getElementById("Church1")
let RadiationLogo = document.getElementById("RadiationLogo")

/* Plate4 */
let RadiationLogoConfirm = document.getElementById("RadiationConfirm")
let PassControle = document.getElementById("PassControle")
let RadiationDangerPass = document.getElementById("RadiationDangerPass")

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

/* Radiation */
let HelpEye = document.getElementById("HelpEye")
let EyeStory = document.getElementById("EyeStory")

/* ZodiacSign1 */
let ZodiacSign1 = document.getElementById("ZodiacSign1")

/* HeavenChoose */
let AngelicNose = document.getElementById("AngelicNose")
let ChooseCorrectDialog = document.getElementById("ChooseCorrectDialog")

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
function Plate4Tp() {
	WarpBeam.play();
	Logo.style.visibility = "hidden"
	inf5.style.visibility = "hidden"
	JumpVideo1.style.visibility = "hidden"
	plate1.style.visibility = "hidden"
	plate2.style.visibility = "hidden"
	plate3.style.visibility = "hidden"
	plate4.style.visibility = "hidden"
	RadiationDangerPass.style.visibility = "visible"
	PassControle.style.visibility = "visible"
	RadiationLogoConfirm.style.visibility = "visible"
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
	document.title = "8235"
	var myInterva3 = setInterval(function() {
    Never_Stop.play();
	}, 100);
}
function RadiationTp() {
	if (PassControle.value == "8235" ) {
	WarpBeam.play();	
	var myInterval4 = setInterval(function() {
		let RandomPositionX = Math.ceil(Math.random() * 1000) + "px"
		let RandomPositionY = Math.ceil(Math.random() * 300) + "px";
		ZodiacSign1.style.left = RandomPositionX;
		ZodiacSign1.style.top = RandomPositionY;
	}, 350);
	ZodiacSign1.style.visibility = "visible"
	} else {
		Yinyang1Tp();
	}
	RadiationDangerPass.style.visibility = "hidden"
	PassControle.style.visibility = "hidden"
	RadiationLogoConfirm.style.visibility = "hidden"
}
function RadiationSuccessTp() {
	document.body.style.backgroundImage = "url('images/HeavenBG.jpg')";
	document.body.style.backgroundSize = "150% 800%"
	ZodiacSign1.style.visibility = "hidden"
	AngelicNose.style.visibility = "visible"
	ChooseCorrectDialog.style.visibility = "visible"
	AngelicTeleport.play();
	var myInterva5 = setInterval(function() {
    AngelicLoop.play();
	}, 100);
}
function RadiationLogoTp() {
	WarpBeam.play();
	Church1.style.visibility = "hidden"
	RadiationLogo.style.visibility = "hidden"
	HelpEye.style.visibility = "visible"
	EyeStory.style.visibility = "visible"
	var myInterval6 = setInterval(function() {
		let RandomText = Math.ceil(Math.random() * 8);
		if (RandomText == "1") {
			EyeStory.innerHTML = "ነፍስኻ ብዘይእመን ሓይሊ ኣልቦነት ክትዓርፍ ከላ እታ ለይቲ ራዕዲ ተሰሚዑካ ይፈልጥ ድዩ"
		} else if (RandomText == "2") {
			EyeStory.innerHTML = "ነዚ ቦታ ሰሚዕካዮ ትፈልጥ ትኸውን - ናይ ቀደምን ዝተደርበየን ናይ ስነ-ኣእምሮ ሆስፒታል። "
		} else if (RandomText == "3") {
			EyeStory.innerHTML = "ነፍሳት ኣብ ጸልማትን መዓሙቕ ዘይብሉ ጭንቀትን ዝተዓጽዋሉ ቦታ። ሓዘንን ተስፋ ምቑራጽን ዝመልአ"
		} else if (RandomText == "4") {
			EyeStory.innerHTML = "እዚ ቦታ እዚ ኣብ ምድሪ ሲኦል እዩ ነይሩ። እዚ ጥራይ ግን ኣብ ቆርበት ፍርሒ ዘልዕል ኣይኮነን።"
		} else if (RandomText == "5") {
			EyeStory.innerHTML = "ናብዚ ሆስፒታል ምስ ኣተኻ ሕልሚ ቀትሪ ዝስዕበካ ኮይኑ ይስምዓካ። ኣብ ዘይብጻሕ ኩርናዓት መብራህቲ ትራፊክ"
		} else if (RandomText == "6") {
			EyeStory.innerHTML = "ኣብ ነፍሲ ወከፍ እትወስዶ ስጉምቲ እናዓበየ ዝኸይድ ጽላሎታዊ ሕሹኽታታት ትሰምዕ። ናይ ገዛእ ርእስኻ ሓሳባት ይፈርሓካ።"
		} else if (RandomText == "7") {
			EyeStory.innerHTML = "እቶም ሓደ እዋን ኣብ ውሽጢ እዞም መናድቕ ዝነበሩ ገጾም ብህይወቶምን ኣእምሮኦምን ተቐዲዶም ትርእዮም።"
		} else if (RandomText == "8") {
			EyeStory.innerHTML = "መውጽኢ መንገዲ ትደሊ፡ ኩሎም ማዕጾታት ግን ሓደ ዓይነት ይመስሉ፡ ብዘይካ ጸልማት ናብ ዝኾነ ቦታ ኣይመርሑን እዮም።"
		}
		MorseCode.play();
	}, 1000);
}
