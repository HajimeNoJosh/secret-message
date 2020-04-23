document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  const inputMessage = document.querySelector("#message-input");
  const encrypted = btoa(inputMessage.value);

  const inputLink = document.querySelector("#link-input");
  inputLink.value = `${window.location}#${encrypted}`;
  inputLink.select();
});
