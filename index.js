const z = document.getElementById('z');
const x = document.getElementById('x');
const guy = document.querySelector('.guy');
const place = document.querySelectorAll('.place');
const place10 = document.getElementById('place10');
const flag = document.getElementById('flag');
const body = document.querySelector('body');
const keys = document.querySelector('.keys');

//  имя и очки
const player = prompt('Введите Ваше имя :)');
const namePoints = document.createElement('div');
namePoints.className = 'namePoints';
namePoints.style.border = '2px solid greenyellow';
namePoints.style.width = '170px';
namePoints.style.height = '100px';
namePoints.style.padding = '3px';
namePoints.style.display = 'flex';
namePoints.style.flexDirection = 'column';
namePoints.style.justifyContent = 'space-around';
namePoints.style.backgroundColor = 'rgb(131, 180, 154)';
namePoints.style.color = 'black';
body.append(namePoints);

// функция для распознания имени
function getName(text) {
  let name = '';
  if (text) name = text;
  else name = 'ты не ввел свое имя!';
  return name;
}

const playerName = document.createElement('div');
playerName.className = 'playerName';
playerName.textContent = `Имя игрока: ${getName(player)}`;
const points = document.createElement('div');
points.className = 'points';
namePoints.append(playerName);
namePoints.append(points);
let pointsNum = 0;
points.textContent = `Сумма очков: ${pointsNum}`;

// картинка при выигрыше
const imgWin = document.createElement('img');
imgWin.src = 'http://risovach.ru/upload/2014/08/mem/zheleznyy-chelovek_59507273_big_.jpeg';
imgWin.style.width = '40%';
imgWin.style.height = '50%';
imgWin.style.position = 'absolute';
imgWin.style.left = '30%';
imgWin.style.top = '20%';
imgWin.style.zIndex = '10000';
imgWin.style.border = '2px solid yellow';
imgWin.style.zIndex = '10000';

// картинка при проигрыше
const imgLose = document.createElement('img');
imgLose.src = 'http://risovach.ru/upload/2014/08/mem/norton_57299816_orig_.jpeg';
imgLose.style.width = '40%';
imgLose.style.height = '40%';
imgLose.style.position = 'absolute';
imgLose.style.left = '30%';
imgLose.style.top = '20%';
imgLose.style.border = '2px solid black';
imgLose.style.zIndex = '10000';

// тигр
const cat = document.createElement('img');
cat.className = 'cat';
cat.setAttribute('src', 'https://i.gifer.com/origin/c7/c794afdf73920930403b75d437771c46_w200.gif');
cat.style.width = '100px';
cat.style.height = '100px';
body.prepend(cat);
cat.style.animationName = 'catMov';
cat.style.position = 'absolute';
cat.style.top = '150px';
cat.style.zIndex = '10';
cat.style.animationDuration = '10s';
cat.style.animationIterationCount = 'infinite';
cat.style.animationDirection = 'alternate';

// обезьяна
const monkey = document.createElement('img');
monkey.className = 'monkey';
monkey.setAttribute('src', 'https://i0.wp.com/thumbs.gfycat.com/FrankScentedBoar-size_restricted.gif');
monkey.style.width = '150px';
monkey.style.height = '140px';
monkey.style.position = 'absolute';
monkey.style.left = '430px';
monkey.style.top = '10px';
monkey.style.zIndex = '1000';
monkey.style.animationName = 'monkMov';
monkey.style.animationDuration = '7s';
monkey.style.animationIterationCount = 'infinite';
monkey.style.animationDirection = 'alternate';
body.append(monkey);

// бананы
const banan0 = document.createElement('img');
banan0.className = 'banan';
banan0.setAttribute('src', 'https://i.gifer.com/origin/9d/9d55ce0b1bde88abdb749e0e0c438ec4_w200.gif');
banan0.style.width = '40px';
banan0.style.height = '40px';
banan0.style.position = 'absolute';
banan0.style.left = '17%';
banan0.style.top = '60%';
banan0.style.zIndex = '1000';
banan0.style.animationName = 'banMov';
banan0.style.animationDuration = '2s';
banan0.style.animationIterationCount = 'infinite';
body.prepend(banan0);

const banan1 = document.createElement('img');
banan1.className = 'banan';
banan1.setAttribute('src', 'https://i.gifer.com/origin/9d/9d55ce0b1bde88abdb749e0e0c438ec4_w200.gif');
banan1.style.width = '40px';
banan1.style.height = '40px';
banan1.style.position = 'absolute';
banan1.style.left = '31%';
banan1.style.zIndex = '1000';
banan1.style.top = '25%';
banan1.style.animationName = 'banMov';
banan1.style.animationDuration = '1s';
banan1.style.animationIterationCount = 'infinite';
body.prepend(banan1);

const banan2 = document.createElement('img');
banan2.className = 'banan';
banan2.setAttribute('src', 'https://i.gifer.com/origin/9d/9d55ce0b1bde88abdb749e0e0c438ec4_w200.gif');
banan2.style.width = '40px';
banan2.style.height = '40px';
banan2.style.position = 'absolute';
banan2.style.left = '49%';
banan2.style.zIndex = '1000';
banan2.style.animationName = 'banMov';
banan2.style.animationDuration = '3s';
banan2.style.animationIterationCount = 'infinite';
body.prepend(banan2);

