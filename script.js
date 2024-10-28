(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-mob-open]"),
    closeModalBtn: document.querySelector("[data-mob-close]"),
    modal: document.querySelector("[data-mob]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-sctoll");
  }
})();

function printPDF() {
  const pdfWindow = window.open("./cv/DMITRO CHAIKA HR.pdf");
  pdfWindow.onload = function () {
    pdfWindow.print();
  };
}
const header = document.querySelector(".header-container");
console.log(header);
const logo = `<a class="logo-link" href="index.html">
            <svg class="seagull-logo">
              <use href="./images/icons.svg#icon-Seagull-2"></use>
            </svg>
          </a>`;
header.insertAdjacentHTML("afterbegin", logo);
