// 飲品資料庫
const drinks = {
  traditionalTea: {
    name: "原茶類",
    icon: "🍵",
    items: [
      {
        id: "T1",
        name: "古早味紅茶",
        price: 79,
        largePrice: 89,
        itemCode: "T1",
        temperatureRestriction: "cold", // cold: 只能冰飲, hot: 只能熱飲, both: 冰熱都可以
        sizeOnly: null, // null表示可以選擇L或R
        allowToppings: true, // 是否允許加料
      },
      {
        id: "T2",
        name: "春芽綠茶",
        price: 79,
        largePrice: 89,
        itemCode: "T2",
        temperatureRestriction: "cold",
        sizeOnly: null,
        allowToppings: true,
      },
      {
        id: "T3",
        name: "金萱青茶",
        price: 79,
        largePrice: 89,
        itemCode: "T3",
        temperatureRestriction: "cold",
        sizeOnly: null,
        allowToppings: true,
      },
      {
        id: "T4",
        name: "烏龍茶",
        price: 79,
        largePrice: 89,
        itemCode: "T4",
        temperatureRestriction: "cold",
        sizeOnly: null,
        allowToppings: true,
      },
      {
        id: "T5",
        name: "烏龍綠茶",
        price: 79,
        largePrice: 89,
        itemCode: "T5",
        temperatureRestriction: "cold",
        sizeOnly: null,
        allowToppings: true,
      },
      {
        id: "T6",
        name: "麥茶",
        price: 79,
        largePrice: 89,
        itemCode: "T6",
        temperatureRestriction: "cold",
        sizeOnly: null,
        allowToppings: true,
      },
      {
        id: "T7",
        name: "冬瓜茶",
        price: 79,
        largePrice: 89,
        itemCode: "T7",
        temperatureRestriction: "cold",
        sizeOnly: null,
        allowToppings: true,
      },
      {
        id: "T8",
        name: "冬瓜麥茶",
        price: 79,
        largePrice: 89,
        itemCode: "T8",
        temperatureRestriction: "cold",
        sizeOnly: null,
        allowToppings: true,
      },
    ],
  },
  milky: {
    name: "乳香類",
    icon: "🥛",
    items: [
      {
        id: "M1",
        name: "古早味奶茶",
        price: 89,
        largePrice: 99,
        itemCode: "M1",
        temperatureRestriction: "cold",
        sizeOnly: null,
        allowToppings: true,
      },
      {
        id: "M2",
        name: "特調奶綠",
        price: 89,
        largePrice: 99,
        itemCode: "M2",
        temperatureRestriction: "cold",
        sizeOnly: null,
        allowToppings: true,
      },
      {
        id: "M3",
        name: "特調奶青",
        price: 89,
        largePrice: 99,
        itemCode: "M3",
        temperatureRestriction: "cold",
        sizeOnly: null,
        allowToppings: true,
      },
      {
        id: "M4",
        name: "烏龍奶茶",
        price: 89,
        largePrice: 99,
        itemCode: "M4",
        temperatureRestriction: "cold",
        sizeOnly: null,
        allowToppings: true,
      },
      {
        id: "M5",
        name: "冬瓜牛奶",
        price: 89,
        largePrice: 99,
        itemCode: "M5",
        temperatureRestriction: "cold",
        sizeOnly: null,
        allowToppings: true,
      },
    ],
  },
  fruity: {
    name: "找新鮮",
    icon: "🍊",
    items: [
      {
        id: "F1",
        name: "古早味檸檬紅茶",
        price: 89,
        largePrice: 99,
        itemCode: "F1",
        temperatureRestriction: "cold",
        sizeOnly: null,
        allowToppings: true,
      },
      {
        id: "F2",
        name: "檸檬綠茶",
        price: 89,
        largePrice: 99,
        itemCode: "F2",
        temperatureRestriction: "cold",
        sizeOnly: null,
        allowToppings: true,
      },
      {
        id: "F3",
        name: "檸檬青茶",
        price: 89,
        largePrice: 99,
        itemCode: "F3",
        temperatureRestriction: "cold",
        sizeOnly: null,
        allowToppings: true,
      },
      {
        id: "F4",
        name: "冬瓜檸檬",
        price: 89,
        largePrice: 99,
        itemCode: "F4",
        temperatureRestriction: "cold",
        sizeOnly: null,
        allowToppings: true,
      },
      {
        id: "F5",
        name: "檸檬汁",
        price: 89,
        largePrice: 99,
        itemCode: "F5",
        temperatureRestriction: "cold",
        sizeOnly: null,
        allowToppings: true,
      },
      {
        id: "F6",
        name: "金桔檸檬",
        price: 89,
        largePrice: 99,
        itemCode: "F6",
        temperatureRestriction: "cold",
        sizeOnly: null,
        allowToppings: true,
      },
      {
        id: "F7",
        name: "梅子綠茶",
        price: 89,
        largePrice: 99,
        itemCode: "F7",
        temperatureRestriction: "cold",
        sizeOnly: null,
        allowToppings: true,
      },
    ],
  },
  specialty: {
    name: "特調系列",
    icon: "✨",
    items: [
      {
        id: "S1",
        name: "蜂蜜紅茶",
        price: 89,
        largePrice: 99,
        itemCode: "S1",
        temperatureRestriction: "cold",
        sizeOnly: null,
        allowToppings: true,
      },
      {
        id: "S2",
        name: "蜂蜜綠茶",
        price: 89,
        largePrice: 99,
        itemCode: "S2",
        temperatureRestriction: "cold",
        sizeOnly: null,
        allowToppings: true,
      },
      {
        id: "S3",
        name: "蜂蜜青茶",
        price: 89,
        largePrice: 99,
        itemCode: "S3",
        temperatureRestriction: "cold",
        sizeOnly: null,
        allowToppings: true,
      },
      {
        id: "S4",
        name: "蜂蜜烏龍",
        price: 89,
        largePrice: 99,
        itemCode: "S4",
        temperatureRestriction: "cold",
        sizeOnly: null,
        allowToppings: true,
      },
      {
        id: "S5",
        name: "多多綠茶",
        price: 99,
        largePrice: 109,
        itemCode: "S5",
        temperatureRestriction: "cold",
        sizeOnly: null,
        allowToppings: true,
      },
      {
        id: "S6",
        name: "古早味香草冰淇淋紅茶",
        price: 129,
        largePrice: 129,
        itemCode: "S6",
        temperatureRestriction: "cold",
        sizeOnly: "L",
        allowToppings: true,
      },
    ],
  },
  coffee: {
    name: "咖啡系列",
    icon: "☕",
    items: [
      {
        id: "C1",
        name: "美式咖啡",
        price: 89,
        largePrice: 89,
        temperatureRestriction: "both", // 冰熱都可以
        itemCode: "C1",
        sizeOnly: "R", // 只能選擇R
        allowToppings: true, // 咖啡不適合加料可設定為false
      },
      {
        id: "C2",
        name: "拿鐵",
        price: 119,
        largePrice: 119,
        temperatureRestriction: "both",
        itemCode: "C2",
        sizeOnly: "R", // 只能選擇R
        allowToppings: true,
      },
      {
        id: "C3",
        name: "摩卡拿鐵",
        price: 129,
        largePrice: 129,
        temperatureRestriction: "both",
        itemCode: "C3",
        sizeOnly: "R", // 只能選擇R
        allowToppings: true,
      },
      {
        id: "C4",
        name: "海鹽拿鐵",
        price: 129,
        largePrice: 129,
        temperatureRestriction: "both",
        itemCode: "C4",
        sizeOnly: "R", // 只能選擇R
        allowToppings: true,
      },
      {
        id: "C5",
        name: "焦糖拿鐵",
        price: 129,
        largePrice: 129,
        temperatureRestriction: "both",
        itemCode: "C5",
        sizeOnly: "R", // 只能選擇R
        allowToppings: true,
      },
      {
        id: "C6",
        name: "榛果拿鐵",
        price: 129,
        largePrice: 129,
        temperatureRestriction: "both",
        itemCode: "C6",
        sizeOnly: "R", // 只能選擇R
        allowToppings: true,
      },
      {
        id: "C7",
        name: "西西里檸檬氣泡咖啡",
        price: 129,
        largePrice: 129,
        temperatureRestriction: "cold", // 只能冰飲
        itemCode: "C7",
        sizeOnly: "R", // 只能選擇R
        allowToppings: true,
      },
    ],
  },
  bites: {
    name: "輕食類",
    icon: "🍞",
    items: [
      {
        id: "B1",
        name: "巧克力厚片吐司",
        price: 59,
        largePrice: 59,
        isFood: true,
        itemCode: "B1",
        temperatureRestriction: "hot",
        allowToppings: false, // 輕食不加料
        sizeOnly: null, // 輕食沒有尺寸選擇
      },
      {
        id: "B2",
        name: "花生厚片吐司",
        price: 59,
        largePrice: 59,
        isFood: true,
        itemCode: "B2",
        temperatureRestriction: "hot",
        allowToppings: false, // 輕食不加料
        sizeOnly: null, // 輕食沒有尺寸選擇
      },
      {
        id: "B3",
        name: "奶酥厚片",
        price: 59,
        largePrice: 59,
        isFood: true,
        itemCode: "B3",
        temperatureRestriction: "hot",
        allowToppings: false, // 輕食不加料
        sizeOnly: null, // 輕食沒有尺寸選擇
      },
      {
        id: "B4",
        name: "草莓厚片吐司",
        price: 59,
        largePrice: 59,
        isFood: true,
        itemCode: "B4",
        temperatureRestriction: "hot",
        allowToppings: false, // 輕食不加料
        sizeOnly: null, // 輕食沒有尺寸選擇
      },
    ],
  },
};

