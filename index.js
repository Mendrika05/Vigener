//*******************vigener********************/
//  data
word = "I am a programmer"  //  Enter the message
key = "ab"  //  Enter the key

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