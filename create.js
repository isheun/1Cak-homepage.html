const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");
const imageView2 = document.getElementById("selected-image");
const nextButton = document.getElementById("nextButton")


inputFile.addEventListener("change", uploadImage);

// upload image function

function uploadImage() {
    if (inputFile.files.length > 0) {
        let imgLink = URL.createObjectURL(inputFile.files[0]);
        imageView.style.backgroundImage = `url(${imgLink})`;
        imageView.textContent = "";
        imageView.style.border = 0;

        try {
            localStorage.setItem('selectedImage', imgLink);
        } catch (e) {
            console.error('Error setting item in localStorage:', e);
        }

        nextButton.classList.add('active')
    } else {
        console.error('No file selected.');
    }
}

dropArea.addEventListener("dragover", function(e){
  e.preventDefault();
});

dropArea.addEventListener("drop", function(e){
  e.preventDefault();
  inputFile.files = e.dataTransfer.files;
  uploadImage();
});

// edits and adjustments function

const editsButton = document.getElementById('edits')
const adjustmentsButton = document.getElementById('adjustments')
const editsElement = document.getElementById('edit-items')
const adjustmentsElement = document.getElementById('adjust-items')

document.addEventListener('DOMContentLoaded', function(){
  editsButton.classList.add('active')
  editsElement.classList.add('active')

  editsButton.addEventListener('click', () => {
    editsButton.classList.add('active')
    adjustmentsButton.classList.remove('active')
    editsElement.classList.add('active')
    adjustmentsElement.classList.remove('active')
  })
  adjustmentsButton.addEventListener('click', () => {
    adjustmentsButton.classList.add('active')
    editsButton.classList.remove('active')
    adjustmentsElement.classList.add('active')
    editsElement.classList.remove('active')
  })
})

// redirect to create2

function viewSelectedImage(){
  window.location.href = 'create2.html'
}

nextButton.addEventListener("click", viewSelectedImage)