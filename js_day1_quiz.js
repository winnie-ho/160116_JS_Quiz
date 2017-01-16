// Section 1

// What types are these?

/* 1.1 */ 1;
number
/* 1.2 */ "cat";
string
/* 1.3 */ true;
boolean
/* 1.4 */ [];
array
/* 1.5 */ {};
hash
/* 1.6 */ 1.1;
number
/* 1.7 */ var myVariable;
undefined


// Section 2

// What is the truthiness/falsiness values of the following values?

/* 2.1 */ 1;
true
/* 2.2 */ "cat";
true
/* 2.3 */ true;
true
/* 2.4 */ NaN;
false
/* 2.5 */ [];
true
/* 2.6 */ {};
true
/* 2.7 */ undefined;
false
/* 2.8 */ "";
false
/* 2.9 */ 0;
false


// Section 3

// Using examples that are different from above...

// 3.1 Assign a variable that is a number
var number = 17;
// 3.2 Assign a variable that is a string
var string = "JaneTeganWinWin";
// 3.3 Assign a variable that is a boolean
var boolean = true;
// 3.4 Assign a variable that is an object
var object = {name1: "Jane", name2: "Winnie", name3: "Tegan"};

// Section 4

// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false
var myboolean = true;

if (myboolean === true){
  console.log("hello")
}else{
  console.log("bye")
};

// Section 5

var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable
var firstElement = animals[0];

// 5.2. Assign the last element to a variable
var lastElement = animals[animals.length - 1];

// 5.3. Assign the length of an array to a variable
var length = animals.length;

// 5.4. Add an item to the end of the array
animals.push("giraffe");

// 5.5. Add an item to the start of the array
animals.unshift("horse");

// 5.6. Assign the index of hedgehog to a variable
var hedgehogIndex = animals.indexOf("hedgehog");


// Section 6

// 6.1 Create an array of 5 vegetables
var vegetables = ["broccoli", "aubergine", "carrot", "courgette", "asparagus"];

// 6.2 Loop over the array and write to the console using a "while"
var i = 0;

while (i < vegetables.length){
  console.log(vegetables[i]);
}

// 6.3 Loop again using a "for" with a counter

for (var i = 0; i< vegetables.length; i++){
  console.log(vegetables[i]);
}

// 6.4 Loop again using a "for of"
for (veg of vegetables){
  console.log(veg);
}

// Section 7

var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];

// 7.1 Calculate the total cash in accounts
var total = 0;
for(var account of accounts){
  total += account.amount;
}
return total;

// 7.2 Find the amount of money in the account with the largest balance
var array = [];

for (var account of accounts){
  array.push(account.amount);
}

var maxAmount = Math.max.apply(Math, array);


// 7.3 Find the name of the account with the smallest balance
var minAmount = Math.min.apply(Math, array);
for (var account of accounts){
  if (account.amount === minAmount){
    return account.name;
  }
}

// 7.4 Calculate the average bank account value
var average = total / accounts.length;

// 7.5 Find the value of marcs bank account
var marcsAccount = accounts[2].amount;

// 7.6 Find the holder of the largest bank account
var maxAmount = Math.max.apply(Math, array);
for (var account of accounts){
  if (account.amount === maxAmount){
    return account.name;
  }
}


// 7.7 Calculate the total cash in business accounts
var bizTotal = 0;
for (var account of accounts){
  if (account.type ==="business"){
    bizTotal += account.amount;
  }
  return bizTotal;
}


// 7.8 Find the largest personal account owner
var personal = [];
for (var account of accounts){
  if (account.type ==="personal"){
    personal.push(account.amount);
  }
}
  var maxPersonalAmount = Math.max.apply(Math, personal);

  for (var account of accounts){
    if (account.amount === maxPersonalAmount){
      return account.name;
    }
  }


// Section 8

// Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method

var myPerson = {
  name: "Jane",
  height: 5.5,
  favouriteFood: "sushi"
};

function eat(person){
  console.log (myPerson.name, "is eating", myPerson.favouriteFood, "with chopsticks");
}

eat(myPerson);
