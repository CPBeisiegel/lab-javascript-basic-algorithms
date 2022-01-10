// Iteration 1: Names and Input

let hacker1 = 'Alexa';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Camila'
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
console.log(`The driver's has the longest name. it has ${hacker1.length} characters`)
} else if(hacker2.length > hacker1.length){
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else if(hacker1.length === hacker2.length){
console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}


// Iteration 3: Loops
let nome = "";
for(let i = 0; i < hacker1.length; i++){
    // nome = nome + hacker1[i].toUpperCase() + " "
 nome += hacker1[i].toUpperCase() + " "
}

console.log(nome);

let nomeReverse = ""
for(let i = hacker2.length-1; i >= 0; i--){
    nomeReverse += hacker2[i]
}

console.log(nomeReverse);


for (let i = 0; i < hacker1.length; i++) {
    if (hacker1[i] < hacker2[i]){
      console.log("The driver's name goes first.")
      break;
    } else if(hacker1[i] > hacker2[i]){
      console.log("Yo, the navigator goes first definitely.")
      break;
    } else if (hacker1[i]===hacker2[i]){
      console.log("You have the same name!");
      break;
    }
  }


// Bonus 1

let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

console.log(lorem.length);

let wordsCount = 0

for (let i = 0; i < lorem.length; i++){
  // console.log(lorem[i]);
    if (lorem[i] === " "){
        wordsCount++
      }
  }


console.log("resultado: ", wordsCount)




// Bonus 2

let pharseToCheck = "A man, a plan, a canal, Panama!"



