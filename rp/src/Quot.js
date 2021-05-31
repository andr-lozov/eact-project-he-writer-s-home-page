import React from 'react';
import './Quot.css';

function Quot() {
    return (
      
      <div className='quot'>
                       
        <img class="image" src="f10.jpg" height='680'/>
				<div class="advice">
					<span>Михаил Жванецкий:</span>
					<span class="phrase">Хорошо жить у нас получается плохо.</span>
					<img class="cursor" src="https://code.s3.yandex.net/web-code/cursor.gif"/>
				  
                        
         </div>
         <div class="button">Лучшие цытаты. Жми!</div>    
      </div>
    );
  }
  let phrases = [
    { text: 'Хочешь всего и сразу, а получаешь ничего и постепенно.', image: 'mikhail-zhvanetskii.jpg'},
    { text: 'Трудно быть последней сукой — вечно кто-то пристраивается сзади!', image: 'f2.jpg' },
    { text: 'Лучше длинная живая очередь, чем короткая автоматная!', image: 'f4.jpg' },
    { text: 'Лучше маленький доллар, чем большое спасибо.', image: 'f5.jpg' },
    { text: 'Любого автомобиля хватит до конца жизни, если ездить достаточно лихо.', image: 'f7.jpg' },
    { text: 'Мало знать себе цену – надо еще пользоваться спросом.', image: 'f9.jpg' }
    ];
  
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let image = document.querySelector('.image');
   // button.addEventListener('click', function () {
   // let randomElement = getRandomElement(phrases);
    
    //phrase.textContent = 'wepens';
    //image.src = 'f7.jpg';
     
 // });
export default Quot;