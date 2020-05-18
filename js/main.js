//window.onload = call();

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
    "{'service':'cryptopriceservice', 'start':'1','limit':'10','convert':'EUR'}"
  );

  xhr.onload = function () {
    var output = '';
    if (this.status == 200 && typeof data !== 'undefined') {
      for (var i = 0; i < data.data.length; i++) {
        output +=
          '<li class="list-group-item">' +
          '<ul class="list-inline">' +
          '<li><img src="img/' +
          data.data[i].symbol +
          '.png" /></li>' +
          '<li id="coin-name">' +
          data.data[i].name +
          '</li>' +
          '<li id="coin-symbol">' +
          data.data[i].symbol +
          '</li>' +
          '<li id="coin-price">' +
          data.data[i].price +
          '€' +
          '</li>' +
          '<li id="coin-percent-change">' +
          data.data[i].percent_change +
          '</li>' +
          '</ul>' +
          '</div>';
      }
      console.log(data.data[0]);
    } else {
      output +=
        '<p>Error retrieving cryptocurrencies data: ' +
        this.responseText +
        '</p>';
      console.log(this.responseText);
    }
    document.getElementById('coins').innerHTML = output;
  };
}

function call2() {}
