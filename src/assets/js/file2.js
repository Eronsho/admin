console.log("file 2");
function handleFileSelect(evt) {
  const file = evt.target.files; // FileList object
  const f = file[0];
  // Only process image files.
  if (!f.type.match("image.*")) {
    alert("Image only please....");
  }
  const reader = new FileReader();
  // Closure to capture the file information.
  reader.onload = (function (theFile) {
    return function (e) {
      // Render thumbnail.
      const span = document.createElement("span");
      span.innerHTML = [
        '<img class="thumb" title="',
        escape(theFile.name),
        '" src="',
        e.target.result,
        '" />',
      ].join("");
      document.getElementById("output").insertBefore(span, null);
    };
  })(f);
  // Read in the image file as a data URL.
  reader.readAsDataURL(f);
}
document
  .getElementById("file")
  .addEventListener("change", handleFileSelect, false);
// -----------------------------------------------------------------
function handleFileSelects(evt) {
  var files = evt.target.files; // FileList object
  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0, f; (f = files[i]); i++) {
    // Only process image files.
    if (!f.type.match("image.*")) {
      alert("Image only please....");
    }
    var reader = new FileReader();
    // Closure to capture the file information.
    reader.onload = (function (theFile) {
      return function (e) {
        // Render thumbnail.
        var span = document.createElement("span");
        span.innerHTML = [
          '<img class="thumb" title="',
          escape(theFile.name),
          '" src="',
          e.target.result,
          '" />',
        ].join("");
        document.getElementById("outputMulti").insertBefore(span, null);
      };
    })(f);
    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
}
document
  .getElementById("fileMulti")
  .addEventListener("change", handleFileSelects, false);
