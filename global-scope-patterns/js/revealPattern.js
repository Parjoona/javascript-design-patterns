// Separates private and public functions and variables
const chatModule = (function() {
	// "Private variables"
	let _leadself = "Me: ",
	_leadcomputer = "PC: ",
	_aSaid = ["This is a Cyber Chat"],
	_msgYes = "Yes, that's a great idea.",
	_msgNo = "No, that must be a mistake.",
	_aSassyStuff = [
	  "Like mold on books, grow myths on history.",
	  "She moved like a poem and smiled like a sphinx.",
	  "As long as we don’t die, this is gonna be one hell of a story.",
	  "She laughed, and the desert sang.",
	  "You’ve got about as much charm as a dead slug."
	], 

	// Underscore shows what is private
	_echo = (msg) => {
		aSaid.push(`<div>${msg}</div>`)
		let listLength = _aSaid.length
		let startNode = Math.max(_aSaid.length - 6, 0)
		let output = ""
	
		for (let i = startNode; i < listLength; i++) output += _aSaid[i]
	
		let advert = document.querySelectorAll(".advert")[0]
		let winning = document.querySelectorAll("#talk span")[0]
		advert.innerHTML = output
		winning.innerHTML = msg
	}
	
	talk = (msg) => {
			_echo(_leadself + msg)
	}
		
	replyYesOrNo = () => {
		let msg = Math.random() > 0.5 ? _msgYes : _msgNo
		_echo(_leadcomputer + msg)
	}
		
	saySassyStuff = () => {
		let msg = _aSassyStuff[~~Math.random() * _aSassyStuff.length]
		_echo(_leadcomputer + msg)
	}
	// Everything inside of the return object is considered public
	return {
		talk,
		replyYesOrNo,
		saySassyStuff
	}
})()
