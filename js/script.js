// Reusable Functions
function innerTextAsNumber(id) {
    const rawText = document.getElementById(id).innerText;
    const convertNumber = parseInt(rawText);
    return convertNumber;
}

function setInnerText(id, text) {
    return document.getElementById(id).innerText = text;
}

// Copy Function
const copyButtons = document.querySelectorAll('.btn-copy');
for (const button of copyButtons) {
    button.addEventListener('click', function () {
        let currentCopyCount = innerTextAsNumber('total-copy-count');
        const increaseCopyCount = currentCopyCount += 1;
        setInnerText('total-copy-count', increaseCopyCount);

        const card = this.closest('.card');
        const serviceNmber = card.querySelector('.service-number').innerText;
        navigator.clipboard.writeText(serviceNmber);
    })
}

// Favorite Function
const favButtons = document.querySelectorAll('.fa-heart');
for (const button of favButtons) {
    button.addEventListener('click', function () {
        let currentCopyCount = innerTextAsNumber('total-favorite');
        const increaseCopyCount = currentCopyCount += 1;
        setInnerText('total-favorite', increaseCopyCount);
        return;
    })
}

let callHistory = [];

// Call function
const callButtons = document.querySelectorAll('.btn-call');
for (const button of callButtons) {
    button.addEventListener('click', function () {
        let currentCopyCount = innerTextAsNumber('total-coin');
        const increaseCopyCount = currentCopyCount -= 20;

        const card = this.closest('.card');
        const serviceNmber = card.querySelector('.service-number').innerText;
        const serviceTitle = card.querySelector('.service-title-en').innerText;
        const serviceTitleBn = card.querySelector('.service-title-bn').innerText;

        if (increaseCopyCount < 0) {
            const message = '❌ পর্যাপ্ত কয়েন নেই। কল করার জন্য কমপক্ষে ২০ কয়েন প্রয়োজন...';
            alert(message);
            return;
        }
        else {
            const message = '📞 Calling ' + serviceTitle + ' ' + serviceNmber + '...';

            callData = {
                service: serviceTitleBn,
                Number: serviceNmber,
                time: new Date().toLocaleTimeString()
            }
            callHistory.push(callData);

            let callHistoryContainer = document.getElementById('history-card-container')
            callHistoryContainer.innerText = "";

            for (const history of callHistory) {
                const div = document.createElement("div");

                div.innerHTML = `
                <div class='history-card'>
                    <div class='text-left'>
                        <h2 class='noto-serif-bengali font-semibold'>${history.service}</h2>
                        <h2 class='text-[#5C5C5C]'>${history.Number}</h2>
                    </div>
                    <p class='text-right'>${history.time}</p>
                </div>
                `

                callHistoryContainer.appendChild(div)
            }

            alert(message);
        }

        setInnerText('total-coin', increaseCopyCount);
        return;
    })
}

// Clear History Function
    const clearButton = document.getElementById('btn-clear')
        .addEventListener('click', function () {
            historyContainer = document.getElementById('history-card-container');
            historyContainer.innerText = "";
            callHistory = [];
            return;
        })