function typeWriter(text, element, speed) {
  let i = 0;
  element.innerHTML = '';
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 2 + 3 + 's';
  heart.innerText = '💗';
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

function handleAnswer(isYes) {
  document.body.innerHTML = '';
  document.body.style.display = 'flex';
  document.body.style.flexDirection = 'column';
  document.body.style.alignItems = 'center';
  document.body.style.justifyContent = 'center';
  document.body.style.height = '100vh';

  if (isYes) {
    document.body.style.backgroundColor = '#ffe6f0';
    const emojisDiv = document.createElement('div');
    emojisDiv.className = 'emojis';
    emojisDiv.innerHTML = '\n\n\n\n😘💖😍💞💋💗💌🥰';
    document.body.appendChild(emojisDiv);

    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    document.body.appendChild(messageDiv);

    const messageText = "✨ You said YES! Here's a flood of love for you...✨\n\nMy dearest love,\nEvery second without you feels like forever. \nMy heart aches for your touch, your sweet smile, and the sound of your laughter that lights up my world. \nI can still feel the warmth of your arms around me, your soft voice whispering in my ear, sending shivers down my spine. \nThoughts of you fill my mind, making me long to hold you closeee, to feel your heartbeat against mine, lost in the fire of our love.\n\nSuno!\nChup chap se na raha kro na!\nYuhi waham sa ho jata h,\nKahi khafa to nhi ho,\nKahi udaas to nhi ho,\nTm bolte aachi lagti ho,\nTm daattey aachi lagti ho,\nKabhi shararat se,\nkabhi gusse se,\nTm haste aachi lagti ho...\n\nSuno!\nChup chap se na raha karo!\nTm bolte aachi lagti ho...\n\n💕From morning hugs to good night kisses, you're everything warm and sweet 💕\nYou are the cookie to my milk, and the heart of my day 💖 ✨\nUntil we’re together again, you’re in every beat of my heart, my deepest desire, my everything. 💖🔥✨\n\n\n\n\n";
    

    typeWriter(messageText, messageDiv, 50);

    setInterval(createHeart, 300);
  } else {
    document.body.style.backgroundColor = '#d3d3d3';
    const dogImg = document.createElement('img');
    dogImg.src = 'dog.jpg';
    dogImg.alt = 'Sad Dog';
    dogImg.className = 'dog-img sad';
    document.body.appendChild(dogImg);

    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    document.body.appendChild(messageDiv);

    const messageText = "Oh no... you broke the dog's heart! 💔\n“Why did you say no? I was wagging my tail just for you... 😭🐾”\nBut don’t worry, I still love you, just with sniffles now!";
    typeWriter(messageText, messageDiv, 50);
  }
}