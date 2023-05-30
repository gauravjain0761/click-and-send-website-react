const utill = new Object();

utill.valueFix_scientific = function (x) {
  if (x > 0) {
    if (Math.abs(x) < 1.0) {
      var e = parseInt(x.toString().split("e-")[1]);
      if (e) {
        x *= Math.pow(10, e - 1);
        x = "0." + new Array(e).join("0") + x.toString().substring(2);
      }
    } else {
      var e = parseInt(x.toString().split("+")[1]);
      if (e > 20) {
        e -= 20;
        x /= Math.pow(10, e);
        x += new Array(e + 1).join("0");
      }
    }
    return x;
  } else {
    var x = x;
  }
  return x;
};

/**
 *  to set decimal number without round number
 */

utill.beautifyNumber = (num, decimal = 4) => {
  num = num && num != Infinity ? num : 0;
  let fixedNum = utill.valueFix_scientific(num);
  var re = new RegExp("^-?\\d+(?:.\\d{0," + (decimal || -1) + "})?");
  let final = fixedNum.toString().match(re)[0];
  final = parseFloat(final) === 0 ? "0.00" : final;
  return final;
};
/**
 *  to fix/Precision decimal number formatting
 */

utill.valueFix = (num) => {
  if (parseFloat(num) < 1) {
    return utill.valueFix_scientific(num.toPrecision(4));
  } else {
    return utill.beautifyNumber(num, 4);
  }
};

export default utill;
