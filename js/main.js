function call() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      var data = xhr.responseText;
      alert(data);
    }
  };
  xhr.open('POST', 'http://localhost:8081/cryptonite/cryptoprices', true);
  xhr.send(
    "{'service':'cryptopriceservice', 'start':'1','limit':'3','convert':'EUR'}"
  );
}
