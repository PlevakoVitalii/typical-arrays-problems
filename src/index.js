
exports.min = function min (array) {
  if (array===undefined || array.length===0) return 0
  let minValue= Math.min(...array)
  return minValue
}

exports.max = function max (array) {
  if (array===undefined || array.length===0) return 0
  let maxValue= Math.max(...array)
  return maxValue
}

exports.avg = function avg (array) {
  if (array===undefined || array.length===0) return 0
  let sum= array.reduce((a,b)=>a+b,0)
  let avgValue=sum/array.length
  return avgValue
}