var xhr = new XMLHttpRequest();
var url = 'http://api.forismatic.com/api/1.0/method=getQuote&format=jsonp&key=&lang=en';
function retrieveQuote() {
  xhr.open('GET', url, true);
  xhr.onreadystatechange = handler;
  xhr.send();
}

function handler(xhr) {
  if(xhr.readyState == 4 && xhr.status == 200) {
    alert('Hello');
  }
}