// 尺寸選項
const sizes = [
  { id: "R", name: "Regular" },
  { id: "L", name: "Large" },
];

// 溫度選項
const temperatureLevels = [
  { id: "hot", name: "熱" },
  { id: "cold", name: "冰" },
];

// 溫度限制類型
const temperatureRestrictions = {
  coldOnly: "cold", // 只能冰飲
  hotOnly: "hot", // 只能熱飲
  both: "both", // 冰熱都可以
};

// 甜度選項
const sweetnessLevels = [
  { id: "0%", name: "無糖" },
  { id: "25%", name: "微糖" },
  { id: "50%", name: "半糖" },
  { id: "75%", name: "少糖" },
  { id: "100%", name: "全糖" },
];

// 冰塊選項
const iceLevels = [
  { id: "no ice", name: "無冰" },
  { id: "less ice", name: "微冰" },
  { id: "regular ice", name: "正常冰" },
];

// 配料選項
const toppings = [
  { id: "X", name: "無配料", price: 0 },
  { id: "pearls", name: "波霸", price: 15 },
  { id: "coconut jelly", name: "椰果", price: 15 },
  { id: "coffee jelly", name: "咖啡凍", price: 15 },
  { id: "lemon ice jelly", name: "檸檬愛玉", price: 15 },
  { id: "tapioca strips", name: "粉條", price: 15 },
];

