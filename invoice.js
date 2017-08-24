// @flow
const Plan = require('./plan.js');

function getAmount(nbVisits /*: number*/ , plan /*: PlanT*/)/*: number */ {
  let perVisitCost = Plan.getPrice(plan);
  return nbVisits * perVisitCost;
}

module.exports = {
  getAmount
}
