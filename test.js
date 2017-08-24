const Plan = require('./plan.js');
const Invoice = require('./invoice.js');

let amount = Invoice.getAmount(10, Plan.LOW_VOLUME);
console.log(amount);
