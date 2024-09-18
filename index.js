// code your solution here

//✓ function exists
//✓ uses the default activity 'roller-skate' when no arguments are passed
//✓ permits the default activity to be overriden
function saturdayFun(activity = 'roller-skate'){ //this is called delearing the function roller-skate is in back tick(button beside 1 on the far left)when interpolation is involved (${activity})
    return `This Saturday, I want to ${activity}!`;
} 

function mondayWork (job = 'go to the office'){ //this is Function Decleration
        //return 'This Monday, I want to ${activity}!';  back tick was not used in this piece of code thats why its incorrect
        return `This Monday, I will ${job}.`; //wasnt running before due to the space between monday and the comma (watch the code carefully)
        
}
function wrapAdjective (style = "*"){ 
   
return function(adjective="special"){
    return `You are ${style}${adjective}${style}!`
}


}

