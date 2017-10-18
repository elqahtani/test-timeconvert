function TimeConvert(num) { 
  var jam = '';
  var menit = ''; 
  if (num % 60 === 0) {
    jam = num/60;
    menit = 0;
  } else {
    menit = num % 60;
    jam = (num - menit) / 60;
  } 
    return jam + ':' + menit;         
}


module.exports = TimeConvert