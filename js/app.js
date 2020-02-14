console.log('This is connected and working. I hope, fingers crossed');



var asmrChoice = prompt('What stimuli are you looking for? auditory, visual or both');
var greeting;
if(asmrChoice == 'auditory'){
    greeting = 'Click on the link at the bottom of the page';
} else if(asmrChoice == 'visual') {
    greeting = 'You are in the right spot';
// } else if( hourNow >= 0 && hourNow < 24){
//     greeting = 'Good Morning!';
} else {
    greeting = 'Wanting both? Go ahead and browse!?'
}

function getDate(){
    var today = new Date();
    document.write(today.toDateString)

}

// function printToday(){
//     var today = new Date();
//     document.write(today.toDateString())
// }




console.log(greeting);
document.write(greeting);