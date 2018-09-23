// Make sure my namespace is not over written by someone else.
// no.parjoona.pack f.ex
const mynamespace = mynamespace || {}
mynamespace.for = mynamespace.for || {}
mynamespace.for.object = mynamespace.for.object || {}

// This is refered to as a object literal app.
// Replaces global namespace with the method "One Object" using Namespace
mynamespace.for.object = {
  leadself: "Me: ",
  leadcomputer: "PC: ",
  aSaid: ["This is a Cyber Chat"],
  msgYes: "Yes, that's a great idea.",
  msgNo: "No, that must be a mistake.",
  aSassyStuff: [
    "Like mold on books, grow myths on history.",
    "She moved like a poem and smiled like a sphinx.",
    "As long as we don’t die, this is gonna be one hell of a story.",
    "She laughed, and the desert sang.",
    "You’ve got about as much charm as a dead slug."
  ],

  talk(msg) {
    this.echo(this.leadself + msg);
  },

  replyYesOrNo() {
    let msg = Math.random() > 0.5 ? this.msgYes : this.msgNo
    this.echo(this.leadcomputer + msg)
  },

  saySassyStuff() {
    let msg = this.aSassyStuff[~~Math.random() * aSassyStuff.length]
    this.echo(this.leadcomputer + msg)
  },

  echo(msg) {
    this.aSaid.push(`<div>${msg}</div>`)
    let listLength = this.aSaid.length
    let startNode = Math.max(this.aSaid.length - 6, 0)
    let output = ""

    for (let i = startNode; i < listLength; i++) {
      output += this.aSaid[i]
    }

    let advert = document.querySelectorAll(".advert")[0]
    advert.innerHTML = output

    let winning = document.querySelectorAll("#talk span")[0]
    winning.innerHTML = msg
  }
};
