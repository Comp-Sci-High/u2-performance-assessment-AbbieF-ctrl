const API_KEY= "live_Q11x3tiKEqQhTwHW7X0cVOebavvGmYn86Wk49qLsgbQKOiDuioimEfaCvHXmSiup"

const catImageURL = "https://api.thecatapi.com/v1/images/search?api_key=" + API_KEY
const catFactsURL = "https://cat-fact.herokuapp.com/facts"

async function catImages(requestURL) {
   const response = await fetch(requestURL)
    const data = await response.json()
	console.log(data)
	return	data
}


async function catFacts(requestURL) {
    const response = await fetch(requestURL)
    const data = await response.json()
    console.log(data)
    return data 
}

async function makeYourOwn() {
    const options = {
    method: "POST",
    headers: {
        Authorization: "Bearer live_Q11x3tiKEqQhTwHW7X0cVOebavvGmYn86Wk49qLsgbQKOiDuioimEfaCvHXmSiup",
        "Content-Type": "application/json",
    },
    body: JSON.stringify(catFactsURL),
}
const response = await fetch("https://cat-fact.herokuapp.com/facts", options);
const data = await response.json();
console.log(data)
}

makeYourOwn({
    catFact: userInput,
    catImage: userInput2
})



let userInput = prompt("Put in your own cat fact!")
let userInput2 = prompt("also, put in a cat image.")

//I'm not sure how to make a chatbot- so, take this instead