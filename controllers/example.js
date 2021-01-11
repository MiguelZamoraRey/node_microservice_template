// const Example = require('../models/example');

function hello(req, res) {
  const helloExample = 'hello example!';
  return res.status(200).send({
    helloExample,
  });
  /*
  Call example

  const exampleId = req.params.id;
  Example.findById(exampleId, (err, example) => {
    if (err) {
      return res.status(500).send({
        message: 'Error in request',
      });
    }
    if (!example) {
      return res.status(404).send({
        message: 'Example not exist',
      });
    }
    return res.status(200).send({
      example,
    });
  }); */
}

module.exports = {
  hello,
};
