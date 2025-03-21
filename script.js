/* Header */
// dropdown menu with languages
const selectedButton = document.querySelector(".selected-language");
const languageList = document.querySelector(".languages");
const languageItems = document.querySelectorAll(".languages li");
// Функция для сохранения выбранного языка в localStorage
const saveLanguageToLocalStorage = (language) => {
  localStorage.setItem("selectedLanguage", language);
};

// Функция для загрузки выбранного языка из localStorage
const loadLanguageFromLocalStorage = () => {
  const savedLanguage = localStorage.getItem("selectedLanguage");
  if (savedLanguage) {
    // Установить кнопку и выделить правильный элемент списка
    selectedButton.textContent = savedLanguage;
    languageItems.forEach((item) => {
      if (item.textContent === savedLanguage) {
        item.classList.add("selected");
      } else {
        item.classList.remove("selected");
      }
    });
  }
};

// Загрузка языка при загрузке страницы
loadLanguageFromLocalStorage();

// Обработка кликов на список языков
selectedButton.addEventListener("click", () => {
  languageList.classList.toggle("visible");
});

languageItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    const selectedLanguage = e.target.textContent;

    // Обновляем текст кнопки и выделяем выбранный элемент
    selectedButton.textContent = selectedLanguage;
    languageItems.forEach((i) => i.classList.remove("selected"));
    e.target.classList.add("selected");

    // Сохраняем выбранный язык в localStorage
    saveLanguageToLocalStorage(selectedLanguage);

    // Закрываем список языков
    languageList.classList.remove("visible");
  });
});

// Закрытие списка при клике вне области
document.addEventListener("click", (e) => {
  if (!e.target.closest(".language-selector")) {
    languageList.classList.remove("visible");
  }
});