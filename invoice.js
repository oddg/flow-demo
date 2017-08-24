// @flow

function getAmount(nbVisits /*: number*/ , plan /*: string*/) {
  return nbVisits * plan;
}

module.exports = {
  getAmount
}
