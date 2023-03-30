//*******************vigener********************/
//  data
word = "i am a programmer"
key = "ab"
c=[...word].map(x => x.charCodeAt()-97)
d=''
e=0
for (i of word){
    if(/[a-z]/.test(i)){
        d += String.fromCharCode((key.charCodeAt()-97+c[e++])%26+97)
        if (e >= word.length)
            e=0
    }else
        d+=i  
}
//console.log(word)