function play()
{
    location.href = "./main.html"
}
//<-level->
set_level(1);

function set_level(num)
{
    var m2 = document.getElementById('menu2').firstElementChild.nextElementSibling;
    if (num == 1) {
        localStorage.setItem("level", "easy");
        m2.innerHTML = "EASY"
    }
    else if (num == 2) {
        localStorage.setItem("level", "medium");
        m2.innerHTML = "MEDIUM"
    }
    else if (num == 3) {
        localStorage.setItem("level", "hard");
        m2.innerHTML = "HARD"
    
    }
    else if (num == 4) {
        localStorage.setItem("level", "insane");
     m2.innerHTML = "INSANE"
    }
}

function level_left()
{
    var g_level = localStorage.getItem("level");
    
    switch (g_level)
    {
        case "medium": set_level(1); break;
        case "hard": set_level(2); break;
        case "insane": set_level(3); break;
    }
}

function level_right()
{
    var g_level = localStorage.getItem("level");
    
    switch (g_level)
    {
        case "easy": set_level(2); break;
        case "medium": set_level(3); break;
        case "hard": set_level(4); break;
    }
}

document.getElementById("menu2").firstElementChild
//<-high score->

document.getElementById("menu3").addEventListener("click", () => {
    var m3 = document.getElementById("menu3");
    m3.innerHTML= localStorage.getItem("high_score");
    
    setTimeout(() => {
        
    m3.innerHTML= "HIGH SCORE"}, 2000)

})

function set_high(num)
{
    localStorage.setItem("high_score", num)
}
if ( !(0 <=parseInt(localStorage.getItem("high_score"))) )
{
   
    set_high(0)
}