// 配料組合價格計算函數
function calculateToppingPrice(toppings) {
  if (!toppings || toppings.length === 0 || toppings.includes("X")) {
    return 0;
  }

  const validToppings = toppings.filter((t) => t !== "X");
  if (validToppings.length === 0) {
    return 0;
  } else if (validToppings.length === 1) {
    return 15;
  } else {
    return 20; // 兩樣配料20元
  }
}

// 訂單資料
let currentOrder = [];
let selectedDrink = null;

// 初始化頁面
document.addEventListener("DOMContentLoaded", function () {
  renderDrinkCategories();
  updateOrderDisplay();
  updateTotal();
  loadUserSettings(); // 載入用戶設置
});

// 渲染飲品類別
function renderDrinkCategories() {
  const container = document.getElementById("drinkCategories");
  container.innerHTML = "";

  Object.keys(drinks).forEach((category) => {
    const categoryData = drinks[category];
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "col-md-6 col-6 mb-2";
    categoryDiv.innerHTML = `
            <div class="card drink-card" onclick="selectCategory('${category}')">
                <div class="card-body text-center">
                    <div class="h1 mb-2">${categoryData.icon}</div>
                    <h5 class="card-title">${categoryData.name}</h5>
                    <p class="card-text text-muted">${categoryData.items.length} 種選擇</p>
                </div>
            </div>
        `;
    container.appendChild(categoryDiv);
  });
}

// 選擇飲品類別
function selectCategory(category) {
  selectedDrink = null;
  renderDrinkSelection(category);
}

