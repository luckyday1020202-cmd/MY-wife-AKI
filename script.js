const catElement = document.getElementById('cat');
const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');

let clickCount = 0;
let yesScale = 1;
let noScale = 1;
let noOpacity = 1;

btnNo.addEventListener('click', function() {
    clickCount++;

    // 1. 貓咪變傷心
    catElement.innerText = '😿';

    // 2. 「喜歡」按鈕越來越大
    yesScale += 0.35;
    btnYes.style.transform = `scale(${yesScale})`;

    // 3. 「不喜歡」按鈕與貓咪變小且變暗
    noScale -= 0.18;
    noOpacity -= 0.2;

    if (noScale < 0.2) noScale = 0.2;
    if (noOpacity < 0.2) noOpacity = 0.2;

    btnNo.style.opacity = noOpacity;
    catElement.style.opacity = noOpacity;

    // 4. 當點擊超過 4 次，「不喜歡」按鈕開始隨機傳送
    if (clickCount >= 4) {
        btnNo.style.position = 'fixed';
        const randomX = Math.random() * (window.innerWidth - 100);
        const randomY = Math.random() * (window.innerHeight - 50);
        btnNo.style.left = `${randomX}px`;
        btnNo.style.top = `${randomY}px`;
    } else {
        btnNo.style.transform = `scale(${noScale})`;
    }
});

// 點擊「喜歡」：淡出並跳轉頁面
btnYes.addEventListener('click', function() {
    document.body.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = 'success.html';
    }, 500);
});