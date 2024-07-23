function getBotResponse(input) {
    input = input.toLowerCase();
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "mohit-trootech!" || input == "github") {
        return "https://github.com/mohit-trootech"
    } else if (input == 'heart clicked!') {
        return "Thank you :smily"
    }
    else {
        return "Try asking something else!";
    }
}