// 渲染飲品選擇
function renderDrinkSelection(category) {
  const container = document.getElementById("drinkCategories");
  const categoryData = drinks[category];

  container.innerHTML = `
        <div class="col-12 mb-3">
            <button class="btn btn-outline-secondary" onclick="renderDrinkCategories()">
                <i class="fas fa-arrow-left me-2"></i>返回類別
            </button>
        </div>
    `;

  categoryData.items.forEach((drink) => {
    const drinkDiv = document.createElement("div");
    drinkDiv.className = "col-md-6 col-6 mb-2";

    // 根據是否有sizeOnly來決定價格顯示
    let priceDisplay = "";
    if (drink.isFood) {
      // 輕食類只顯示固定價格
      priceDisplay = `<p class="card-text text-primary fw-bold">₱${drink.price}</p>`;
    } else if (drink.sizeOnly) {
      // 如果只能選擇特定尺寸，只顯示該尺寸的價格
      const price = drink.sizeOnly === "L" ? drink.largePrice : drink.price;
      priceDisplay = `<p class="card-text text-primary fw-bold">₱${price}</p>`;
    } else {
      // 如果可以選擇L或R，顯示兩個價格
      priceDisplay = `
        <p class="card-text text-primary fw-bold">
          <span class="me-2">R: ₱${drink.price}</span>
          <span>L: ₱${drink.largePrice}</span>
        </p>
      `;
    }

    drinkDiv.innerHTML = `
            <div class="card drink-card" onclick="selectDrink('${category}', '${drink.id}')">
                <div class="card-body text-center">
                    <h6 class="card-title">${drink.name}</h6>
                    ${priceDisplay}
                    <small class="text-muted">${drink.itemCode}</small>
                </div>
            </div>
        `;
    container.appendChild(drinkDiv);
  });
}

// 選擇飲品
function selectDrink(category, drinkId) {
  const drink = drinks[category].items.find((d) => d.id === drinkId);

  // 如果是輕食，直接加入訂單
  if (drink.isFood) {
    // 檢查是否已有相同輕食
    const existingItemIndex = currentOrder.findIndex(
      (item) => item.isFood && item.itemCode === drink.itemCode
    );

    if (existingItemIndex !== -1) {
      // 如果找到相同輕食，增加數量
      currentOrder[existingItemIndex].quantity += 1;
    } else {
      // 如果沒有相同輕食，新增項目
      const orderItem = {
        ...drink,
        id: Date.now(),
        quantity: 1,
        category: category,
        size: "R",
        sweetness: "X",
        ice: "X",
        toppings: ["X"],
        temperature: "X",
      };
      currentOrder.push(orderItem);
    }
    updateOrderDisplay();
    updateTotal();

    // 顯示成功彈窗
    showSuccessModal();
    return;
  }

  // 根據溫度限制設置默認溫度和冰塊
  let defaultTemperature = "cold";
  let defaultIce = "less ice";

  if (drink.temperatureRestriction === "hot") {
    defaultTemperature = "hot";
    defaultIce = "X"; // 熱飲不需要冰塊
  } else if (drink.temperatureRestriction === "cold") {
    defaultTemperature = "cold";
    defaultIce = "less ice";
  } else {
    // 如果是both，預設為冷飲
    defaultTemperature = "cold";
    defaultIce = "less ice";
  }

  selectedDrink = {
    ...drink,
    category: category,
    size: drink.sizeOnly || "L",
    sweetness: "25%",
    ice: defaultIce,
    toppings: ["X"],
    temperature: defaultTemperature,
  };
  showDrinkOptions();
}

