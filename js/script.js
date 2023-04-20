console.log('Script File connected');

function getCalculatedExpenses (){
    const expenses = document.getElementById('total-expense');
    const remBalance = document.getElementById('balance');

    const income = document.getElementById('income-input');
    const incomeValue = parseInt(income.value);
    const food = document.getElementById('food-input');
    const foodValue = parseInt(food.value);
    const rent = document.getElementById('rent-input');
    const rentValue = parseInt(rent.value);
    const clothes = document.getElementById('clothes-input');
    const clothesValue = parseInt(clothes.value);

    // console.log(incomeValue,foodValue,rentValue,clothesValue);
    const totalExpenses = foodValue+rentValue+clothesValue;
    const balance = incomeValue - totalExpenses;
    // console.log(totalExpenses,balance);

    // console.log(expenses.innerText)

    expenses.innerText = totalExpenses;
    remBalance.innerText = balance;

    return {incomeValue,balance};
}

document.getElementById('calculate-btn').addEventListener('click',function(){
    getCalculatedExpenses();
})

function getSaving() {
    const a = getCalculatedExpenses();
    // const {x,y} = a;
    const x = a.incomeValue;
    const y =a.balance;

    console.log(x,y);


    const b =document.getElementById('save');
    const d = document.getElementById('saving-amount');
    const e = document.getElementById('remaining-balance');

    const bValue = parseInt(b.value);
    const c = bValue/100;
    const saving = c*x;
    const remBalance = y-saving;
    d.innerText = saving;
    e.innerText = remBalance;






}

document.getElementById('save-btn').addEventListener('click',function(){
    getSaving()
})

