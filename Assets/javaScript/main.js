const URL_TO_FETCH = 'Access-Control-Allow-Origin: https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all';
fetch(URL_TO_FETCH, {
  method: 'get' 
})
.then(function(response) {
  
})
.catch(function(err) { 
  console.error(err);
});
