 /*jshint esversion: 6*/
  function circular(source, find){
    let circleStr = source + source;

    if(circleStr.indexOf(find) > -1){
      return true;
    } else {
      return false;
    }
  }



module.exports = circular;