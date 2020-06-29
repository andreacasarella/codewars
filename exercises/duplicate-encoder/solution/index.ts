export function duplicateEncode(word: string){
    let s = '';
    for( let i= 0; i < word.length;i++){
    let char = word.charAt(i).toLowerCase();
    if((word.substr(0,i)+word.substr(i+1,word.length)).toLowerCase().indexOf(char) != -1)
     s = s.concat(')');
     else
     s = s.concat('(');
   }
   return s;
}