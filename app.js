function getColor() {
    // hex code
    const randomnumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomnumber.toString(16);
    // console.log(randomnumber,randomCode);
    document.body.style.background = randomCode;
    document.getElementById("color-code").innerHTML = randomCode;
    
    navigator.clipboard.write.Text(randomCode);
}

// event call
document.getElementById("btn").addEventListener("click",getColor);

// initial call
getColor();