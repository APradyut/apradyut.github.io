function documentOnload() {
  verifyCSSGrid();
  displayDownloadResumeBtn(false);
}
function verifyCSSGrid() {
  // create a div (could also reuse a known element)
  var el = document.createElement("div");
  // detect support
  var supports_grid = typeof el.style.grid === "string";
  // add the output to the bucket
  if (!supports_grid) {
    alert("This browser is out dated and might not open the website properly");
  }
}
function displayDownloadResumeBtn(showBtn) {
  if (!showBtn) {
    var downloadBtn = document.getElementById("downloadResumeBtn");
    downloadBtn.classList.add("display-none");
  }
}
function downloadResume() {
  var resumeURL =
    "https://github.com/APradyut/apradyut.github.io/raw/master/Resume%20NET.pdf";
  download(resumeURL);
}

function download(url) {
  var element = document.createElement("a");
  element.setAttribute("href", url);
  element.setAttribute("download", "Resume - Adarsh Pradyut");

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
