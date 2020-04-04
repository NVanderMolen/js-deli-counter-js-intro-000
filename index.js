function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(Line){
  var i = 0
  if(Line.length === 0){
    return `There is nobody waiting to be served!`}
  else {
    for(i = 0; i<Line.length; i++){
  var guest = Line.shift()
  return `Currently serving ${guest}.`}
  }
}

function currentLine(line){
  var i = 0
  if (line.length === 0){
    return `The line is currently empty.`
  } else {
    return `The line is currently: ${[i+1]}. ${line[i]}`
  }
}
