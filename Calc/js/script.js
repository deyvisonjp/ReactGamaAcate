const previousOperationsText = document.querySelector('#previous-operation')
const currentOperationsText = document.querySelector('#current-operation')
const buttons = document.querySelectorAll('#buttons-container button')

class Calculator {
  constructor(previousOperationsText, currentOperationsText) {
    this.previousOperationsText = previousOperationsText
    this.currentOperationsText = currentOperationsText
    this.currentOperation = ''
  }

  // Adiciona digito ao visor
  addDigit(digit) {
    // Tratativa para apenas um ponto
    if (digit === '.' && this.currentOperationsText.innerText.includes('.')) {
      return
    }
    this.currentOperation = digit
    this.updateScreen()
  }

  //Operations
  processOperation(operation) {
    if (this.currentOperationsText.innerText === '') {
      if (this.previousOperationsText.innerText !== '' && operation !== 'C') {
        this.changeOperations(operation)
      }
      return
    }

    let operationValue
    const previous = +this.previousOperationsText.innerText.split(' ')[0]
    const current = +this.currentOperationsText.innerText

    // Operações básicas da calculadora
    switch (operation) {
      case '+':
        operationValue = previous + current
        this.updateScreen(operationValue, operation, current, previous)
        break
      case '-':
        operationValue = previous - current
        this.updateScreen(operationValue, operation, current, previous)
        break
      case '/':
        operationValue = previous / current
        this.updateScreen(operationValue, operation, current, previous)
        break
      case '*':
        operationValue = previous * current
        this.updateScreen(operationValue, operation, current, previous)
        break
      case 'C':
        this.processClearOperation()
        break
      case 'CE':
        this.processClearCurrentOperation()
        break
      case 'DEL':
        this.processDeleteOperator()
        break
      case '=':
        this.processEqualOperator()
        break
      default:
        return
    }
  }

  updateScreen(
    operationValue = null,
    operation = null,
    current = null,
    previous = null,
  ) {
    if (operationValue == null) {
      this.currentOperationsText.innerText += this.currentOperation
    } else {
      if (previous === 0) {
        operationValue = current
      }

      // View das operações
      this.previousOperationsText.innerText = `${operationValue} ${operation}`
      this.currentOperationsText.innerText = ''
    }
  }

  changeOperations(operation) {
    const mathOperations = ['+', '-', '*', '/']
    if (!mathOperations.includes(operation)) {
      return
    }
    this.previousOperationsText.innerText =
      this.previousOperationsText.innerText.slice(0, -1) + operation
  }

  processDeleteOperator() {
    this.currentOperationsText.innerText = 
      this.currentOperationsText.innerText.slice(0, -1);
  }

  processClearCurrentOperation(){
    this.currentOperationsText.innerText = '';
  }

  processClearOperation(){
    this.currentOperationsText.innerText = '';
    this.previousOperationsText.innerText = '';
  }

  processEqualOperator(){
    const operation = previousOperationsText.innerText.split(' ')[1]
    this.processOperation(operation)
  }
}

const calculator = new Calculator(previousOperationsText, currentOperationsText)

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const value = e.target.innerText
    //console.log(value)
    if (+value >= 0 || value === '.') {
      calculator.addDigit(value)
    } else {
      calculator.processOperation(value)
    }
  })
})
