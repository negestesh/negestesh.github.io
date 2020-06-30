/* eslint-disable linebreak-style */
window.onload = function () {
  const decorationButton = document.getElementById('Bigger');
  const blingCheckBox = document.getElementById('bling');

  function increaseFont() {
    const textAreaText = document.getElementById('userInput');
    const originalFontSize = parseInt(window.getComputedStyle(textAreaText).getPropertyValue('font-size'));
    textAreaText.style.fontSize = `${originalFontSize + 2}pt`;
  }
  let timer = null;
  function timedIncreaseFont() {
    if (timer === null) {
      timer = setInterval(increaseFont, 1000);
    } else {
      clearInterval(timer);
      timer = null;
    }
  }
  function applyChange() {
    const textAreaText = document.getElementById('userInput');
    if (blingCheckBox.checked) {
      textAreaText.style.fontWeight = 'bolder';
      textAreaText.style.color = 'green';
      textAreaText.style.textDecoration = 'underline';
    } else {
      textAreaText.style.fontWeight = 'normal';
      textAreaText.style.color = 'black';
      textAreaText.style.textDecoration = 'none';
    }
  }
  decorationButton.onclick = timedIncreaseFont;
  blingCheckBox.onchange = applyChange;
};
