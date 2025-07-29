// 語言管理器
class LanguageManager {
  constructor() {
    this.currentLanguage = "zh-TW"; // 預設繁體中文
    this.translations = {};
    this.init();
  }

  async init() {
    try {
      const response = await fetch("languages.json");
      this.translations = await response.json();
      this.loadSavedLanguage();
      this.updatePageLanguage();
    } catch (error) {
      console.error("無法載入語言文件:", error);
    }
  }

  // 載入保存的語言設定
  loadSavedLanguage() {
    const savedLanguage = localStorage.getItem("omniBrewLanguage");
    if (savedLanguage && this.translations[savedLanguage]) {
      this.currentLanguage = savedLanguage;
    }
  }

  // 切換語言
  changeLanguage(language) {
    if (this.translations[language]) {
      this.currentLanguage = language;
      localStorage.setItem("omniBrewLanguage", language);
      this.updatePageLanguage();
    }
  }

  // 獲取翻譯文字
  getText(key) {
    const keys = key.split(".");
    let value = this.translations[this.currentLanguage];

    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        // 如果找不到翻譯，返回鍵值
        return key;
      }
    }

    return value || key;
  }

  // 更新頁面語言
  updatePageLanguage() {
    // 更新頁面標題
    document.title = this.getText("title");

    // 更新頁面語言屬性
    document.documentElement.lang = this.currentLanguage;

    // 更新所有帶有 data-i18n 屬性的元素
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const text = this.getText(key);
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        // 檢查是否有 placeholder 屬性
        if (element.hasAttribute("placeholder")) {
          element.placeholder = text;
        } else {
          element.value = text;
        }
      } else {
        element.textContent = text;
      }
    });

    // 更新所有帶有 data-i18n-title 屬性的元素
    const titleElements = document.querySelectorAll("[data-i18n-title]");
    titleElements.forEach((element) => {
      const key = element.getAttribute("data-i18n-title");
      element.title = this.getText(key);
    });

    // 更新語言切換按鈕狀態
    this.updateLanguageButtons();

    // 重新渲染動態內容
    if (typeof renderDrinkCategories === "function") {
      renderDrinkCategories();
    }
    if (typeof updateOrderDisplay === "function") {
      updateOrderDisplay();
    }
  }

  // 更新語言切換按鈕狀態
  updateLanguageButtons() {
    const buttons = document.querySelectorAll('[id^="lang-"]');
    buttons.forEach((button) => {
      const lang = button.id.replace("lang-", "");
      if (lang === this.currentLanguage) {
        button.classList.remove("btn-outline-light");
        button.classList.add("btn-light");
      } else {
        button.classList.remove("btn-light");
        button.classList.add("btn-outline-light");
      }
    });
  }

  // 獲取當前語言
  getCurrentLanguage() {
    return this.currentLanguage;
  }

  // 獲取可用語言列表
  getAvailableLanguages() {
    return Object.keys(this.translations);
  }
}

// 創建全局語言管理器實例
const languageManager = new LanguageManager();

// 語言切換函數
function switchLanguage(language) {
  languageManager.changeLanguage(language);
}

// 獲取翻譯文字的便捷函數
function t(key) {
  return languageManager.getText(key);
}

// 獲取當前語言的便捷函數
function getCurrentLanguage() {
  return languageManager.getCurrentLanguage();
}
