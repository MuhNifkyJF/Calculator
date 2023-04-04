
// SOURCE CODE CALCULATOR SCREEN

const calculatorScreen = document.querySelector(".calculator-screen")

// fungsi default screen menjadi 0
const updateScreen = (number)=>{
    calculatorScreen.value = number
}

// Definisikan Variable untuk melakukan kalkulasi
let prevNumber = " "
let calculationOperator = " "
let currentNumber = " "

// membuat function inputNumber yang menangkap angka dalam inputan keypad
const inputNumber = (number) =>{
    if(currentNumber === "0"){
        currentNumber = number
    }else{
        currentNumber += number
    }
    }

// SOURCE CODE NUMBER PADA CALCULATOR
const numbers = document.querySelectorAll(".number")

// menambahkan event click pada tiap button angka
numbers.forEach((number)=>{
    number.addEventListener("click", (event) => {
        // inputNumber yang menangkap angka dalam inputan keypad
        inputNumber(event.target.value)
        updateScreen(currentNumber)

    })
    })

// SOURCE CODE OPERATOR PADA CALCULATOR
const operators = document.querySelectorAll(".operator")

// menambahkan event click pada tiap button operator
    operators.forEach((operator) =>{
        operator.addEventListener("click", (event)=>{
            inputOperator(event.target.value)
            // updateScreen(calculationOperator)
        })
    })

//  fungsi input operators   
const inputOperator = (operator) =>{
    if(calculationOperator === " "){
        prevNumber = currentNumber
    }
    
    calculationOperator = operator
    currentNumber = "0"
}

// SOURCE CODE EQUAL PADA CALCULATOR
const  equalSign = document.querySelector(".equal-sign")

// event click pada button equal yang menjalan fungsi percentage dan calculate
equalSign.addEventListener("click", ()=>{
    precentage()
    calculate()
    updateScreen(currentNumber)
})

// fungsi calculate yang menghitung berdasarkan operator aritmatika
const calculate = () =>{
    let result = " "
    switch(calculationOperator){
        case "+" :
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-" :
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*" :
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/" :
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return
    }

    currentNumber = result
    calculationOperator = " "
}

// SOURCE CODE BUTTON AC

const clearBtn = document.querySelector(".all-clear")
// Menambah event Click ke elemen
clearBtn.addEventListener("click", () =>{
    clearAll()
    updateScreen(currentNumber)
    
})
// membuat fungsi clear pada button AC
const clearAll = () =>{
    prevNumber = " "
    calculationOperator = " "
    currentNumber = "0"
}

// SOURCE CODE BUTTON DESIMAL

const decimal = document.querySelector(".decimal")
// Menambah event Click ke elemen
decimal.addEventListener("click", (event)=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

// membuat fungsi input pada button decimal
inputDecimal = (dot) =>{
    if(currentNumber.includes(".")){
        return
    }
    currentNumber += dot
}

// MENGHITUNG PERSENTASE
// mengambil persen dari constant percentage
const percentage = document.querySelector(".percentage")

// Menambah event Click ke elemen
percentage.addEventListener("click",(event) =>{
    inputPercentage(event.target.value)
    // updateScreen(calculationOperator)

})

// membuat fungsi input pada button persen
const inputPercentage = (operator) =>{
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = "0"
}

// membuat fungsi hitung persen
const precentage = () =>{
    let result = " "
    switch(calculationOperator){
        case "%" :
            result = parseFloat(prevNumber) / 100
            break
        default:
            return
    }

    currentNumber = result
    calculationOperator = " "
}