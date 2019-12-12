// The addition function.
      function add() {
      // Get the elements from the html document.
        var x = document.getElementById("num1").value;
        var y = document.getElementById("num2").value;
        // Sum them.
        var sum = +x + +y;
        // Create the parts of the result string.
        var p1 = x.toString();
        var p2 = " + "
        var p3 = y.toString();
        var p4 = " = "
        var p5 = sum.toString();
        // Write the result to the html file.
        document.getElementById("result").innerHTML =  p1 + p2 + p3 + p4 +p5 ;
        }