const db = require('../config/db.config');
const Corona = db.Corona;

exports.retrieveAllData = (req, res) => {
    Corona.findAll()
        .then(coronaInfos => {
            res.status(200).json({
                message: "Get all Corona Info Successfully!",
                corona: coronaInfos
            });
        })
        . catch(error => {
          // log on console
          console.log(error);

          res.status(500).json({
              message: "Error!",
              error: error
          });
        });
}

exports.pagination = (req, res) => {
    try{
      let page = parseInt(req.query.page);
      let limit = parseInt(req.query.limit);
    
      const offset = page ? page * limit : 0;
    
      Corona.findAndCountAll({ limit: limit, offset:offset })
        .then(data => {
          const totalPages = Math.ceil(data.count / limit);
          const response = {
            message: "Paginating is completed! Query parameters: page = " + page + ", limit = " + limit,
            data: {
                "totalItems": data.count,
                "totalPages": totalPages,
                "limit": limit,
                "currentPageNumber": page + 1,
                "currentPageSize": data.rows.length,
                "customers": data.rows
            }
          };
          res.send(response);
        });  
    }catch(error) {
      res.status(500).send({
        message: "Error -> Can NOT complete a paging request!",
        error: error.message,
      });
    }    
  }