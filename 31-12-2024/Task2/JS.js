
//Exercise#1
function sayHello(){
    document.getElementById("exerciseOne").innerHTML = ("Hello World!");
}

function askQuestion(){
    document.getElementById("exerciseOne").innerHTML = ("Can I Help You?");
}


//Exercise#2
function textStyle(){

    const text = document.getElementById("text");
    const fontFamily = document.getElementById("fontFamily");
    const fontSize = document.getElementById("fontSize");
    const fontColor = document.getElementById("fontColor");
    const italic = document.getElementById("italic");
    const bold = document.getElementById("bold");
    const underlined = document.getElementById("underline");

    let italicText = '', boldText = '', underlinedText = '';

    if(italic.checked)
        italicText = 'italic';

    if(bold.checked)
        boldText = 'bold';

    if(underlined.checked)
        underlinedText = 'underline';

    text.style.fontStyle = italicText;
    text.style.fontWeight = boldText;
    text.style.textDecoration = underlinedText;
    text.style.fontFamily = fontFamily.value;
    text.style.fontSize = fontSize.value;
    text.style.color = fontColor.value;
}