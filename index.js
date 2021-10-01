var inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
var wrong = 0;
console.log("***********************************************");
console.log("***************** 尺丨ᗪᗪㄥ乇丂 ****************");
console.log("***********************************************");
console.log("\n");
console.log("You woke up in an empty and dark place wondering where are you.");
console.log("A man comes to you and says: " + "\n");
console.log("Man: If you want to leave this place you will have to solve ALL the riddles, Now go ahead and remeber my word ALL");
inquirer.prompt([{
    type: "confirm",
    message: "Go ahead?",
    name: "go_ahead"
}]).then((answers) => {
    if (!answers.go_ahead) {
        gameOver();
    } else {
        console.log("\n" + "You see a another man standing in front of a gate.");
        console.log("Man: To pass through this gate answer my two riddles.");
        inquirer.prompt([
            {
                type: "list",
                name: "q1",
                message: "What flies when it's born, lies when it's alive, and runs when it's dead?",
                choices: ["A grain of sand", "An eaglet", "A snowflake", "A fruit fly"]
            },
            {
                type: "list",
                name: "q2",
                message: "I start with M, end with X, and have a never ending amount of letters. What am I?",
                choices: ["Mix", "Mailbox", "Multiplex", "Matrix"],
            }

        ]).then((answers2) => {
            if (answers2.q1 != "A snowflake") {
                wrong++;
                console.log("Your first answer was wrong.");
            }
            if (answers2.q2 != "Mailbox") {
                wrong++;
                console.log("Your second answer was wrong.");
            }
            if (wrong > 1) {
                gameOver();
            } else {
                console.log("\n" + "Man: Looks like you have some brain, now you can pass through this gate.");
                console.log("Now you see yet another man standing in front of another gate.");
                console.log("Man: To go through this gate answer my three riddles.");
                inquirer.prompt([
                    {
                        type: "list",
                        name: "q3",
                        message: "They fly at night, you'd better run. These winged things are not much fun.",
                        choices: ["Birds", "Bats", "Eagles", "Witches"]
                        //Bats
                    },
                    {
                        type: "list",
                        name: "q4",
                        message: "They grow much faster than bamboo. Take care or they'll come after you.",
                        choices: ["Palm", "Plants", "Tree", "Ants"]
                        //Plants
                    },
                    {
                        type: "list",
                        name: "q5",
                        message: "His fangs are sharp, he likes your taste.",
                        choices: ["Bat", "Vampire", "Mosquito", "Lion"]
                        //Lion
                    }
                ]).then((answers3) => {
                    if (answers3.q3 != "Bats") {
                        wrong++;
                        console.log("Your first answer was wrong.");
                    }
                    if (answers3.q4 != "Plants") {
                        wrong++;
                        console.log("Your second answer was wrong.");
                    }
                    if (answers3.q5 != "Lion") {
                        wrong++;
                        console.log("Your third answer was wrong.");
                    }
                    if (wrong > 1) {
                        gameOver();
                    } else {
                        console.log("\n" + "Man: This was actually easy, anyone could have answered these, go ahead");
                        console.log("Now you see yet another man standing in front of another gate.");
                        console.log("Man: To go through this gate answer my five riddles.");
                        console.log("Info: Enter one word answer in singular form");
                        inquirer.prompt([
                            {
                                type: "input",
                                name: "q6",
                                message: "At night, they come without being fetched. By day they are lost without being stolen. What are they?",
                                //star
                            },
                            {
                                type: "input",
                                name: "q7",
                                message: "Walk on the living. They don’t even mumble. Walk on the dead. They mutter and grumble. What are they?",
                                //leaf
                            },
                            {
                                type: "input",
                                name: "q8",
                                message: "You heard me before, yet you hear me again. Then I die, ’till you call me again.",
                                //echo
                            },
                            {
                                type: "input",
                                name: "q9",
                                message: "If you drop me I’m sure to crack, but give me a smile and I’ll always smile back. What am I?",
                                //mirror
                            },
                            {
                                type: "input",
                                name: "q10",
                                message: "I am always hungry and will die if not fed, but whatever I touch will soon turn red. What am I?",
                                //fire
                            },
                        ]).then((answers4) => {
                            if (answers4.q6 != "star") {
                                wrong++;
                                console.log("Your first answer was wrong.");
                            }
                            if (answers4.q7 != "leaf") {
                                wrong++;
                                console.log("Your second answer was wrong.");
                            }
                            if (answers4.q8 != "echo") {
                                wrong++;
                                console.log("Your third answer was wrong.");
                            }
                            if (answers4.q9 != "mirror") {
                                wrong++;
                                console.log("Your fourth answer was wrong.");
                            }
                            if (answers4.q10 != "fire") {
                                wrong++;
                                console.log("Your fifth answer was wrong.");
                            }
                            if (wrong > 1) {
                                gameOver();
                            } else {
                                console.log("\n");
                                if(wrong == 0){
                                    console.log("Man: You have cleared all our riddles, you sure are a smart person.");
                                    console.log("You walk through the final gate and wake up in your bed.");
                                }else{
                                    console.log("Man: You have cleared our riddles.");
                                    console.log("You walk through the final gate and then you get lost in a never ending darkness until you die of old age☠.");
                                }
                                console.log("You have completed the game, congrats!!  ヽ(^o^)ノ");
                            }
                        })
                    }
                })
            }
        })
    }
})



function gameOver() {
    console.log("\n" + "A trap door opened below you and you fell to death!!");
    console.log("☠☠☠☠☠☠Game Over☠☠☠☠☠☠");
    process.exit(0);
}