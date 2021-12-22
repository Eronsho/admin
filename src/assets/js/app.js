const tabsBtn = document.querySelectorAll(".tabs__btn");
const tabsItem = document.querySelectorAll(".tabs__item");
const btnDropdown = document.querySelector(".dropdown__content");
const containerDrop = document.querySelector(".dropdown__container");
const dropActive = document.querySelector(".dropdown-active");
const onTabClick = (item) => {
  item.addEventListener("click", () => {
    let curentBtn = item;

    let tabId = curentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (!curentBtn.classList.contains("active")) {
      tabsBtn.forEach((item) => {
        item.classList.remove("active");
      });
      tabsItem.forEach((item) => {
        item.classList.remove("active");
      });
      curentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
};
tabsBtn.forEach(onTabClick);

document.querySelector(".tabs__btn").click();
// function main() {
//   const depth = parseInt(readLine(), 10);
//   //ваш код
//   const up = 50; //высота, которую мы преодолеваем
//   const day = 0; //выходное значение цикла, количество дней
//   while (depth > 30) {
//     //   //вычитаем шаг из введёного значения, пока не достигнем 2, последний шаг на 2 единицы больше заданного, уравнивает к 1
//     depth -= 20; //шаг
//     day++; //с каждым циклом увеличивается значение дня
//   }

//   console.log(day); //вывод, универсален для всех, все 3 варианта на одно вводное значение дают одинаковый результат
// }
// main();
let daysCount = (up, down, height, step = up - down) =>
  height % step < down ? parseInt(height / step) : parseInt(height / step) + 1;
console.log(daysCount(50, 30, 100));
