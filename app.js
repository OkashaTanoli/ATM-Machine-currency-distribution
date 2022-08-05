// Not allowing user to choose 1 because if user choose 1 as desired note,
// few rupees cut off from amount during distribution. This is because,
// 1 rupees notes will not exceed the limit of 200 


let amount = Number(prompt('Enter Amount from RS: 100 to RS: 100000'));
let currentAmount = amount;
let fiveHun, hun, fifty, twenty, ten, five, one;

if (amount >= 100 && amount <= 100000) {
    let choice = Number(prompt("Enter Choice Note among 5,10,20,50,100,500"));
    if (choice === 5 || choice === 10 || choice === 20 || choice === 50 || choice === 100 || choice === 500) {

        if (currentAmount > choice) {
            let length_of_chosen_note = currentAmount / choice;
            if (length_of_chosen_note >= 200) {
                currentAmount = currentAmount - (choice * 200)
                choice === 5 ? five = 200 : choice === 10 ? ten = 200 : choice === 20 ? twenty = 200 : choice === 50 ? fifty = 200 : choice === 100 ? hun = 200 : choice === 500 ? fiveHun = 200 : false
            }
            else {
                let less = Math.floor(length_of_chosen_note)
                currentAmount = currentAmount - less * choice
                choice === 5 ? five = less : choice === 10 ? ten = less : choice === 20 ? twenty = less : choice === 50 ? fifty = less : choice === 100 ? hun = less : choice === 500 ? fiveHun = less : false
            }
        }

        if (currentAmount >= 500 && choice !== 500) {
            fiveHun = Math.floor(currentAmount / 500);
            currentAmount = currentAmount - fiveHun * 500
        }

        if (currentAmount >= 100 && choice !== 100) {
            hun = Math.floor(currentAmount / 100)
            currentAmount = currentAmount - hun * 100
        }
        if (currentAmount >= 50 && choice !== 50) {
            fifty = Math.floor(currentAmount / 50);
            currentAmount = currentAmount - fifty * 50;
        }

        if (currentAmount >= 20 && choice !== 20) {
            twenty = Math.floor(currentAmount / 20)
            currentAmount = currentAmount - twenty * 20
        }

        if (currentAmount >= 10 && choice !== 10) {
            ten = Math.floor(currentAmount / 10);
            currentAmount = currentAmount - ten * 10;
        }

        if (currentAmount >= 5 && choice !== 5) {
            five = Math.floor(currentAmount / 5)
            currentAmount = currentAmount - five * 5
        }

        if (currentAmount >= 1) {
            one = currentAmount;
        }

        console.log('Your Amount = ', amount)
        console.log("Currency note   :       Number")
        fiveHun !== undefined ? console.log(`500             :        ${fiveHun}`) : false
        hun !== undefined ? console.log(`100             :        ${hun}`) : false
        fifty !== undefined ? console.log(`50              :        ${fifty}`) : false
        twenty !== undefined ? console.log(`20              :        ${twenty}`) : false
        ten !== undefined ? console.log(`10              :        ${ten}`) : false
        five !== undefined ? console.log(`5               :        ${five}`) : false
        one !== undefined ? console.log(`1               :        ${one}`) : false



    }
    else {
        alert(" Warning !!! Enter Correct Choice")
    }
}
else {
    alert(' Warning !!! Enter amount less than RS: 100000 and greater than RS: 100')
}