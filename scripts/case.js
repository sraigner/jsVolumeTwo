/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

var sign = prompt("what is your astrological sign").toLowerCase();



switch(sign) {
  case "Taurus":
    alert("Taurus");
    break;    
    
  case "Virgo":
    alert("Virgo");
    break;    
  case "Leo":
    alert("Leo");
    break;
  default:
    alert("Please entre a valid sign");
    break;
}