function reverseString (){
    const input = document.getElementById("input");
    const output = document.getElementById("output");

    let inputArray = [...input.value];

    let reverseArray = [...inputArray];
    for(let i=0; i<input.value.length;i++){
        reverseArray[input.value.length-1-i] = input.value[i];
    }

    output.value = reverseArray.join("");
}

function isPalindrome (){
    const input = document.getElementById("inputq2").value.toLowerCase();
    const output = document.getElementById("outputq2");

    let inputArray = [...input];

    let reverseArray = [...inputArray];
    for(let i=0; i<input.length;i++){
        reverseArray[input.length-1-i] = input[i];
    }

    let palindrome = input === reverseArray.join("");
    output.innerHTML = palindrome;
}

function findFactorial() {
    const input = document.getElementById("inputq3").value;
    const output = document.getElementById("outputq3");

    let answer = 1;

    for (let i = input; i >= 1; i--){
        answer *= i;
    }

    output.value = answer;
}

function fibonacciSequence() {
    const input = document.getElementById("inputq4").value;
    const output = document.getElementById("outputq4");

    let answer = [0,1];

    for (let i = 2; i < input; i++){
        answer.push(answer[i - 2] + answer[i - 1]);
    }

    console.log(answer);

    output.value = answer.join(" ");
}

function findVowels() {
    const input = document.getElementById("inputq5").value;
    const output = document.getElementById("outputq5");

    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < input.length; i++){
        if (vowels.includes(input[i])) {
            count++;
        }
    }

    output.value = count;
}

function findLargest() {
    const input = document.getElementById("inputq6").value;
    const output = document.getElementById("outputq6");

    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < input.length; i++){
        if (vowels.includes(input[i])) {
            count++;
        }
    }

    let ss = [...input];

    console.log(ss);

    console.log(typeof (ss));

    output.value = count;
}