// @flow

const Plan = require('./plan.js');
const Invoice = require('./invoice.js');
const Addon = require('./addon.js');

let amount = Invoice.getAmount(10, Plan.LOW_VOLUME, Addon.CHEAP);
console.log(amount);
