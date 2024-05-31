function makeTransaction (quantly, prisePerDroid){
const toralPrice = quantly * prisePerDroid;
const message = `You ordered ${quantly} droids worth ${toralPrice}`
return message;
}