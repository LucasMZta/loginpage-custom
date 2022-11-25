const revealPasswordButton = document.querySelector("#reveal-password");
const inputPassword = document.querySelector("#passwordLogin");
const circleLogin = document.querySelector('.login .circle');
const circleSubs = document.querySelector('.subscribe .circle');

const onChangeRevealPassword = () => {
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    revealPasswordButton.classList.replace("bi-eye-slash", "bi-eye");
  } else {
    inputPassword.type = "password";
    revealPasswordButton.classList.replace("bi-eye", "bi-eye-slash");
  }
};

revealPasswordButton.onclick = onChangeRevealPassword;

circleLogin.addEventListener('click',() => {
  const subscribe = document.querySelector('.subscribe');
  const login = document.querySelector('.login');

  subscribe.classList.remove('oculto');
  login.classList.add('oculto');
})
circleSubs.addEventListener('click',() => {
  const subscribe = document.querySelector('.subscribe');
  const login = document.querySelector('.login');

  subscribe.classList.add('oculto');
  login.classList.remove('oculto');
})