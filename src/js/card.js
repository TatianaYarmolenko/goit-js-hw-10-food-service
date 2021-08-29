import cardsTpl from '../templates/template.hbs';

console.log(cardsTpl({[]}));

function createCardsMarkup(cards) {
   return cards.map(cardsTpl).loin('');
}