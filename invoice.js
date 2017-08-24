// @flow
const Plan = require('./plan.js');

function getAmount(nbVisits /*: number*/ , plan /*: string*/) {
  let perVisitCost = Plan.getPrice(plan);
  return nbVisits * perVisitCost;
}

module.exports = {
  getAmount
}
