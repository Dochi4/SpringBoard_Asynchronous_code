

// For Part 1 question 1
// let favoriteNumber = 3;

// let numUrl = `http://numbersapi.com/${favoriteNumber}?json`;

// let numresp;

// $.getJSON(numUrl, response => {
//     numresp = response
//     console.log("done", numresp);

// })
// console.log("waiting");

// For Part 1 question 2

// let numUrl = `http://numbersapi.com`;
// let numList = [1, 2, 3, 4, 5];
// let factsList = document.getElementById("facts-list");


// axios.get(`${numUrl}/${numList.join(",")}?json`)
//     .then(response => {
//         for (let num in response.data) {
//             let li = document.createElement("li");
//             li.textContent = response.data[num];
//             factsList.appendChild(li);
//         }
//     })
//     .catch(err => console.error("Error:", err));

// For Part 1 question 3

// let numUrl = `http://numbersapi.com`;
// let numb = 3;
// let factsList = document.getElementById("facts-list");
// let factArry = []


// axios.get(`${numUrl}/${numb}?json`)
//     .then(response => {
//         let fact = response.data.text
//         for (let i = 1; i < 5; i++) {
//             let li = document.createElement("li");
//             li.textContent = fact
//             factsList.appendChild(li);
//         }
//     })
//     .catch(err => console.log(err))

// For Part 2 question 1
// const cardURL = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1'
// axios.get(`${cardURL}`)
//     .then(response => {

//         let suit = response.data.cards[0].suit
//         let vaule = response.data.cards[0].value

//         console.log(`${vaule} of ${suit}`)
//     })
//     .catch(err => console.log(err))

// For Part 2 question 2

// const cardURL = 'https://deckofcardsapi.com/api/deck/'
// let deck_id;
// axios.get(`${cardURL}/new/?json`)
//     .then(response => {
//         deck_id = response.data.deck_id
//         console.log(deck_id)
//         return axios.get(`${cardURL}/${deck_id}/draw?count=1`)
//     })
//     .then(response => {
//         let { suit, value } = response.data.cards[0];
//         console.log(`${value} of ${suit}`)
//         return axios.get(`${cardURL}/${deck_id}/draw/?count=1`);
//     })
//     .then(response => {
//         let { suit, value } = response.data.cards[0];
//         console.log(`${value} of ${suit}`)
//     })

// //     .catch(err => console.log(err))

// For Part 2 question 3

const cardURL = 'https://deckofcardsapi.com/api/deck/'
let deck_id;
let remaining

axios.get(`${cardURL}/new/?json`)
    .then(response => {
        console.log(response.data)
        deck_id = response.data.deck_id
        console.log(deck_id)

    })
    .catch(err => console.log(err));

document.getElementById('draw-btn').addEventListener('click', () => {

    axios.get(`${cardURL}/${deck_id}/draw/?count=1`)
        .then(response => {
            let remaining = response.data.remaining;
            document.getElementById("remaining-cards").textContent = `Cards Remaining: ${remaining}`;
            if (response.data.remaining === 0) {
                document.getElementById("draw-btn").disabled = true;

            }

            let card = response.data.cards[0];
            let img = document.createElement('img')
            img.src = card.image

            let container = document.getElementById('card-container')
            container.innerHTML = ""
            container.append(img);
        })
        .catch(err => console.log(err))

})