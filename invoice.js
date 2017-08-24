// @flow
const Plan = require('./plan.js');
const Addon = require('./addon.js');

/*::
import type {PlanT} from './plan.js';
*/

function getAmount(nbVisits /*: number*/ , plan /*: PlanT*/, addon /*: AddonT */)/*: number */ {
  let perVisitCost = Plan.getPrice(plan);
  let addonCost = Addon.getPrice(plan);
  return nbVisits * perVisitCost + addonCost;
}

module.exports = {
  getAmount
}
