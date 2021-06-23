// let button = document.getElementById("get-activity");
// button.addEventListener("click", getActivity);

function getActivity() {
  console.log("button click");
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then(
      (data) =>
        (document.getElementById("activity").textContent = data.activity)
    );
}
