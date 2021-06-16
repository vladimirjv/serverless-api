'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.hola = async (event) => {

  try {
      const bodyObject = JSON.parse(event.body)
      console.log(bodyObject);

      return {
          statusCode: 200,
          headers: {
              "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify({respuesta:'Si quedó Chido 😃 ' + bodyObject.nombre}),
      };
  } catch (error) {
      console.log("Error on diagnosis: ", error)
      return {
          statusCode: 500,
          headers: {
              "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify({
              error: 'No Funcionó'
          })
      };
  }
  
};