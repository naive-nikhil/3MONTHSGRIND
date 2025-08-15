function reverseString (){
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");

    output.value = [...input].reverse().join("");
}

function isPalindrome (){
    const input = document.getElementById("inputq2").value.toLowerCase();
    const output = document.getElementById("outputq2");

    let reversed = [...input].reverse().join("");
    output.innerHTML = input ? input === reversed : "";
}

function findFactorial() {
    const input = parseInt(document.getElementById("inputq3").value);
    const output = document.getElementById("outputq3");

    let answer = 1;

    for (let i = input; i >= 1; i--){
        answer *= i;
    }

    output.value = input ? answer : "";
}

function fibonacciSequence() {
    const n = parseInt(document.getElementById("inputq4").value);
    const output = document.getElementById("outputq4");
    let answer = [0,1];
    for (let i = 2; i < n; i++){
        answer.push(answer[i - 2] + answer[i - 1]);
    }

    output.value = n <= 0 ? "" : n === 1 ? "0" : answer.slice(0, n).join(" ");
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

    output.value = input ? count : "";
}

function findLargest() {
    const input = document.getElementById("inputq6").value.replace(/\s+/g, "");
    const output = document.getElementById("outputq6");

    let largest = -Infinity;

    const arr = input.split(",");

    for (let i = 0; i < arr.length; i++){
        if (parseInt(arr[i]) > largest) {
            largest = parseInt(arr[i]);
        }
    }

    output.value = input ? largest : "";
}

function removeDuplicates() {
    const input = document.getElementById("inputq7").value.replace(/\s+/g, "");
    const output = document.getElementById("outputq7");

     const arr = input.split(",").map(Number);

    const answer = [...new Set(arr)];

    if (input) {
    output.value = answer;    
    } else {
        output.value = "";
    }
}

