const HIGH_VOLUME = 'high_volume';
const LOW_VOLUME = 'low_volume';

// cost per visit
const PRICES = {
  high_volume: 0.15,
  low_volume: 0.3
};

function getPrice(p) {
  return PRICES[p]
}

module.exports = {
  HIGH_VOLUME,
  LOW_VOLUME,
  getPrice
}
