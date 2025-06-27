// === STATE === //
let numberBank = [];
let oddNumbers = [];
let evenNumbers = [];

// === RENDERING FUNCTIONS === //
function renderApp() {
  const app = document.getElementById("app");
  app.innerHTML = ""; // Clear the screen before rerendering

  app.appendChild(renderForm());
  app.appendChild(renderNumberBank());
  app.appendChild(renderSortButton());
  app.appendChild(renderSortFirstButton());
  app.appendChild(renderSortedCategories());
  app.appendChild(renderRemoveButton());
}

function renderForm() {
  const form = document.createElement("form");

  const input = document.createElement("input");
  input.type = "number";
  input.placeholder = "Enter a number";
  input.required = true;

  const button = document.createElement("button");
  button.textContent = "Add Number";
  button.classList.add("button");

  form.appendChild(input);
  form.appendChild(button);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = parseInt(input.value);

    if (!isNaN(value)) {
      numberBank.push(value);
      input.value = "";
      renderApp(); // Re-render on state change
    }
  });

  return form;
}
// === NumberBank === //
function renderNumberBank() {
  const container = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = "Number Bank";
  container.appendChild(title);

  const list = document.createElement("ul");
  numberBank.forEach((num) => {
    const li = document.createElement("li");
    li.textContent = num;
    list.appendChild(li);
  });

  container.appendChild(list);
  return container;
}
// === Sort First Button for the NumberBank === //
function renderSortFirstButton() {
  const button = document.createElement("button");
  button.textContent = "Sort First";
  button.type = "button";
  button.classList.add("button");

  button.addEventListener("click", () => {
    if (numberBank.length === 0) return; // Do nothing if the bank is empty
    const first = numberBank.shift(); // Remove first number
    if (first % 2 === 0) {
      evenNumbers.push(first);
    } else {
      oddNumbers.push(first);
    }
    renderApp(); // Re-render with updated state
  });
  return button;
}
// === Sort Button for the NumberBank === //
function renderSortButton() {
  const button = document.createElement("button");
  button.textContent = "Sort All";
  button.classList.add("button");

  // === Sort Numbers Into Categories === //
  button.addEventListener("click", () => {
    numberBank.forEach((num) => {
      if (num % 2 === 0 && !evenNumbers.includes(num)) {
        evenNumbers.push(num);
      } else if (num % 2 !== 0 && !oddNumbers.includes(num)) {
        oddNumbers.push(num);
      }
    });
    renderApp(); // Re-render on state change
  });
  return button;
}
// === Remove Button for the NumberBank === //
function renderRemoveButton() {
  const button = document.createElement("button");
  button.textContent = "Remove All";
  button.classList.add("button");

  button.addEventListener("click", () => {
    numberBank = [];
    oddNumbers = [];
    evenNumbers = [];
    renderApp();
  });
  return button;
}
// === Render Odds and Evens === //
function renderSortedCategories() {
  const container = document.createElement("div");

  const oddTitle = document.createElement("h3");
  oddTitle.textContent = "Odd Numbers";
  const oddList = document.createElement("ul");
  oddNumbers.forEach((num) => {
    const li = document.createElement("li");
    li.textContent = num;
    oddList.appendChild(li);
  });

  const evenTitle = document.createElement("h3");
  evenTitle.textContent = "Even Numbers";
  const evenList = document.createElement("ul");
  evenNumbers.forEach((num) => {
    const li = document.createElement("li");
    li.textContent = num;
    evenList.appendChild(li);
  });

  container.appendChild(oddTitle);
  container.appendChild(oddList);
  container.appendChild(evenTitle);
  container.appendChild(evenList);

  return container;
}

// ---------- INITIALIZE ----------
document.addEventListener("DOMContentLoaded", () => {
  renderApp();
});
