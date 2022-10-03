const prompt = require("prompt-sync")();

//  Achieving a console app that tracks the amount of water a pperson consumes everyday.
console.log("Welcome to Sylvia's Water Healthcare App. ");
console.log("");  

while (true) {
    let mission = prompt("Click on Y to see our mission statement,click N to skip, otherwise Q to quit: ").toUpperCase();
    console.log("");

    if (mission === "Q") {
        console.log("It really saddens me to see you. Hopefully you will be back soon");
        break;
    } else if (mission === "N") {
        console.log("Alright let's proceed");
        console.log("");
        continue;
    } else if (mission === "Y") {
        console.log("Sylvia's Water Healthcare App helps to encourage people consume water everyday \n and provides a solution that helps keep them in check. \n Proper water consumption helps to keep the body fresh and it prevents certain kidney problems. \n Use our app everyday to keep yourself in check, you have nothing to lose. \n We care but only you can take that bold step.");
        console.log("");
        while (true) {
            const day = prompt("Today is ").toUpperCase();
            console.log("Hello, Good day. What's your name?");
            const name = prompt("Hi my name is ").toUpperCase();
            console.log(`Good day ${name}, Glad to have you back!`);
            console.log("");

            console.log(`Alright so ${name}, please input your location below.`);
            let location = prompt("Press N for north, W for west, E for east and S for south: ").toUpperCase();
            const firstWaterGoal = "6 Litres";
            const secondWaterGoal = "5 Litres";  
                
            if (location === "N") {
                console.log(`${name}, due to your location(North), Your recommended water consumption for today being ${day} should be ${firstWaterGoal}.`);
                continue;
            } else if (location === "W") {
                console.log(`${name}, due to your location(West), Your recommended water consumption for today being ${day} should be ${secondWaterGoal}`);
                break;
            } else if (location === "E") {
                console.log(`${name}, due to your location(East), Your recommended water consumption for today being ${day} should be ${secondWaterGoal}`);
                continue;
            } else if (location === "S") {
                console.log(`${name}, due to your location(South), Your recommended water consumption for today being ${day} should be ${secondWaterGoal}.`);
                continue;   
            } 
        while (true) {
            console.log("");
                console.log("If you wish to change the default set water goal, please input your preferred water goal but it shouldn't be less than 4Litres.");
                const confirm = prompt("Select R to reset your Water goal, otherwise let's proceed with P for the default: ").toUpperCase();
                console.log("");

                if (confirm === "R") {
                    console.log("Go ahead and reset your goal!!");
                    const userWaterGoal = parseInt(prompt("Enter your preferred water goal(not less than 4L): "));
                    if (userWaterGoal < 4) {
                        console.log("Please enter a water goal of more than or equal to 4L");
                        continue;
                    }  else{
                        console.log("");
                        console.log(`${name}, Your Water set goal for today is ${userWaterGoal} Litres`);
                        continue;
                    }  
                    
                }  else if (confirm === "P") {
                    if (location === "S" || location === "E" || location === "W") {
                        console.log(`Dear ${name}, your set goal is ${secondWaterGoal}. Let's do this!`);   
                    }   
                }
                while (true) {
                    console.log("");
                    let start = parseInt(prompt("What quantity of water in Litres do you want to drink now: "));

                    if (firstWaterGoal <= 0) {
                    console.log(`Congratulations ${name}........You've achieved your WATER GOAL for today being ${day}`);
                    break;
                    } else if (secondWaterGoal <= 0) {
                        console.log(`Congratulations ${name}........You've achieved your WATER GOAL for today being ${day}`);
                        break;
                    } else if (userWaterGoal <= 0) {
                        console.log(`Congratulations ${name}........You've achieved your WATER GOAL for today being ${day}`);
                        break;
                    }
                    let count1 = firstWaterGoal - start;
                    console.log(`Welldone ${name}.....you have consumed ${firstWaterGoal} and have ${count1} to go. \n Welldone Let's keep doing this.`);

                    let count2 = secondWaterGoal - start;
                    console.log(`Welldone ${name}.....you have consumed ${secondWaterGoal} and have ${count2} to go. \n Welldone Let's keep doing this.`);

                    let count3 = userWaterGoal - start;
                    console.log(`Welldone ${name}.....you have consumed ${userWaterGoal} and have ${count3} to go. \n Welldone Let's keep doing this.`);    
                }  
            }
            }
        }
        break;
}
    
    

