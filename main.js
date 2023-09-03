var time = 270;
var food = 35;
document.getElementsByClassName('item')[food-1].innerHTML = '$';


var level = localStorage.getItem("level") ;
if (level== "medium") {
    time = 200;
}
else if (level == "high")
{
    time = 150; 
} 
else if (level == "insane")
{
    time = 100;
    }
var snake = [3,2,1]
var dir = "right";
var runner;

start();








//check snake accident with wall or itself(next head position)
function check(num)
{
    var accedent = false;

    // wall accedent 
    switch (num)
    {
        case 1: if (snake[0] % 20 == 0) { stop("dead"); accedent = true; } break;
        case -1: if ((snake[0]-1 )% 20 == 0) { stop("dead"); accedent = true; } break;
        case 20: if (snake[0] + 20 > 400) { stop("dead"); accedent = true; } break;
        case -20: if (snake[0] - 20 < 1) { stop("dead"); accedent = true; } break;
    }
    
    // itself accesdent 
   

    for (var i = 0; i < snake.length; i++){
        if (snake[0] + num == snake[i]) {
            {
                accedent= true;
                stop("dead")
                break;
             }
                }
        
    }

    return accedent;

     


}


// assign array value for next move (right 1 || left -1 || up 20 ||down -20 )
function assign(num) {
    document.getElementsByClassName('item')[snake[0]-1].innerHTML = ""


    var rem = snake[snake.length - 1];
    var head = snake[0] + num;
   
    for (var i = snake.length - 1; i > 0; i--) {
        snake[i] = snake[i - 1]
    }
    snake[0] = head;

  

    
    return rem;

}

// run the sanke to assign array value and dir value 

function run()
{
    var re = 0;
    if (dir == "right")
    {
      
        if (!check(1))
        { re = assign(1); color_(re); }
        }
    else if (dir == "left")
    {
        if (!check(-1))
        { re = assign(-1); color_(re); }
    
        }
     else if (dir == "up")
    {
        if (!check(-20))
        { re = assign(-20); color_(re); }
    }
    
    
    else
    {
        if (!check(20)) { re = assign(20); color_(re); }
    }
    


}


// move the sanke via color give and remove (tail of the sanke that remove )
function color_(remove)
{
    console.log("remove "+snake)
    var item = document.getElementsByClassName('item');
    var last = 1;
   
    for (var i = 0; i < snake.length; i++){
     


        item[snake[i] - 1].style.background = `rgb(255,0,0,${last})`;
        last = last - 0.03;
     
    }
    item[snake[0]-1].innerHTML = ":"


        
    
     if(food == snake[0])
     {
         snake[snake.length] = remove;
         item[food - 1].innerHTML = "";
         food = Math.floor(Math.random() * (400 - 1) + 1);
        item[food-1].innerHTML = '$';

     }
     else {
        
        item[remove - 1].style.background= "white";
         
      }
}


// start sanke run ()
function start() {
   runner = setInterval(run, time);
}

// event sanke movement key - up ,down,left,right
window.addEventListener("keydown", (e) => {
    switch(e.key)
    {
        case "ArrowDown": if (dir != "up") { dir = "down"; } break;
        case "ArrowUp":if(dir!="down") dir = "up"; break;
        case "ArrowLeft":if(dir!="right") dir = "left"; break;
        case "ArrowRight": if (dir != "left") { dir = "right"; } break;
        
       }
    
})


// stop the snake run (resume || dead)
function stop(data)
{
    clearInterval(runner);
    if (data == "resume")
    {
        clearInterval(runner);
        console.log("resume");l
   
    }
    else if (data == 'dead')
    {
        clearInterval(runner);
        console.log("dead");
        }
        
        
}


//for mobile up , down, left , right

function up()
{
    if(dir != "down")
    dir = "up"
}
function down()
{
    if(dir != "up")
    dir = "down"
}
function left()
{
    if(dir != "right")
    dir = "left"
}
function right()
{
    if(dir != "left")
    dir = "right"
}