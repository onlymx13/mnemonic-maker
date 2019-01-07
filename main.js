Array.prototype.randomElement = function () {
    return this.length ? this[Math.floor(Math.random() * this.length)] : "";
};
var dict = {
  plus: ["and"],
  minus: ["minus"],
  equals: ["is"],
  cos: ["completion"],
  sin: ["Super Mario Bros"],
  tan: ["trouble"],
  a: ["albeit","alligator(s)"],
  A: ["America"],
  b: ["but", "balloon"],
  u: ["you"],
  n: ["no"],
  y: ["young"],
  p: ["people"],
  q: ["question"],
  e: ["eat"],
  i: ["I"],
  0.5: ["half of a(n)"],
  int: ["licorice"],
  dy: ["change", "why change?"],
  du: ["change", "you change"]
};
var repeat;
var formula = prompt ('formlua:');
formula = formula.replace(/\-/,"-minus-");
formula = formula.replace(/=/, "=equals=");
formula = formula.replace(/\+/,"+plus+");
formula = formula.replace(/cos\(.\)/,"cos");
formula = formula.replace(/sin\(.\)/,"sin");
formula = formula.replace(/tan\(.\)/,"tan");
var things = formula.split(/[\+\-=*\/×÷^()]/);
do {
  var mnemonic = "";
  things.forEach(function(element) {
    if (!element) return;
    mnemonic += memorize(element) + " ";
  });
  console.log(mnemonic);
} while (0);
function memorize(thing) {
  if (thing === "-") thing = "minus";
  if (Number(thing) === Number(thing)){
    return dict[parseFloat(thing)] || ["World ",""].randomElement() + parseFloat(thing);
  }
  if (Number(thing.substring(thing.length - 1)) === Number(thing.substring(thing.length - 1))) {
    return dict[parseFloat(thing)] || parseFloat(thing);
  }
  else if (dict[thing])
    return dict[thing].randomElement();
  else
    return thing;
}
