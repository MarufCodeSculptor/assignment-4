

function calculateMoney(ticketSale) {

if (typeof ticketSale === 'number' && isNaN(ticketSale)!==true && ticketSale >= 0) {

const securityCost = 500;

const stufLunchCost = 50 * 8;

const perTicketPrice = 120;

const totalTicketSells = ticketSale;

let profit = perTicketPrice * totalTicketSells - (securityCost + stufLunchCost);

return profit;

}

else{

return `\x1b[31m "Invalid Number" please input correct number and try again `;

}

}



function checkName(props) {
    
    if (typeof props === 'string') {

let withoutWhiteSpaces = props.replace(/\s/g, "");

const nameIs = withoutWhiteSpaces;

const lastLetter = nameIs[nameIs.length - 1];

if (lastLetter==='a' || lastLetter==='e' || lastLetter==='i' || lastLetter==='o' || lastLetter==='u' || lastLetter==='y' || lastLetter==='w') {

return '\x1b[32m Good name'

}

else if (lastLetter === 'A' || lastLetter === 'E' || lastLetter === 'I' || lastLetter === 'O' || lastLetter === 'U' || lastLetter === 'Y' || lastLetter === 'W') {

return '\x1b[32m Good Name'

}

else {

return "\x1b[33m Bad name"

}

}

else {

return "\x1b[31m Invalid";

}

}



function deleteInvalids(props) {

if (Array.isArray(props)) {

let numbers = [];

for (let i = 0; i < props.length; i++) {

if (typeof props[i] === 'number' && !isNaN(props[i])) {

numbers.push(props[i]);

}

}

return numbers;

}

else {

return ' \x1b[31m Invalid Array ! use correct data for reslult'

}

}




function password(props) {

if ( typeof props === 'object') {

if (!Array.isArray(props)) {

if (Object.keys(props).length >= 0) {

if (props['birthYear'].toString().length !== 4) {

return '\x1b[31m Invalid Birthdate';

}

else if (Object.keys(props).length !== 3) {

return '\x1b[31m Invalid Properties'

}

else {

let reslultData = `${props['siteName']}#${props['name']}@${props['birthYear']}`;

reslultData = reslultData.charAt(0).toUpperCase() + reslultData.slice(1);

return reslultData;

}

}

else {

return "\x1b[31m Invalid Data"

}

}

}

else {

return "\x1b[31m invalid data"

}

}

console.log(password(         



    { name: 'rahat' , birthYear: 2002, siteName: "facebook" }



         ));

function monthlySavings(payments, livingCost) {

if (!Array.isArray(payments)) {

return '\x1b[31m invalid input'

}

else if (typeof livingCost !== 'number'){

return '\x1b[31m invalid input'

}

else {

let paymentTotal = 0;

let updatePayments = [];

for (let payment of payments) {

if (typeof payment === "number") {

if (payment >= 3000) {

const rateCutter = 20 / 100;

payment =payment-(payment * rateCutter);

updatePayments.push(payment)

}

else {

updatePayments.push(payment)

}

}

else {

continue

}

}

for (const uPayment of updatePayments) {

paymentTotal += uPayment;

}

const savings = paymentTotal - livingCost;

if (savings < 0) {

return '\x1b[34m earn more'

}

else if (savings >= 0) {

return savings;

}

}

}


console.log(monthlySavings(                   [ 1000 , 2000 , 2500 ] , 5000           ));