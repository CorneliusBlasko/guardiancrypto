function call() {
  var data;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      data = JSON.parse(xhr.responseText);
    }
  };
  xhr.open('POST', 'http://localhost:8081/cryptonite/cryptoprices', true);
  xhr.send(
    "{'service':'cryptopriceservice', 'start':'1','limit':'4','convert':'EUR'}"
  );

  xhr.onload = function () {
    if (this.status == 200) {
      var output = '';

      for (var i in data) {
        output +=
          '<ul class="list-inline">' +
          '<li><img src="images/' +
          data[i].symbol +
          '.png" /></li>' +
          '<li id="coin-name">' +
          data[i].name +
          '</li>' +
          '<li id="coin-symbol">' +
          data[i].symbol +
          '</li>' +
          '<li id="coin-price">' +
          data[i].price +
          '</li>' +
          '<li id="coin-percent-change">' +
          data[i].percent_change +
          '</li>' +
          '</ul>';
      }
      console.log(data);
      document.getElementById('coins').innerHTML = output;
    }
  };
}
