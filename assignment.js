//Problem 1 Ana to Vori
//Defining function
function anaToVori (ana)
{
    //checking for invalid input
    if (ana < 0){
        return console.log("R a mea goyna vikkha kore ansen ni?");
    }
    //ana to vori conversion and return
    return vori = ana / 16;
}

// console.log(anaToVori(32));

//Problem 2 Total cost
//Defining the funciton
function pandaCost(shingara, shomucha, jilapi)
{
    //Cost of each element
    let costOfShingara = 7, costOfShomucha = 10, costOfJilapi = 15;
    //Calculationg total cost
    let totalCost = (costOfShingara * shingara) + (costOfShomucha * shomucha) + (costOfJilapi * jilapi);

    return totalCost;
}

// console.log(pandaCost(5, 2, 3));

//Problem 3 Picnic Budget Calculation
//Defining funciton
function picnicBudget(numberOfPeople)
{
    //Case for first 100 people
    if (numberOfPeople > 0 && numberOfPeople <= 100){
        //Calculating the budget for 100 people
        let budget = 5000 * numberOfPeople;
        return budget;
    }
    //Case for 2nd 100 people
    else if (numberOfPeople > 100 && numberOfPeople <= 200){
        //Calculating the budget for 2nd 100 people
        let budget = 500000 + 4000 * (numberOfPeople - 100);
        return budget;
    }
    //Case for more than 200 people
    else if (numberOfPeople > 200){
        //Calcualtiong for more than 200 people
        let budget = 500000 + 400000 + 3000 * (numberOfPeople - 200);
        return budget;
    }

    //Input validation command
    return console.log("Hey mea moshkora koren? Valid number input den.");
}

// console.log(picnicBudget(1414));

//Problem 4 Friend name with odd number of character
const names = ["Abul", "Babuli", "Kabuli", "Kuddus", "Kalam"];

//Defining Funciton
function oddFriend(names)
{
    //Looping through the names
    for (let i = 0; i < names.length; i++) {
        const name = names[i];

        //Finding the first odd character name in the friend names
        if (name.length % 2 == 1){
            return name;
        }
    }
    return "You have no friend with odd number of characters in their names.";
}
console.log(oddFriend(names))