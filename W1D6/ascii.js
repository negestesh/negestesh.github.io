window.onload = function () {
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

  let timer = null;

  function turbo() {
    let isChecked = speedSelector.checked;
    let currentAnimationFrame = document.getElementById('text-area').value;
    let arrayCounter = 0;
    let separatedAnimations = animation.split('=====\n');
    for (let i = 0; i < separatedAnimations.length; i++) {
      if (separatedAnimations[i] === currentAnimationFrame) {
        arrayCounter = i;
        break;
      }
    }

    if (isChecked) {
      clearInterval(timer);
      timer = setInterval(turboAnimator, 50);
    } else {
      clearInterval(timer);
      timer = setInterval(turboAnimator, 250);
    }

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

  function startAnimation() {
    animation = document.getElementById('text-area').value;
    let separatedAnimations = animation.split('=====\n');
    let arrayCounter = 0;
    startButton.disabled = true;
    selectedAnimation.disabled = true;
    stopButton.disabled = false;

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

  function showAnimationText() {
    let textArea = document.getElementById('text-area');
    textArea.value = ANIMATIONS[selectedAnimation.value];
  }
};

