/*
AP-1 -- hasOne
Given a positive int n, return true if it contains a 1 digit.
*/

function hasOneVer1(n) {
  return String(n).split('').includes('1') ? true : false;
}

