function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine){
  var i = 0
  if(katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`}
  else {
    for(i = 0; i<katzDeliLine.length; i++){
  var guest = katzDeliLine.shift()
  return `Currently serving ${guest}.`}
  }
}
