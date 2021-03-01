window.onload = function() {
  const moodEmoji = document.querySelector('.mood');
  const body = document.querySelector('body');

  function changeMood(myMood) {
    store.dispatch({ type: 'MOOD', payload: myMood });
    const currentMood = store.getState().mood;
    moodEmoji.innerText = currentMood.emoji;
    body.style.backgroundColor = currentMood.color;
  }

  const moods = {
    happy    : { emoji: 'ʘ‿ʘ', color: 'gold' },
    sad      : { emoji: '⊙︿⊙', color: 'steelblue' },
    angry    : { emoji: '(⋋▃⋌)', color: 'tomato' },
    confused : { emoji: '(⊙_☉)', color: 'thistle' }
  };

  document.querySelector('.happy').addEventListener('click', function() {
    changeMood(moods.happy);
  });
  document.querySelector('.sad').addEventListener('click', function() {
    changeMood(moods.sad);
  });
  document.querySelector('.angry').addEventListener('click', function() {
    changeMood(moods.angry);
  });
  document.querySelector('.confused').addEventListener('click', function() {
    changeMood(moods.confused);
  });
  document.querySelector('.random').addEventListener('click', function() {
    const options = Object.values(moods);
    let idx = Math.floor(Math.random() * options.length);
    changeMood(options[idx]);
  });
};
