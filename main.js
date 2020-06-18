var currentCount = parseInt(document.getElementById("countNumDisplay").innerHTML , 10);

document.getElementById("up").addEventListener("click", function(){
    document.getElementById("countNumDisplay").innerHTML = ++currentCount;
});

document.getElementById("down").addEventListener("click", function(){
    document.getElementById("countNumDisplay").innerHTML = --currentCount;
});