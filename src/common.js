let text = `PASTE_THE_COPIED_TEXT_HERE`; // include zero-width chars
let binary = '';
for (let c of text){
    if(c === '\u200B') binary += '0';
    if(c === '\u200C') binary += '1';
}
let decoded = '';
for(let i=0; i<binary.length; i+=8){
    decoded += String.fromCharCode(parseInt(binary.substr(i,8),2));
}
console.log(decoded);