// 顯示飲品選項
function showDrinkOptions() {
  if (!selectedDrink) return;

  const container = document.getElementById("drinkCategories");

  // 構建選項HTML
  let optionsHTML = `
        <div class="col-12 mb-3">
            <button class="btn btn-outline-secondary" onclick="renderDrinkCategories()">
                <i class="fas fa-arrow-left me-2"></i>返回類別
            </button>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header bg-success text-white">
                    <h6 class="mb-0">${selectedDrink.name} - 自訂選項</h6>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6 col-6 mb-3">
                            <label class="form-label">尺寸</label>
                            <select class="form-select" onchange="updateDrinkOption('size', this.value)">
                                ${sizes
                                  .filter(
                                    (size) =>
                                      !selectedDrink.sizeOnly ||
                                      selectedDrink.sizeOnly === size.id
                                  )
                                  .map(
                                    (size) =>
                                      `<option value="${size.id}" ${
                                        selectedDrink.size === size.id
                                          ? "selected"
                                          : ""
                                      }>
                                        ${size.name}
                                      </option>`
                                  )
                                  .join("")}
                            </select>
                        </div>`;

  // 溫度選項（根據溫度限制顯示選項）
  optionsHTML += `
                        <div class="col-md-6 col-6 mb-3">
                            <label class="form-label">溫度</label>
                            <select class="form-select" onchange="updateDrinkOption('temperature', this.value)">
                                ${temperatureLevels
                                  .filter((level) => {
                                    if (
                                      selectedDrink.temperatureRestriction ===
                                      "both"
                                    ) {
                                      return true; // 冰熱都可以
                                    } else if (
                                      selectedDrink.temperatureRestriction ===
                                      "cold"
                                    ) {
                                      return level.id === "cold"; // 只能冰飲
                                    } else if (
                                      selectedDrink.temperatureRestriction ===
                                      "hot"
                                    ) {
                                      return level.id === "hot"; // 只能熱飲
                                    }
                                    return true; // 預設都可以
                                  })
                                  .map(
                                    (level) =>
                                      `<option value="${level.id}" ${
                                        selectedDrink.temperature === level.id
                                          ? "selected"
                                          : ""
                                      }>
                                        ${level.name}
                                    </option>`
                                  )
                                  .join("")}
                            </select>
                        </div>`;

  // 甜度選項（所有飲品都需要）
  optionsHTML += `
                        <div class="col-md-6 col-6 mb-3">
                            <label class="form-label">甜度</label>
                            <select class="form-select" onchange="updateDrinkOption('sweetness', this.value)">
                                ${sweetnessLevels
                                  .map(
                                    (level) =>
                                      `<option value="${level.id}" ${
                                        selectedDrink.sweetness === level.id
                                          ? "selected"
                                          : ""
                                      }>
                                        ${level.name}
                                    </option>`
                                  )
                                  .join("")}
                            </select>
                        </div>`;

  // 冰塊選項（只有冷飲才顯示，且不是只能熱飲的饮品）
  if (
    selectedDrink.temperature === "cold" &&
    selectedDrink.temperatureRestriction !== "hot"
  ) {
    optionsHTML += `
                        <div class="col-md-6 col-6 mb-3">
                            <label class="form-label">冰塊</label>
                            <select class="form-select" onchange="updateDrinkOption('ice', this.value)">
                                ${iceLevels
                                  .map(
                                    (level) =>
                                      `<option value="${level.id}" ${
                                        selectedDrink.ice === level.id
                                          ? "selected"
                                          : ""
                                      }>
                                        ${level.name}
                                    </option>`
                                  )
                                  .join("")}
                            </select>
                        </div>`;
  }

  // 配料選項
  if (selectedDrink.allowToppings) {
    optionsHTML += `
                        <div class="col-md-6 col-6 mb-3">
                            <label class="form-label">配料</label>
                            <div class="topping-options">
                                ${toppings
                                  .map(
                                    (topping) =>
                                      `<div class="form-check">
                                        <input class="form-check-input" type="checkbox" 
                                          value="${topping.id}" 
                                          id="topping_${topping.id}"
                                          ${
                                            selectedDrink.toppings.includes(
                                              topping.id
                                            )
                                              ? "checked"
                                              : ""
                                          }
                                          onchange="updateToppings()">
                                        <label class="form-check-label" for="topping_${
                                          topping.id
                                        }">
                                          ${topping.name} ${
                                        topping.price > 0
                                          ? `(+₱${topping.price})`
                                          : ""
                                      }
                                        </label>
                                      </div>`
                                  )
                                  .join("")}
                            </div>
                        </div>`;
  }

  optionsHTML += `
                    </div>
                    <div class="text-center">
                        <button class="btn btn-success" onclick="addToOrder()">
                            <i class="fas fa-plus me-2"></i>加入訂單
                        </button>
                    </div>
                </div>
            </div>
        </div>`;

  container.innerHTML = optionsHTML;
}

// 更新飲品選項
function updateDrinkOption(option, value) {
  if (selectedDrink) {
    selectedDrink[option] = value;

    // 如果溫度改變，重新渲染選項以顯示/隱藏冰塊選項
    if (option === "temperature") {
      // 如果改為熱飲，重置冰塊為X
      if (value === "hot") {
        selectedDrink.ice = "X";
      } else if (value === "cold" && selectedDrink.ice === "X") {
        // 如果改為冷飲且冰塊是X，設為微冰
        selectedDrink.ice = "less ice";
      }
      showDrinkOptions();
    }
  }
}

