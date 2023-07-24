
const fetchAdvice = async ()=>{
    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json()


    // console.log(data);

    document.querySelector(".id").innerHTML =`Advice #${data.slip.id}`
    document.querySelector(".advice").innerHTML =`"${data.slip.advice}"`
}

document.querySelector(".dice").addEventListener("click",fetchAdvice)


fetchAdvice();
