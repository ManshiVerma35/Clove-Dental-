function generateCaptcha() {
  const captcha = Math.floor(1000 + Math.random() * 9000);
  document.getElementById("captcha-box").innerText = captcha;
}

document.addEventListener("DOMContentLoaded", () => {
  generateCaptcha();

  const form = document.getElementById("consultation-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted!");
    form.reset();
    generateCaptcha();
  });
});
