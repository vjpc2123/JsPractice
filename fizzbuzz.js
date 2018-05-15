var m3 = 3;
var m5 = 5;
var r;
var r2;
for (var i = 1; i <= 100; i++) {
  r = i%m3;
  r2 = i%m5;
  var visible = false;
  if (r == 0) {
      document.write("fizz");
      visible = true;
  }
  if (r2 == 0) {
    document.write("buzz");
    visible = true;
  }
  if (visible == false) {

      document.write(i+" ");
  }

  document.write("<br/>");
}
