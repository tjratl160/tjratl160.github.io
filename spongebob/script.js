document.getElementById("btn").onclick=change;

function change() {
	var exceptions=",?./ ;:'></[]{}@!@#$%^&*()_+=-1234567890*";
  var input = document.getElementById('myTextField').value;
  input=input.toLowerCase();
  var flag = true;
  for (var i = 0, len = input.length; i < len; i++) {
    if (exceptions.indexOf(input.charAt(i)) < 0) {
      if (flag) {
        var temp = input.charAt(i).toUpperCase();
        input = input.substr(0, i) + temp + input.substr(i + 1, len);
        flag = false;
      } else {
        flag = true;
      }
    }
  }
  document.getElementById('output').value = input;
}
