window.onload = function () {
  //html elements 
  let startButton = document.getElementById('start');
  let selectedAnimation = document.getElementById('animation');
  let stopButton = document.getElementById('stop');
  let sizeSelector = document.getElementById('fontsize');
  let speedSelector = document.getElementById('turbo');
  let animation;

  speedSelector.onchange = turbo;
  sizeSelector.onchange = changeFontSize;
  stopButton.onclick = endAnimation;
  selectedAnimation.onchange = showAnimationText;
  startButton.onclick = startAnimation;

  let timer = null; // timer for setInterval method

  /* function that runs when the turbo check box is checked/unchecked */
  function turbo() {
    let isChecked = speedSelector.checked;//state of the turbo checkbox
    let currentAnimationFrame = document.getElementById('text-area').value;
    let arrayCounter = 0;//counter that sets the index of the current animation frame
    let separatedAnimations = animation.split('=====\n');

    /* loop that gets the current index of the current animation frame */
    for (let i = 0; i < separatedAnimations.length; i++) {
      if (separatedAnimations[i] === currentAnimationFrame) {
        arrayCounter = i;
        break;
      }
    }

    if (isChecked) {
      clearInterval(timer);
      timer = setInterval(turboAnimator, 50);//new animation speed
    } else {
      clearInterval(timer);
      timer = setInterval(turboAnimator, 250);//animation speed when turbo is unchecked
    }

    /*the  function that changes the frames */
    function turboAnimator() {
      if (arrayCounter === 0) {
        let element = document.getElementById('text-area');
        element.value = separatedAnimations[arrayCounter];
        arrayCounter++;
      } else if (arrayCounter === separatedAnimations.length - 1) {
        let element = document.getElementById('text-area');
        element.value = separatedAnimations[arrayCounter];
        arrayCounter = 0;
      } else {
        let element = document.getElementById('text-area');
        element.value = separatedAnimations[arrayCounter];
        arrayCounter++;
      }
    }

  }
  /* function that changes the font size of the frame */
  function changeFontSize() {
    if (sizeSelector.value === 'Tiny') {
      let textArea = document.getElementById('text-area');
      textArea.style.fontSize = '7pt';
    }

    if (sizeSelector.value === 'Small') {
      let textArea = document.getElementById('text-area');
      textArea.style.fontSize = '10pt';
    }

    if (sizeSelector.value === 'Medium') {
      let textArea = document.getElementById('text-area');
      textArea.style.fontSize = '12pt';
    }

    if (sizeSelector.value === 'Large') {
      let textArea = document.getElementById('text-area');
      textArea.style.fontSize = '16pt';
    }

    if (sizeSelector.value === 'Extra Large') {
      let textArea = document.getElementById('text-area');
      textArea.style.fontSize = '24pt';
    }

    if (sizeSelector.value === 'XXL') {
      let textArea = document.getElementById('text-area');
      textArea.style.fontSize = '32pt';
    }
  }
  /* function that stops the animation and resets the text area to
   the initially selected animation type */
  function endAnimation() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }

    selectedAnimation = document.getElementById('animation');
    let textArea = document.getElementById('text-area');
    textArea.value = ANIMATIONS[selectedAnimation.value];
    stopButton.disabled = true;
    startButton.disabled = false;
    selectedAnimation.disabled = false;
    if (speedSelector.checked === true) {
      speedSelector.checked = false;
    }

  }
  /* function that is called when the start button is pressed */
  function startAnimation() {
    animation = document.getElementById('text-area').value;//gets the state of the text area before start button is pressed
    let separatedAnimations = animation.split('=====\n');
    let arrayCounter = 0;
    startButton.disabled = true;
    selectedAnimation.disabled = true;
    stopButton.disabled = false;
    /* function that changes the frames */
    function animator() {
      if (arrayCounter === 0) {
        let element = document.getElementById('text-area');
        element.value = separatedAnimations[arrayCounter];
        arrayCounter++;
      } else if (arrayCounter === separatedAnimations.length - 1) {
        let element = document.getElementById('text-area');
        element.value = separatedAnimations[arrayCounter];
        arrayCounter = 0;
      } else {
        let element = document.getElementById('text-area');
        element.value = separatedAnimations[arrayCounter];
        arrayCounter++;
      }

    }

    if (timer === null) {
      timer = setInterval(animator, 250);
    }
  }
  /* function that changes the initial animation text when animation type is selected */
  function showAnimationText() {
    let textArea = document.getElementById('text-area');
    textArea.value = ANIMATIONS[selectedAnimation.value];
  }
};

