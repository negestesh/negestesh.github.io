$(function () {
    let textBox;
    $('#button').click(generateFolderName);
    function generateFolderName(){
    textBox = $('#textbox').val();
    let finalString = "";
    for (let index = 0; index < textBox.length; index++) {
        finalString += textBox[index].toUpperCase() + " ";
    }
    $('#textbox').val(finalString);
    }
    
  });