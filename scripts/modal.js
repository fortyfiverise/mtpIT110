document.addEventListener("DOMContentLoaded", function () {
  const openModalButton = document.getElementById("openModal");
  const openModalButtonsm = document.getElementById("openModalsm");
  const modal = document.getElementById("modal");
  const modalOverlay = document.getElementById("modal-bg");
  const modalClose = document.getElementById("close-modal");

  const submitbtn = document.getElementById("submit");
  const messageResult = document.getElementById("messageResult");

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

  submitbtn.addEventListener("click", () => {
    try {
      console.log("test");
      var name = document.getElementById("nameInput");
      var email = document.getElementById("emailInput");
      var message = document.getElementById("messageInput");

      if (name.value.trim() === "") {
        throw new Error("Please enter your name");
      }

      if (email.value.trim() === "") {
        throw new Error("Please enter your email");
      }

      var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email.value)) {
        throw new Error("Please enter a valid email address");
      }

      if (message.value.trim() === "") {
        throw new Error("Please enter your message");
      }

      name.value = "";
      email.value = "";
      message.value = "";

      messageResult.innerHTML = "<span class='text-green-500'>Sent!</span>";
    } catch (error) {
      messageResult.innerHTML =
        "<span class='text-red-500'>" + error.message + "</span>";
    }
  });
});
