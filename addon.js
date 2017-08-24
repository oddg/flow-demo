// @flow 

const CHEAP /* : AddonT */ = 'cheap';
const EXPENSIVE /* : AddonT */ = 'expensive';

// cost per addon
const PRICES = {
  cheap: 1,
  expensive: 5
};

function getPrice(ad /* : AddonT */) /*: number */ {
  return PRICES[ad]
}

module.exports = {
  getPrice,
  CHEAP,
  EXPENSIVE
}
