//Problem 1 Ana to Vori
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
function pandaCost(shingara, shomucha, jilapi)
{
    let costOfShingara = 7, costOfShomucha = 10, costOfJilapi = 15;
    let totalCost = (costOfShingara * shingara) + (costOfShomucha * shomucha) + (costOfJilapi * jilapi);

    return totalCost;
}

// console.log(pandaCost(5, 2, 3));

//Problem 3 Picnic Budget Calculation
function picnicBudget(numberOfPeople)
{
    if (numberOfPeople > 0 && numberOfPeople <= 100){
        let budget = 5000 * numberOfPeople;
        return budget;
    }
    else if (numberOfPeople > 100 && numberOfPeople <= 200){
        let budget = 500000 + 4000 * (numberOfPeople - 100);
        return budget;
    }
    else if (numberOfPeople > 200){
        let budget = 500000 + 400000 + 3000 * (numberOfPeople - 200);
        return budget;
    }

    //Input validation command
    return console.log("Hey mea moshkora koren? Valid number input den.");
}

// console.log(picnicBudget(1414));

//Problem 4 Friend name with odd number of character
const names = ["Abul", "Babul", "Kabul", "Kuddus"]

function oddFriend(names)
{
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        
    }

}
console.log(oddFriend);