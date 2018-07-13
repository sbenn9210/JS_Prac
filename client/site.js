
let btnSave = document.getElementById("btnSave")

btnSave.addEventListener('click',function(){

  // http://localhost:3000/dishes

  fetch('http://localhost:3000/dishes',{
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify({
      name : 'Beef Steak',
      price : 12,
      course : 'Entrees'
    })
  }).then(function(response){
    return response.text()
  }).then(function(text){
    console.log(text)
  })

  /*
  fetch('/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Hubot',
    login: 'hubot',
  })
})
  */

})
