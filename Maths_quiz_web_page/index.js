
let ans;
let opt ;
let n1 ;
let n2 ;
let optns = [];
var operatn = [];
let copt;
let scor=0;
let actscore=0;

function startQuiz()
{
    opt = Math.floor(Math.random() * (operatn.length));
    n1 = Math.floor((Math.random()*2000)-1000);
    n2 = Math.floor((Math.random()*2000)-1000);

    document.getElementById('question').innerText="("+n1+") "+operatn[opt]+" ("+n2+") = ";
    switch(operatn[opt]){
        case '+':
            ans = n1 + n2;
            break;
        case '-':
            ans = n1 - n2;
            break;
        case '*':
            ans = n1 * n2;
            break;
        case '/':
            ans = n1 / n2;
            optns.forEach(itm => {
                itm+=((Math.random()*2)-1);
            })
            break;
    }
    optns = [(Math.floor((Math.random()*30)-15)+ans), (Math.floor((Math.random()*30)-15)+ans), (Math.floor((Math.random()*30)-15)+ans), (Math.floor((Math.random()*30)-15)+ans)]
    copt= Math.floor(Math.random() * 4)
    optns[copt]=ans;
    document.getElementById('option1').innerText = optns[0]
    document.getElementById('option2').innerText = optns[1]
    document.getElementById('option3').innerText = optns[2]
    document.getElementById('option4').innerText = optns[3]
    ennable();
    document.getElementById('QuizBox').hidden = false;

}

function start()
{
    document.querySelectorAll('[type = "checkbox"]').forEach(itm => {
        if(itm.checked === true)
            {
                operatn.push(itm.value);
                itm.checked = false;
            }        
    });
    if(operatn.length===0)
    {
        alert("Please select a option")
        return;
    }
    var entry = document.getElementById('Mainbox');
    entry.hidden = true;
    startQuiz();
}
function checkAnswer1(butten)
{
    dissable()
    document.getElementsByTagName('button')[copt+1].style.backgroundColor = "#28d86c";
    actscore+=5;
 if(+butten.value === copt)
    {
        document.getElementById('resposce').innerText = 'Correct answer!';
        document.getElementById('resposce').style.backgroundColor = "rgba(0, 155, 59, 1)";
        document.getElementById('resposce').style.color='white';
        scor+=5;
    }
    else
    {
        document.getElementById('resposce').innerText = 'Wrong answer!';
        document.getElementById('resposce').style.backgroundColor = "rgba(232, 0, 0, 1)";
        document.getElementById('resposce').style.color='white';
        butten.style.backgroundColor = "#eb5d5dff";
    }
    document.getElementById('resposce').hidden = false;
    document.getElementById("score").innerText = 'Score : '+scor+'/'+actscore;
}

function checkAnswer(butten)
{
    checkAnswer1(butten)
 setTimeout(()=>{
 butten.style.removeProperty('background-color');
 document.getElementsByTagName('button')[copt+1].style.removeProperty('background-color');
 document.getElementById('resposce').hidden = true;

 startQuiz();
 },1500);

   
}

function exit()
{
    document.getElementById('QuizBox').hidden = true;
    document.getElementById('Mainbox').hidden = false;
    operatn = [];
    scor = 0;
    actscore = 0;
    document.getElementById("score").innerText = 'Score : '+scor+'/'+actscore;
    document.getElementById('resposce').innerText = ' '

}
function dissable()
{
    document.querySelectorAll('button').forEach(itm =>  itm.disabled = true);
    return;
}
function ennable()
{
    document.querySelectorAll('button').forEach(itm =>  itm.disabled = false);
    return;
}