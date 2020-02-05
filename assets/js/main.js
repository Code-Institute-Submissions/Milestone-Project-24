const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
var flipCount =0;
var ticker =  document.getElementById('flipcount');

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  flipCount ++;
  ticker.innerText = flipCount;
  
  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkMatch();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetCards();
}

function checkMatch() {
  let pair = firstCard.dataset.image === secondCard.dataset.image;
  
  if (pair) {
      disableCards();
  } else {
      unflipCards();
  }
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetCards();
  }, 1000);
}

function resetCards() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffleCards() {
  cards.forEach(card => {
    let randomOrder = Math.floor(Math.random() * 20);
    card.style.order = randomOrder;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

    
