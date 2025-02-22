const input = document.getElementById("input1")

function reverseValue(str){
    return str.split("").reverse().join("")
}

function check(){
    const value = input.value
    const reverse = reverseValue(value)

    if (value === reverse){
        alert("WORD IS PALINDROME")
    }
    else{
        alert("NOT PALINDORME!")
    }

    input.value = ""
}