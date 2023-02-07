//
//

// Модуль 7. Заняття 13. Делегування подій

// =>
// 1. Створити галерею з картинок за допомогою JS, використовуючи масив.
// При кліку на картинку показувати у правому верхньому куті інформаційне вікно зі значенням поля title.
// При кліку на інформаційне вікно закривати його.
// Використовувати делегування подій при обробці кліків.

const images = [
  {
    title: "Коник стрибунець",
    src: "https://cdn.pixabay.com/photo/2022/11/07/00/27/grasshopper-7575278_1280.jpg",
  },
  {
    title: "Фрукт",
    src: "https://cdn.pixabay.com/photo/2022/10/22/18/10/quince-7539818_1280.jpg",
  },
  {
    title: "Люди",
    src: "https://cdn.pixabay.com/photo/2022/11/05/22/43/against-light-7572922_1280.jpg",
  },
  {
    title: "Годинник",
    src: "https://cdn.pixabay.com/photo/2022/11/06/13/36/architecture-7574031_1280.jpg",
  },
  {
    title: "Метро",
    src: "https://cdn.pixabay.com/photo/2022/10/31/17/57/subway-7560452_1280.jpg",
  },
  {
    title: "Хмари",
    src: "https://cdn.pixabay.com/photo/2022/10/24/09/54/switzerland-7543063_1280.jpg",
  },
];

const gallery = document.querySelector(".gallery");
const notifications = document.querySelector(".notifications");

gallery.innerHTML = images.reduce(
  (html, current) =>
    html + `<img src="${current.src}" alt="${current.title}" />`,
  ""
);

const addNotification = (title) => {
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.textContent = title;

  notification.addEventListener("click", notification.remove, { once: true });

  notifications.appendChild(notification);

  setTimeout(() => notification.remove(), 1000);
};

gallery.addEventListener("click", (e) => {
  if (e.target.nodeName !== "IMG") return;

  addNotification(e.target.alt);
});