const banan3 = document.createElement('img');
banan3.className = 'banan';
banan3.setAttribute('src', 'https://i.gifer.com/origin/9d/9d55ce0b1bde88abdb749e0e0c438ec4_w200.gif');
banan3.style.width = '40px';
banan3.style.height = '40px';
banan3.style.position = 'absolute';
banan3.style.left = '57%';
banan3.style.zIndex = '1000';
banan3.style.animationName = 'banMov';
banan3.style.animationDuration = '6s';
banan3.style.animationIterationCount = 'infinite';
body.prepend(banan3);

const banan4 = document.createElement('img');
banan4.className = 'banan';
banan4.setAttribute('src', 'https://i.gifer.com/origin/9d/9d55ce0b1bde88abdb749e0e0c438ec4_w200.gif');
banan4.style.width = '40px';
banan4.style.height = '40px';
banan4.style.position = 'absolute';
banan4.style.left = '69%';
banan4.style.zIndex = '1000';
banan4.style.animationName = 'banMov';
banan4.style.animationDuration = '1s';
banan4.style.animationIterationCount = 'infinite';
body.prepend(banan4);

const banan5 = document.createElement('img');
banan5.className = 'banan';
banan5.setAttribute('src', 'https://i.gifer.com/origin/9d/9d55ce0b1bde88abdb749e0e0c438ec4_w200.gif');
banan5.style.width = '40px';
banan5.style.height = '40px';
banan5.style.position = 'absolute';
banan5.style.top = '200px';
banan5.style.left = '73%';
banan5.style.zIndex = '1000';
banan5.style.animationName = 'banMov';
banan5.style.animationDuration = '2s';
banan5.style.animationIterationCount = 'infinite';
body.prepend(banan5);

// передвижение
let count = 0;
const input = document.querySelector('input');

// через нажатие букв на клавиатуре
document.addEventListener('keydown', function(event) {
	if (event.key === "X" || event.key === "x" || event.key === "ч" || event.key === "Ч") {
    count += 1; 
    pointsNum += 10;
    points.textContent= `Сумма очков: ${pointsNum}`;
    if (count < 10) {
      place[count].append(guy);
    }
    else {
    count -= 1;
      pointsNum-=10;
      points.textContent= `Сумма очков: ${pointsNum}`;
}
    if (guy.parentElement == place10) {	
      flag.style.opacity='100';
			flag.zIndex="50000";
      body.prepend(imgWin);
      body.style.backgroundColor="yellow";
      namePoints.style.backgroundColor="black";
      namePoints.style.color="yellow";
      keys.remove();
    }
  };
  if (event.key === "Z" || event.key === "z" || event.key === "Я" || event.key === "я") {
    count -= 1;
    pointsNum -= 10;
    points.textContent= `Сумма очков: ${pointsNum}`;
    if (count >= 0) {
      place[count].append(guy);
    }
    else {
      count += 1;
      pointsNum=0;
      points.textContent= `Сумма очков: ${pointsNum}`;
    }
  }
});

// через нажатие кнопок на экране
x.addEventListener('click', () => {
  count += 1;
  if (count < 10) {
    pointsNum += 10;
    points.textContent = `Сумма очков: ${pointsNum}`;
    place[count].append(guy);
  } else {
    count -= 1;
  }
  if (guy.parentElement === place10) {
    points.textContent = `Сумма очков: ${pointsNum}`;
    flag.style.opacity = '100';
		flag.zIndex="500000";
    body.prepend(imgWin);
    body.style.backgroundColor = 'yellow';
    namePoints.style.backgroundColor = 'black';
    namePoints.style.color = 'yellow';
    keys.remove();
  }
});

z.addEventListener('click', () => {
  count -= 1;
  if (count >= 0) {
    place[count].append(guy);
    pointsNum -= 10;
    points.textContent = `Сумма очков: ${pointsNum}`;
  } else {
    count += 1;
    pointsNum = 0;
    points.textContent = `Сумма очков: ${pointsNum}`;
  }
});

// проигрыш
const boom = setInterval(() => {
  const bananas = document.querySelectorAll('.banan');
  for (let i = 0; i < bananas.length; i += 1) {
    const dataGuy = guy.getBoundingClientRect();
    const dataBanan = bananas[i].getBoundingClientRect();
    const dataCat = cat.getBoundingClientRect();
    const dataMonkey = monkey.getBoundingClientRect();
    if (((dataGuy.top < dataBanan.top && dataBanan.right > dataGuy.left
&& dataBanan.left < dataGuy.left && dataGuy.bottom > dataBanan.bottom
&& dataGuy.right > dataBanan.right)
|| (dataCat.right > dataGuy.left && dataCat.left < dataGuy.right
&& dataCat.bottom > dataGuy.top && dataGuy.top > dataCat.top)
|| (dataMonkey.right > dataGuy.left && dataMonkey.left < dataGuy.right
&& dataMonkey.bottom > dataGuy.top && dataGuy.top > dataMonkey.top))
&& (guy.parentElement !== place10)) {
      guy.style.transform = 'scale(1, -1)';
      body.prepend(imgLose);
      body.style.backgroundColor = 'black';
      namePoints.style.backgroundColor = 'black';
      namePoints.style.color = 'black';
      namePoints.style.border = 'black';
      keys.remove();
      setTimeout(function() {
        location.reload();
      }, 1500);
    }
  }
});
