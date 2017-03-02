app.filter("Reversefilter",function(){

  return function(input){
    var out = "";
    input = input + "";

    for (var i = 0;i < input.length; i++) {
      out = input.charAt(i) + out;
    }

    return out;
  };
});