// 更新配料選擇
function updateToppings() {
  if (!selectedDrink) return;

  const checkedToppings = [];
  const checkboxes = document.querySelectorAll('input[type="checkbox"][value]');

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked && checkbox.value !== "X") {
      checkedToppings.push(checkbox.value);
    }
  });

  // 限制最多只能選擇兩樣配料
  if (checkedToppings.length > 2) {
    // 找到最後一個被勾選的非X配料並取消勾選
    const nonXCheckboxes = Array.from(checkboxes).filter(
      (cb) => cb.value !== "X"
    );
    const checkedNonX = nonXCheckboxes.filter((cb) => cb.checked);

    if (checkedNonX.length > 2) {
      // 取消最後一個勾選的配料
      const lastChecked = checkedNonX[checkedNonX.length - 1];
      lastChecked.checked = false;
      return; // 不更新配料
    }
  }

  // 如果沒有選擇任何配料，預設為X
  if (checkedToppings.length === 0) {
    checkedToppings.push("X");
    // 確保X的checkbox被勾選
    const xCheckbox = document.getElementById("topping_X");
    if (xCheckbox) xCheckbox.checked = true;
  } else {
    // 如果有選擇其他配料，取消X的勾選
    const xCheckbox = document.getElementById("topping_X");
    if (xCheckbox) xCheckbox.checked = false;
  }

  selectedDrink.toppings = checkedToppings;
}

// 加入訂單
function addToOrder() {
  if (!selectedDrink) return;

  // 檢查是否已有相同品項
  const existingItemIndex = currentOrder.findIndex((item) => {
    if (item.isFood) {
      // 輕食類只比較itemCode
      return item.itemCode === selectedDrink.itemCode;
    } else {
      // 飲品類比較所有屬性
      return (
        item.itemCode === selectedDrink.itemCode &&
        item.size === selectedDrink.size &&
        item.sweetness === selectedDrink.sweetness &&
        item.ice === selectedDrink.ice &&
        JSON.stringify(item.toppings) ===
          JSON.stringify(selectedDrink.toppings) &&
        item.temperature === selectedDrink.temperature
      );
    }
  });

  if (existingItemIndex !== -1) {
    // 如果找到相同品項，增加數量
    currentOrder[existingItemIndex].quantity += 1;
  } else {
    // 如果沒有相同品項，新增項目
    const orderItem = {
      ...selectedDrink,
      id: Date.now(),
      quantity: 1,
    };
    currentOrder.push(orderItem);
  }

  selectedDrink = null;
  updateOrderDisplay();
  updateTotal();
  renderDrinkCategories();

  // 顯示成功彈窗
  showSuccessModal();
}

// 顯示成功彈窗
function showSuccessModal() {
  // 創建彈窗元素
  const modal = document.createElement("div");
  modal.className = "success-modal";
  modal.innerHTML = `
    <div class="success-modal-content">
      <div class="success-icon">✓</div>
      <div class="success-text">新增成功</div>
    </div>
  `;

  // 添加到頁面
  document.body.appendChild(modal);

  // 顯示彈窗
  setTimeout(() => {
    modal.classList.add("show");
  }, 10);

  // 自動關閉彈窗
  setTimeout(() => {
    modal.classList.remove("show");
    setTimeout(() => {
      document.body.removeChild(modal);
    }, 300);
  }, 1000);
}

