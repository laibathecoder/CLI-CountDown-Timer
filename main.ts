#! /usr/bin/env node

//COUNDOWN TIMER :

import chalk from "chalk";
import{differenceInSeconds} from "date-fns";

function* countdown(second : number){
    while(second > 0 ){
       yield second ;
       second--;
}

}

let timerIterator = countdown(10);

function showcountdown(){
    let result = timerIterator.next();
 if(!result.done){
    const now = new Date();

    const countdown = new Date(now.getTime() + (result.value * 1000));

const leftedSecond = differenceInSeconds(countdown , now);

console.log(chalk.blueBright(`Coundown : ${leftedSecond}`))

    setTimeout(showcountdown , 1000)
}  else{
    console.log(chalk.bgYellow("COUNTDOWN COMPLETE :)"));
 }

}

showcountdown();








