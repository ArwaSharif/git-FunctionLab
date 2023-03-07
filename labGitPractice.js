//Write a function called minusOnethat takes a parameter num. Assuming the argument is a number, print the argument -1.
function minusOnethat(num){
    if (typeof num === "number"){
        console.log(num - 1);
    } else {
        console.log(num)
    }

}
minusOnethat(5)

//Write a function makeSentence that takes three parameters and concatenates them into a fully formed sentence.

// const makeSentence = function(){
//     console.log(arguments);
//     let str = "";
//     for (let i of arguments){
//         str += " " + i;
//     }
//     return str
// }

function makeSentence(...par){
    const sentence = par.join(" ");
    return sentence;
}

console.log(makeSentence('I', 'want', 'chimichangas'))


function getLastElement(parArr){
    let lastElement = parArr[parArr.length-1]
    console.log(lastElement)
}

getLastElement([1, 2, 3, 4, 5, 6]);       // 6
getLastElement(['a', 'b', 'c']);          // 'c'
getLastElement([[1, 2, 3], [4, 5, 6]]);   // [4, 5, 6]