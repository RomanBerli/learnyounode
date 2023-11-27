let result = 0;

for(let counter = 2; counter < process.argv.length; counter++){
    result += Number(process.argv[counter]);
}

console.log(result);

//console.log('Das Resultat ist: '+result);