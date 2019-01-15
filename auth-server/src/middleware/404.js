'use strict';

module.exports = (req,res,next) => {
  let error = { error: 'Resource Not Found' };

  res.statusCode = 404;//res.status(404).json.string    1155

  res.statusMessage = 'Not Found';

  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};