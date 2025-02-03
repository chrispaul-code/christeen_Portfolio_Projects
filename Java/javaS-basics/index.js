class Calculator{
    constructor(previousOperandTextElement, CurrentOperandTextElement ){
        this.previousOperandTextElement = previousOperandTextElement
        this.CurrentOperandTextElement = CurrentOperandTextElement
        this.clear()
    }
    
    clear(){
        this.CurrentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete(){

    }

    appendNumber(number){

    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){

    }
}



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector("[data-equals]")
const deleteButton = document.querySelector("[data-delete]")
const allClearButton = document.querySelector("[data-all-clear]")
const previousOperandTextElement = document.querySelector("[data-previous-operand]")
const CurrentOperandTextElement= document.querySelector("[data-current-operand]") 