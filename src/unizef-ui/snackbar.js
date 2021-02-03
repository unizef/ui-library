import "./styles/snackbar.css";

class Snackbar {
  constructor(form) {
    this.snackbar = document.createElement("div");
    this.button = document.querySelector(".btn-default");
    this.form = form;
  }
  init() {
    this.snackbar.classList.add("snackbar");
    document.querySelector("body").appendChild(this.snackbar);
  }
  enterSnack() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const snack = this.form.msg.value.trim();
      if (snack.length) {
        this.show(snack);
        this.form.reset();
      }
    });
  }

  // Show user message
  show(snack) {
    this.snackbar.innerText = snack;

    this.snackbar.classList.add("active");

    setTimeout(() => {
      this.snackbar.classList.remove("active");
    }, 4000);
  }

  // Show default message
  showDefault() {
    this.button.addEventListener("click", () => {
      this.show("Default Snack!");
    });
  }
}

export { Snackbar as default };
