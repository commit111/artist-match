//Grab a couple of things
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 6;

//Link text 
playerLivesCount.textContent = playerLives;

//Generate the data
const getData = () => [
  {imgSrc: "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/peach-prc1.jpg?v=1672965353006", name: "peach prc"},
  {imgSrc: "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/chloe-moriondo1.jpeg?v=1672965374975", name: "chloe moriondo"},
  {imgSrc: "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/chase-atlantic1.jpg?v=1672965387477", name: "chase atlantic"},
  {imgSrc: "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/nbhd-jesse1.jpg?v=1672965383393", name: "the nbhd"},
  {imgSrc: "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/cavetown1.jpg?v=1672965393066", name: "cavetown"},
  {imgSrc: "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/brakence1.jpg?v=1672965400604", name: "brakence"},
  {imgSrc: "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/ariana-grande1.jpg?v=1672965409099", name: "ariana grande"},
  {imgSrc: "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/ashnikko1.jpg?v=1672965497504", name: "ashnikko"},
  
  {imgSrc: "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/peach-prc1.jpg?v=1672965353006", name: "peach prc"},
  {imgSrc: "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/chloe-moriondo1.jpeg?v=1672965374975", name: "chloe moriondo"},
  {imgSrc: "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/chase-atlantic1.jpg?v=1672965387477", name: "chase atlantic"},
  {imgSrc: "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/nbhd-jesse1.jpg?v=1672965383393", name: "the nbhd"},
  {imgSrc: "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/cavetown1.jpg?v=1672965393066", name: "cavetown"},
  {imgSrc: "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/brakence1.jpg?v=1672965400604", name: "brakence"},
  {imgSrc: "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/ariana-grande1.jpg?v=1672965409099", name: "ariana grande"},
  {imgSrc: "https://cdn.glitch.global/31d77a6b-cc56-4a97-a436-3bed549e6b3b/ashnikko1.jpg?v=1672965497504", name: "ashnikko"},
];


//Randomize data

const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5)
  //console.log(cardData);
  return cardData;
};

//Card generator function
const cardGenerator = () => {
  const cardData = randomize();
  
  //Generate the HTML
  cardData.forEach(item => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    //Attach info to cards
    face.src = item.imgSrc;
    //Attach cards to the section
    section.appendChild(card);
    card.appendChild(face)
    card.appendChild(back);
    
    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  }); 
  
};


//Check cards
const checkCards = (e) => {
  const clickedCard = e.target;
  console.log(clickedCard);
}

cardGenerator();