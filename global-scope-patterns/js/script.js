const chatModule = (function() {
	// "Global variables"
	let leadself = "Me: ",
	leadcomputer = "PC: ",
	aSaid = ["This is a Cyber Chat"],
	msgYes = "Yes, that's a great idea.",
	msgNo = "No, that must be a mistake.",
	aSassyStuff = [
	  "Like mold on books, grow myths on history.",
	  "She moved like a poem and smiled like a sphinx.",
	  "As long as we don’t die, this is gonna be one hell of a story.",
	  "She laughed, and the desert sang.",
	  "You’ve got about as much charm as a dead slug."
	], 

	// If this is not returned out, its considered a private method
	echo = (msg) => {
		aSaid.push(`<div>${msg}</div>`)
		let listLength = aSaid.length
		let startNode = Math.max(aSaid.length - 6, 0)
		let output = ""
	
		for (let i = startNode; i < listLength; i++) output += aSaid[i]
	
		let advert = document.querySelectorAll(".advert")[0]
		let winning = document.querySelectorAll("#talk span")[0]
		advert.innerHTML = output
		winning.innerHTML = msg
	  }
	
	// Everything inside of the return object is considered public
	return {
		talk(msg) {
			echo(leadself + msg);
		  },
		
		  replyYesOrNo() {
			let msg = Math.random() > 0.5 ? msgYes : msgNo
			echo(leadcomputer + msg)
		  },
		
		  saySassyStuff() {
			let msg = aSassyStuff[~~Math.random() * aSassyStuff.length]
			echo(leadcomputer + msg)
		  },
	}
})()
