const UserName = document.getElementById('UserName')
const Password = document.getElementById('Password')
const Email = document.getElementById('Email')
const Mobile_Num = document.getElementById('Mobile_Num')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
var request = new XMLHttpRequest();

form.addEventListener('submit',(e)=>{
    let messages = []
    if(UserName.value ==='' || UserName.value==null){
    messages.push('Username is required')
    }
    console.log(messages);
   if(messages.length>o){
   e.preventDefault()
   errorElement.innerText= messages.join(' , ')
   }
});

request.open('GET', 'http://localhost:8001/products', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
   console.log(data)
  } else {
    console.log('error')
  }
}

request.send()