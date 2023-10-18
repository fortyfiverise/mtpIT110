document.addEventListener("DOMContentLoaded", function () {
  const openModalButton = document.getElementById("openModal");
  const openModalButtonsm = document.getElementById("openModalsm");
  const modal = document.getElementById("modal");
  const modalOverlay = document.getElementById("modal-bg");
  const modalClose = document.getElementById("close-modal");

  openModalButton.addEventListener("click", () => {
    openModal();
  });

  openModalButtonsm.addEventListener("click", () => {
    openModal();
  });

  modalOverlay.addEventListener("click", () => {
    closeModal();
  });

  modalClose.addEventListener("click", () => {
    closeModal();
  });

  function closeModal() {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
  }

  function openModal() {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
});
