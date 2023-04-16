
const display = document.querySelector(".display")
const calcbody = document.querySelector(".calc")
const checkboxx = document.querySelector("#cbx-3")
const button = document.querySelectorAll("button")
const equal = document.querySelector("#equal")


clicked = (x) => {
    if (display.value.startsWith("0.")) {
        display.value += x
    }
    else if (display.value.startsWith("0")) {
        let val = String(display.value).split("")
        val.shift()
        let result = val.toString().replaceAll(',', "")
        display.value = result + x
    }
    else {
        display.value += x
    }
}

clean = () => { display.value = "" }


off = () => {
    if (display.style.backgroundColor = "#ddd") {
        display.style.backgroundColor = "black"
    }

    display.style.color = "black"
    calcbody.classList.remove("firstDesignCalc")
    calcbody.classList.remove("secondDesignCalc")
    checkboxx.checked = false

    button.forEach((item) => {
        item.classList.add("calcBtn")
        item.classList.remove("firstDesignBtn", "secondDesignBtn")
    })
    equal.classList.remove("firstEqual")
}


on = () => {
    if (display.style.backgroundColor = "#666") {
        display.style.backgroundColor = "#ddd"
    }
    display.value = ""
    calcbody.classList.add("firstDesignCalc")
    equal.classList.add("firstEqual")
    button.forEach((item) => {
        item.classList.remove("calcBtn")
        item.classList.add("secondDesignBtn")
    })
}


switchh = () => {
    if (checkboxx.checked) {
        calcbody.classList.add("secondDesignCalc")
        calcbody.classList.remove("firstDesignCalc")
        button.forEach(item => {
            item.classList.add("firstDesignBtn")
            item.classList.remove("secondDesignBtn")
        })
    }
    else {
        calcbody.classList.remove("secondDesignCalc")
        calcbody.classList.add("firstDesignCalc")
        button.forEach(item => {
            item.classList.remove("firstDesignBtn")
            item.classList.add("secondDesignBtn")
        })
    }
}

opp = () => {
    if (display.value == "") {
        display.value = display.value
    }
    else {
        display.value = (0 - (eval(display.value)))
    }
}


back = () => {
    let val = String(display.value).split("")
    val.pop()
    let result = val.toString().replaceAll(',', "")
    display.value = result
}


zero = (x) => {
    if (display.value == "") {
        display.value = "0"
    }

    else if (display.value.startsWith("0")) {
        display.value.split("").shift().toString()
        display.value += ""
    }

    else {
        display.value += x
    }
}


fraction = (x) => {
    if (display.value.startsWith("-") && display.value.includes(".")) {
        display.value += ''
    }
    else if ((display.value.includes(".") && display.value.includes("+")) || display.value.includes(".") && display.value.includes("-") || display.value.includes(".") && display.value.includes("*") || display.value.includes(".") && display.value.includes("/") || display.value.includes(".") && display.value.includes("%")) {
        display.value += "."
    }
    else if (display.value.includes(".")) {
        display.value += ""
    }
    else if (display.value == "") {
        display.value = "0."
    }
    else {
        display.value += x
    }
}

let calculate = ""

mathh = (x) => {
    if (display.value == "") {
        display.value = ""
    }
    else if (!(display.value.includes('*') || display.value.includes('/') || display.value.includes('+') || display.value.includes('-') || display.value.includes('%'))) {
        display.value += x
        calculate = display.value.split("").toString().replaceAll(",", "")
        display.value = calculate
    }

    else {
        display.value = display.value
    }

}

calc = () => {
    if (display.value.includes('*') || display.value.includes('/') || display.value.includes('+') || display.value.includes('-')) {
        display.value = eval(display.value)
    }
    else {
        display.value = display.value
    }
}