const leadself = "Me: ",
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
  ]

let talk = (msg) => {
	_echo(leadself + msg)
}

let replyYesOrNo = () => {
	let msg = Math.random() > .5 ? msgYes : msgNo
	_echo(leadcomputer + msg)
}

let saySassyStuff = () => {
	let msg = aSassyStuff[ ~~Math.random() * aSassyStuff.length ]
	_echo(leadcomputer + msg)
}

let _echo = (msg) => {
	aSaid.push(`<div>${msg}</div>`)
	let listLength = aSaid.length
	let startNode = Math.max(aSaid.length - 6, 0)
	let output = ''

	for(let i = startNode; i < listLength; i++) {
		output += aSaid[i]
	}

	let advert = document.querySelectorAll('.advert')[0]
	advert.innerHTML = output

	let winning = document.querySelectorAll('#talk span')[0]
	winning.innerHTML = msg
	
}
