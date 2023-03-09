//Создаем игровую карту, одна сторона defaultIcon - знак вопроса,
//перевернутая сторона flippedCardIcon - картинка из перемешанного массива

export const createGameCard = (defaultIcon, flippedCardIcon) => {
   const card = document.createElement('div'); //создали карту
   card.classList.add('game-card'); //добавили карте класс

   const notFlippedCardI = document.createElement('i'); //для карты создаем div i
   const flippedCardI = document.createElement('i');

   notFlippedCardI.classList.add('fa', `fa-${defaultIcon}`);
   flippedCardI.classList.add('fa', `fa-${flippedCardIcon}`);

   card.append(flippedCardI, notFlippedCardI);

   return card;
}