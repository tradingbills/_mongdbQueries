db.companies.aggregate([{
  $match: {
    "funding_rounds.investments.financial_org.permalink": "greylock"
  }
}, {
  $project: {
    _id: 0,
    name: 1,
    founded_year: 1,
    rounds: {
      $filter: {
        input: "$funding_rounds",
        as: "round",
        cond: {
          $gte: ["$$round.raised_amount", 100000001]
        }
      }
    }
  }
}, {
  $match: {
    "rounds.investments.financial_org.permalink": "greylock"
  }
}]).pretty()