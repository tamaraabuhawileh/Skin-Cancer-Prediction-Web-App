function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var uploadedImg = document.getElementById('uploadedImg');
      if (uploadedImg) {
        uploadedImg.style.backgroundImage = 'url(' + e.target.result + ')';
      }
    };

    reader.readAsDataURL(input.files[0]);
  }
}

window.onload = function () {
  var form = document.getElementById('imageUploadForm');
  var fileInput = document.getElementById('file');
  var uploadedImg = document.getElementById('uploadedImg');
  var helpText = document.getElementById('helpText');

  if (fileInput && form && uploadedImg && helpText) {
    fileInput.addEventListener('change', function () {
      readURL(this);
      form.classList.add('loading');
    });

    uploadedImg.addEventListener('animationend', function () {
      form.classList.add('loaded');
    });

    helpText.addEventListener('animationend', function () {
      setTimeout(function () {
        fileInput.value = '';
        form.classList.remove('loading', 'loaded');
      }, 5000);
    });
  }
};
function uploadImage(input) {
  var form = document.getElementById('imageUploadForm');
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var uploadedImg = document.getElementById('uploadedImg');
      if (uploadedImg) {
        uploadedImg.style.backgroundImage = 'url(' + e.target.result + ')';
        form.submit(); // Submit the form once the file is picked and image is displayed
      }
    };

    reader.readAsDataURL(input.files[0]);
  }
}
