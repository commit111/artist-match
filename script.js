//Grab a couple of things
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let maxLives = 8;
let playerLives = maxLives;

//Link text
playerLivesCount.textContent = playerLives;

//Generate the data
const getData = () => [
  {
    imgSrc:
      "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/peach-prc1.jpg?v=1672965353006",
    name: "peach prc",
  },
  {
    imgSrc:
      "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/chloe-moriondo1.jpeg?v=1672965374975",
    name: "chloe moriondo",
  },
  {
    imgSrc:
      "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/chase-atlantic1.jpg?v=1672965387477",
    name: "chase atlantic",
  },
  {
    imgSrc:
      "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/nbhd-jesse1.jpg?v=1672965383393",
    name: "the nbhd",
  },
  {
    imgSrc:
      "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/cavetown1.jpg?v=1672965393066",
    name: "cavetown",
  },
  {
    imgSrc:
      "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/brakence1.jpg?v=1672965400604",
    name: "brakence",
  },
  {
    imgSrc:
      "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/ariana-grande1.jpg?v=1672965409099",
    name: "ariana grande",
  },
  {
    imgSrc:
      "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/ashnikko1.jpg?v=1672965497504",
    name: "ashnikko",
  },

  {
    imgSrc:
      "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/peach-prc1.jpg?v=1672965353006",
    name: "peach prc",
  },
  {
    imgSrc:
      "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/chloe-moriondo1.jpeg?v=1672965374975",
    name: "chloe moriondo",
  },
  {
    imgSrc:
      "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/chase-atlantic1.jpg?v=1672965387477",
    name: "chase atlantic",
  },
  {
    imgSrc:
      "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/nbhd-jesse1.jpg?v=1672965383393",
    name: "the nbhd",
  },
  {
    imgSrc:
      "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/cavetown1.jpg?v=1672965393066",
    name: "cavetown",
  },
  {
    imgSrc:
      "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/brakence1.jpg?v=1672965400604",
    name: "brakence",
  },
  {
    imgSrc:
      "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/ariana-grande1.jpg?v=1672965409099",
    name: "ariana grande",
  },
  {
    imgSrc:
      "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/ashnikko1.jpg?v=1672965497504",
    name: "ashnikko",
  },
];

//Randomize data

const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  //console.log(cardData);
  return cardData;
};

//Card generator function
const cardGenerator = () => {
  const cardData = randomize();

  //Generate the HTML
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    //Attach info to cards
    face.src = item.imgSrc;
    card.setAttribute("name", item.name);
    //Attach cards to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    //Show cards, then toggle to close card
    setTimeout(() => {
      card.classList.add("toggleCard");
      card.style.pointerEvents = "none";
      setTimeout(() => {
        card.classList.remove("toggleCard");
        card.style.pointerEvents = "all";
      }, 2000);
    }, 800);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};

//Check cards
const checkCards = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCards = document.querySelectorAll(".toggleCard");
  console.log(clickedCard);

  //Logic
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("match");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
    } else {
      console.log("wrong");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
      playerLives--;
      playerLivesCount.textContent = playerLives;
      if (playerLives === 0) {
        setTimeout(() => restart(":< try again!"), 2000);
      }
    }
  }
  //Run a check to see if we won the game
  if (toggleCards.length === 16) {
    setTimeout(() => restart("you won!!! ;3"), 2000);
  }
};

//Restart the game
const restart = (text) => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  //section.style.pointerEvents = "none";
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
    
    //Randomize
    setTimeout(() => {
      //cards[index].style.pointerEvents = "all";
      cards[index].setAttribute("name", item.name);
      faces[index].src = item.imgSrc;
      //section.style.pointerEvents = "all";
      
      
      
      //Show cards, then toggle to close card
      cards[index].classList.add("toggleCard");
      //cards[index].style.pointerEvents = "none";
      setTimeout(() => {
        cards[index].classList.remove("toggleCard");
        //cards[index].style.pointerEvents = "all";
        //section.style.pointerEvents = "all";
      }, 2000);
     
      
      
      
    }, 1000);
  });
  playerLives = maxLives;
  playerLivesCount.textContent = playerLives;
  setTimeout(() => window.alert(text), 100);
};

cardGenerator();
