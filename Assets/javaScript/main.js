
let dogContainer = document.querySelector('.fatos-cachorro'); 
let galleryImg = document.querySelector('slider-container');

let form = document.forms['form']; 
form.addEventListener('submit', function(e){

  getFatos(e); 
})

function getFatos(e){

  e.preventDefault(); 
  let num = form['number'].value; 
    
  let mainContainer = document.querySelector('aside');
  mainContainer.style.display = "block"; 
  
  let removeList = document.querySelectorAll('ol li');
  removeList.forEach(item => item.remove());


  let request = new XMLHttpRequest();

  request.open('GET', `https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all${num}`, true)
  

  request.onload = function() {
  let data = JSON.parse(this.response) ; 

  data.forEach(element => {
    
    let li = document.createElement('li');
    li.textContent = element.text; 
    dogContainer.appendChild(li);
    
    
  });
  

}
request.send()
}

