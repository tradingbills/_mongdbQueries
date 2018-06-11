db.getCollection('companies').aggregate([{
        $match: {
          "funding_rounds.investments.financial_org.permalink": "greylock"
        }
      }, {
        $unwind: "$funding_rounds"
      }, {
        $unwind: "$funding_rounds.investments"
      },
      {
        $match: {
          "funding_rounds.investments.financial_org.permalink": "greylock"
        }
      },
      {
        $project: {
          _id: 0,
          name: 1,
          fundingOrganization: "$funding_rounds.investments.financial_org.permalink",
          amount: "$funding_rounds.raised_amount", 
          year: "$funding_rounds.funded_year" 
        } }
])