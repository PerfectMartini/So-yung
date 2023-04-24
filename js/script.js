function addRotatingImage() {
    // 새로운 이미지 태그를 생성합니다.
    var image = document.createElement('img');
    image.src = 'images/image1.jpg';

    // 이미지에 회전 애니메이션을 추가합니다.
    image.classList.add('rotating-image');

    // 이미지를 웹 페이지에 추가합니다.
    var main = document.querySelector('main');
    main.appendChild(image);
}

function addFallingImage() {
    // 새로운 이미지 태그를 생성합니다.
    var image = document.createElement('img');
    image.src = 'images/image1.jpg';

    // 이미지에 떨어지는 애니메이션을 추가합니다.
    image.classList.add('falling-image');

    // 이미지를 웹 페이지에 추가합니다.
    var main = document.querySelector('main');
    main.appendChild(image);
}
