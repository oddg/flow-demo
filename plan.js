// @flow

/*::
export opaque type PlanT = string;
*/

const HIGH_VOLUME /*: PlanT */ = 'high_volume';
const LOW_VOLUME /*: PlanT */ = 'low_volume';

// cost per visit
const PRICES = {
  high_volume: 0.15,
  low_volume: 0.3
};

function getPrice(p /*: PlanT */)/*: number */ {
  return PRICES[p]
}

module.exports = {
  HIGH_VOLUME,
  LOW_VOLUME,
  getPrice
}
