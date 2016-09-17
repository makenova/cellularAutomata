const active = 'active'
const inactive = 'inactive'

function random () {
  return Math.floor(Math.random() * 2);
}

for (let i = 0; i < 261; i++) {
  let div = document.createElement('div');
  document
    .querySelector('.row')
    .appendChild(div);
}

function randomizeRow(rowDiv) {
  for( let i = 0; i < rowDiv.childNodes.length; i++){
    let div = rowDiv.childNodes[i]
    div.className = random() ? active : inactive
  }
}

randomizeRow(document.querySelector('.row'))

function isActive(node) {
  return node && node.className === active;
}

function setCellState(node, state) {
  node.className = state
}

function firstRule({pastSelf, leftPastSibling, rightPastSibling}) {
  return isActive(leftPastSibling)
    && isActive(pastSelf)
    && isActive(rightPastSibling)
}

function secondRule({pastSelf, leftPastSibling, rightPastSibling}) {
  return isActive(leftPastSibling)
    && isActive(pastSelf)
    && !isActive(rightPastSibling)
}

function thirdRule({pastSelf, leftPastSibling, rightPastSibling}) {
  return isActive(leftPastSibling)
    && !isActive(pastSelf)
    && isActive(rightPastSibling)
}

function fourthRule({pastSelf, leftPastSibling, rightPastSibling}) {
  return isActive(leftPastSibling)
    && !isActive(pastSelf)
    && !isActive(rightPastSibling)
}

function fifthRule({pastSelf, leftPastSibling, rightPastSibling}) {
  return !isActive(leftPastSibling)
    && isActive(pastSelf)
    && isActive(rightPastSibling)
}

function sixthRule({pastSelf, leftPastSibling, rightPastSibling}) {
  return !isActive(leftPastSibling)
    && isActive(pastSelf)
    && !isActive(rightPastSibling)
}

function seventhRule({pastSelf, leftPastSibling, rightPastSibling}) {
  return !isActive(leftPastSibling)
    && !isActive(pastSelf)
    && isActive(rightPastSibling)
}

function eighthRule({pastSelf, leftPastSibling, rightPastSibling}) {
  return !isActive(leftPastSibling)
    && !isActive(pastSelf)
    && !isActive(rightPastSibling)
}

function processRow(rowDiv, parentRowDiv, index) {
  for (let i = 0; i < rowDiv.childNodes.length; i++) {
    
    let target = rowDiv.childNodes[i]
    
    let pastSelf = parentRowDiv.childNodes[i]
    
    let leftPastSibling = pastSelf.previousSibling ||
      parentRowDiv.childNodes[
        parentRowDiv.childNodes.length - 1]
    
    let rightPastSibling = pastSelf.nextSibling ||
      parentRowDiv.childNodes[0]

    let previousState = {pastSelf, leftPastSibling, rightPastSibling}

    if(firstRule(previousState))
      setCellState(target, inactive)
    else if(secondRule(previousState))
      setCellState(target, active)
    else if(thirdRule(previousState))
      setCellState(target, inactive)
    else if(fourthRule(previousState))
      setCellState(target, inactive)
    else if(fifthRule(previousState))
      setCellState(target, active)
    else if(sixthRule(previousState))
      setCellState(target, inactive)
    else if(seventhRule(previousState))
      setCellState(target, inactive)
    else if(eighthRule(previousState))
      setCellState(target, active)
  }
}

function duplicateRow() {
  let allRows = document.querySelectorAll('.row')
  let lastRow = allRows[allRows.length - 1]
  let clone = lastRow.cloneNode(true)
  
  processRow(clone, lastRow, allRows.length)
  
  document
    .querySelector('body')
    .appendChild(clone)

}

setInterval(duplicateRow, 500)
// for (let i = 0; i < 50; i++) duplicateRow()
