const url = 'Access-Control-Allow-Origin: https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all';
fetch(url, {
  method: 'get' 
})
.then(function(response) {
  
})
.catch(function(err) { 
  console.error(err);
});


