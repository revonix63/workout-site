
function openPopup(link) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("gumroadFrame").src = link;

  // Poll for redirect
  const frame = document.getElementById("gumroadFrame");
  const interval = setInterval(() => {
    if (frame.contentWindow.location.href.includes("thank_you")) {
      clearInterval(interval);
      document.getElementById("popup").style.display = "none";
      document.getElementById("thankyou").classList.remove("hidden");
    }
  }, 1000);
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
