document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const inputMessage = document.querySelector("#message-input");
  const encrypted = btoa(inputMessage.value);

  const inputLink = document.querySelector("#link-input");
  inputLink.value = `${window.location}#${encrypted}`;
  inputLink.select();
});
