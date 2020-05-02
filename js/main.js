function call(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4) {
            var data = xhr.responseText;
            alert(data);
        }
    }
    xhr.open('POST', 'http://localhost:8081/cryptonite_war/cryptoprices', true);
    xhr.send("{'start':'1','limit':'1','convert':'EUR'}");
}