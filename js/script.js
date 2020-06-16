const validate = () => {
  let email = document.getElementById("email").value;
  let check = validateEmail(email);
  if (!email || !check) {
    showMessage();
  } else {
    disableMessage();
  }
};

const validateEmail = (email) =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

const showMessage = () => {
  try {
    let element = document.getElementsByClassName("validate");
    element.item(0).classList.add("active");
    element = document.getElementsByName("email");
    element.item(0).classList.add("active");
  } catch (error) {}
};

const disableMessage = () => {
  try {
    let element = document.getElementsByClassName("validate");
    element.item(0).classList.remove("active");
    element = document.getElementsByName("email");
    element.item(0).classList.remove("active");
  } catch (error) {}
};
