const body = document.getElementsByTagName('body')[0];
const btn = document.getElementsByClassName('btn')[0];
const hex1 = document.getElementById('hex1');
const hex2 = document.getElementById('hex2');


btn.addEventListener('click', () => {
  let n1 = getDecToHexNumb(getRandomIntInclusive(0, 255)) + getDecToHexNumb(getRandomIntInclusive(0, 255)) + getDecToHexNumb(getRandomIntInclusive(0, 255));
  let n2 = getDecToHexNumb(getRandomIntInclusive(0, 255)) + getDecToHexNumb(getRandomIntInclusive(0, 255)) + getDecToHexNumb(getRandomIntInclusive(0, 255));
  
  hex1.innerHTML = `#${n1}`;
  hex2.innerHTML = `#${n2}`;
  body.style.background = `linear-gradient(to right, #${n1}, #${n2})`;
})

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDecToHexNumb(numb) {
  var hex = numb.toString(16);
  if ((hex.length % 2) > 0) {
        hex = "0" + hex;
    }
    return hex;
}

document.getElementsByClassName('hex__text')[0].addEventListener('click', () => {
    copyDivToClipboard()
    const copyDone = document.createElement('div');
    copyDone.classList.add('modal__copy__done');
    copyDone.innerHTML = 'Сохранено в буфер обмена';
    body.append(copyDone);
    setTimeout(() => {
      copyDone.remove();
    }, 1200);
})

function copyDivToClipboard() {
    let range = document.createRange();
    range.selectNode(document.getElementsByClassName('hex__text')[0]);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}