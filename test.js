const Plan = require('./plan.js');
const Invoice = require('./invoice.js');

let amount = Invoice.getAmount(Plan.LOW_VOLUME, 10);
console.log(amount);
