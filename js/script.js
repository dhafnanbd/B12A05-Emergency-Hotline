function innerTextAsNumber(id){
    const rawText = document.getElementById(id).innerText;
    const convertNumber = parseInt(rawText);
    return convertNumber;
}

function setInnerText(id, text){
    return document.getElementById(id).innerText = text;
}

const copyButtons = document.querySelectorAll('.btn-copy');
for (const button of copyButtons){
    button.addEventListener('click', function(){
        let currentCopyCount = innerTextAsNumber('total-copy-count');
        const increaseCopyCount = currentCopyCount+=1;
        setInnerText('total-copy-count', increaseCopyCount);
    })
}

const favButtons = document.querySelectorAll('.fa-heart');
for (const button of favButtons){
    button.addEventListener('click', function(){
        let currentCopyCount = innerTextAsNumber('total-favorite');
        const increaseCopyCount = currentCopyCount+=1;
        setInnerText('total-favorite', increaseCopyCount);
    })
}

const callButtons = document.querySelectorAll('.btn-call');
for (const button of callButtons){
    button.addEventListener('click', function(){
        let currentCopyCount = innerTextAsNumber('total-coin');
        const increaseCopyCount = currentCopyCount-=20;
        setInnerText('total-coin', increaseCopyCount);
    })
}