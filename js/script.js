// 이미지 경로 배열
const imagePaths = [
  "images/image1.png",
  "images/image2.png",
];

function displayRandomImage() {
  const inputText = document.getElementById("input-text").value;
  const image = document.getElementById("falling-image");

  const randomIndex = Math.floor(Math.random() * imagePaths.length); // 이미지 경로 배열 변수 이름을 수정했습니다.
  image.src = imagePaths[randomIndex]; // 이미지 경로를 설정합니다.

  image.style.display = "block"; // 이미지를 보이도록 설정합니다.
  image.classList.add("falling");
}