// 更新訂單顯示
function updateOrderDisplay() {
  const container = document.getElementById("orderList");

  if (currentOrder.length === 0) {
    container.innerHTML =
      '<p class="text-muted text-center">尚未選擇任何飲品</p>';
    return;
  }

  container.innerHTML = currentOrder
    .map(
      (item, index) => `
        <div class="order-item">
            <div class="d-flex justify-content-between align-items-start">
                <div class="flex-grow-1">
                    <h6 class="mb-1">${item.name}</h6>
                    <div class="small text-muted">
                        ${
                          item.isFood
                            ? item.itemCode
                            : `${item.itemCode} / ${item.size} / ${
                                item.sweetness
                              } / ${
                                item.temperature === "hot"
                                  ? "hot" // 熱飲顯示hot
                                  : item.ice
                              } / ${
                                item.toppings && item.toppings.length > 0
                                  ? item.toppings.join(",")
                                  : "X"
                              }${
                                item.temperature &&
                                item.temperature !== "X" &&
                                item.temperature !== "cold" &&
                                item.temperature !== "hot"
                                  ? ` / ${item.temperature}`
                                  : ""
                              }`
                        }
                    </div>
                    <div class="mt-2">
                        <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${index}, -1)">-</button>
                        <span class="mx-2">${item.quantity}</span>
                        <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${index}, 1)">+</button>
                        <button class="btn btn-sm btn-outline-danger ms-2" onclick="removeItem(${index})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="text-end">
                    <div class="fw-bold">₱${calculateItemPrice(item)}</div>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

// 計算單項價格
function calculateItemPrice(item) {
  const basePrice =
    item.size === "L" ? item.largePrice || item.price : item.price;

  // 計算配料價格
  let toppingPrice = 0;
  if (item.toppings && item.toppings.length > 0) {
    toppingPrice = calculateToppingPrice(item.toppings);
  }

  return (basePrice + toppingPrice) * item.quantity;
}

// 更新數量
function updateQuantity(index, change) {
  const newQuantity = currentOrder[index].quantity + change;
  if (newQuantity > 0) {
    currentOrder[index].quantity = newQuantity;
    updateOrderDisplay();
    updateTotal();
  }
}

// 移除項目
function removeItem(index) {
  currentOrder.splice(index, 1);
  updateOrderDisplay();
  updateTotal();
}

// 更新總計
function updateTotal() {
  const subtotal = currentOrder.reduce(
    (sum, item) => sum + calculateItemPrice(item),
    0
  );

  // 特約卡折扣計算
  const memberCard = document.getElementById("memberCard").checked;
  const discount = memberCard ? Math.round(subtotal * 0.1) : 0;
  const discountedSubtotal = subtotal - discount;

  const deliveryFee = calculateDeliveryFee();
  const total = discountedSubtotal + deliveryFee;

  document.getElementById("subtotal").textContent = `₱${subtotal}`;

  // 顯示/隱藏折扣行
  const discountRow = document.getElementById("discountRow");
  const discountElement = document.getElementById("discount");
  if (memberCard && discount > 0) {
    discountRow.style.display = "flex";
    discountElement.textContent = `-₱${discount}`;
  } else {
    discountRow.style.display = "none";
    discountElement.textContent = "-₱0";
  }

  document.getElementById("deliveryFee").textContent = `₱${deliveryFee}`;
  document.getElementById("total").textContent = `₱${total}`;
}

// 計算外送費
function calculateDeliveryFee() {
  const deliveryType = document.querySelector(
    'input[name="deliveryType"]:checked'
  ).value;
  if (deliveryType === "pickup") return 0;

  const selectedFee = document.querySelector(
    'input[name="deliveryFee"]:checked'
  );
  return selectedFee ? parseInt(selectedFee.value) : 0;
}

// 產生訂單文字
function generateOrderText() {
  if (currentOrder.length === 0) {
    alert("請先選擇飲品！");
    return;
  }

  const deliveryType = document.querySelector(
    'input[name="deliveryType"]:checked'
  ).value;
  const location = document.getElementById("location").value;

  let orderText = "✏️Order:\n";

  let itemIndex = 1;
  currentOrder.forEach((item) => {
    // 根據數量重複顯示
    for (let i = 0; i < item.quantity; i++) {
      if (item.isFood) {
        orderText += `${itemIndex}. ${item.itemCode}\n`;
      } else {
        const toppingText =
          item.toppings && item.toppings.length > 0
            ? item.toppings.includes("X")
              ? "X"
              : item.toppings.join(",")
            : "X";
        const tempText =
          item.temperature &&
          item.temperature !== "X" &&
          item.temperature !== "cold" &&
          item.temperature !== "hot"
            ? ` / ${item.temperature}`
            : "";
        const iceText = item.temperature === "hot" ? "hot" : item.ice;
        orderText += `${itemIndex}. ${item.itemCode} / ${item.size} / ${item.sweetness} / ${iceText} / ${toppingText}${tempText}\n`;
      }
      itemIndex++;
    }
  });

  orderText += `\n🚚Delivery / Pick Up : ${
    deliveryType === "delivery" ? "Delivery" : "Pick Up"
  }\n`;
  const locationText =
    deliveryType === "pickup" ? "自取" : location || "未填寫";
  orderText += `🌏 Location : ${locationText}\n\n`;

  const subtotal = currentOrder.reduce(
    (sum, item) => sum + calculateItemPrice(item),
    0
  );

  // 特約卡折扣計算
  const memberCard = document.getElementById("memberCard").checked;
  const discount = memberCard ? Math.round(subtotal * 0.1) : 0;
  const discountedSubtotal = subtotal - discount;

  const deliveryFee = calculateDeliveryFee();
  const total = discountedSubtotal + deliveryFee;

  orderText += `商品: ₱${subtotal}\n`;
  if (discount > 0) {
    orderText += `特約卡折扣: -₱${discount}\n`;
  }
  if (deliveryFee > 0) {
    orderText += `外送費: ₱${deliveryFee}\n`;
  }
  orderText += `總計: ₱${total}\n`;

  document.getElementById("orderText").value = orderText;

  const modal = new bootstrap.Modal(document.getElementById("orderTextModal"));
  modal.show();
}

// 複製訂單文字
function copyOrderText() {
  const textArea = document.getElementById("orderText");
  textArea.select();
  document.execCommand("copy");
  alert("訂單文字已複製到剪貼簿！");
}

// 清空訂單
function clearOrder() {
  if (confirm("確定要清空所有訂單嗎？")) {
    currentOrder = [];
    updateOrderDisplay();
    updateTotal();
    selectedDrink = null;
    renderDrinkCategories();
  }
}

// 開啟地圖模態框
function openMapModal() {
  const modal = new bootstrap.Modal(document.getElementById("mapModal"));
  modal.show();
}

// localStorage 相關函數
function saveUserSettings() {
  const rememberSettings =
    document.getElementById("rememberSettings")?.checked || false;

  // 只有在勾選記憶設置時才保存
  if (rememberSettings) {
    const settings = {
      deliveryType:
        document.querySelector('input[name="deliveryType"]:checked')?.value ||
        "delivery",
      deliveryFee:
        document.querySelector('input[name="deliveryFee"]:checked')?.value ||
        "0",
      location: document.getElementById("location").value,
      memberCard: document.getElementById("memberCard").checked,
      rememberSettings: true,
    };
    localStorage.setItem("omniBrewSettings", JSON.stringify(settings));
  } else {
    // 如果取消勾選記憶設置，清除保存的設置
    localStorage.removeItem("omniBrewSettings");
  }
}

function loadUserSettings() {
  const savedSettings = localStorage.getItem("omniBrewSettings");
  if (savedSettings) {
    const settings = JSON.parse(savedSettings);

    // 恢復取餐方式
    const deliveryTypeRadio = document.querySelector(
      `input[name="deliveryType"][value="${settings.deliveryType}"]`
    );
    if (deliveryTypeRadio) {
      deliveryTypeRadio.checked = true;
    }

    // 恢復外送費選擇
    const deliveryFeeRadio = document.querySelector(
      `input[name="deliveryFee"][value="${settings.deliveryFee}"]`
    );
    if (deliveryFeeRadio) {
      deliveryFeeRadio.checked = true;
    }

    // 恢復地址
    if (settings.location) {
      document.getElementById("location").value = settings.location;
    }

    // 恢復特約卡狀態
    if (settings.memberCard !== undefined) {
      document.getElementById("memberCard").checked = settings.memberCard;
    }

    // 恢復記憶設置狀態（如果之前有勾選）
    if (
      settings.rememberSettings &&
      document.getElementById("rememberSettings")
    ) {
      document.getElementById("rememberSettings").checked = true;
    }

    // 觸發相關事件以更新UI
    updateDeliveryUI();
    updateTotal();
  }
}

function updateDeliveryUI() {
  const deliveryType =
    document.querySelector('input[name="deliveryType"]:checked')?.value ||
    "delivery";
  const deliveryFeeSection = document.getElementById("deliveryFeeSection");
  const deliveryLocation = document.getElementById("deliveryLocation");
  const pickupLocation = document.getElementById("pickupLocation");
  const deliveryInfo = document.querySelector(".delivery-info");

  if (deliveryType === "pickup") {
    deliveryFeeSection.style.display = "none";
    deliveryLocation.style.display = "none";
    pickupLocation.style.display = "block";
    deliveryInfo.style.display = "none";
  } else {
    deliveryFeeSection.style.display = "block";
    deliveryLocation.style.display = "block";
    pickupLocation.style.display = "none";
    deliveryInfo.style.display = "block";
  }
}

function clearSavedSettings() {
  localStorage.removeItem("omniBrewSettings");
  alert("已清除所有記憶的設置！");
}

// 監聽外送類型變更
document.addEventListener("DOMContentLoaded", function () {
  const deliveryRadios = document.querySelectorAll(
    'input[name="deliveryType"]'
  );
  deliveryRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      updateTotal();
      saveUserSettings();
      updateDeliveryUI();
    });
  });

  // 監聽外送費選擇變更
  const deliveryFeeRadios = document.querySelectorAll(
    'input[name="deliveryFee"]'
  );
  deliveryFeeRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      updateTotal();
      saveUserSettings();
    });
  });

  // 監聽特約卡變更
  const memberCard = document.getElementById("memberCard");
  if (memberCard) {
    memberCard.addEventListener("change", function () {
      updateTotal();
      saveUserSettings();
    });
  }

  // 監聽地址變更
  const locationTextarea = document.getElementById("location");
  if (locationTextarea) {
    locationTextarea.addEventListener("input", saveUserSettings);
  }
});
