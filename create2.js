const uploadForm = document.getElementById('upload-form')
const errorElement = document.getElementById('error')
const errorElement2 = document.getElementById('error2')

// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', (event) => {
    // Retrieve imgLink from localStorage
    let imgLink = localStorage.getItem('selectedImage');

    console.log('Image URL:', imgLink);
    
    // Set imgLink to imageView2
    if (imgLink) {
      document.getElementById('selected-image').style.backgroundImage = `url(${imgLink})`;
    }
});


const validationEvent = (event) => {
    event.preventDefault()

    const titleElement = document.getElementById('title')
    const categoryElement = document.getElementById('category')

    let title = false
    let category = false

    // title form must be filled
    if (titleElement.value == null || titleElement.value === ''){
        errorElement.innerHTML = 'This field is required'

    }
    else {
        errorElement.innerHTML = ''
        title = true
    }

    // must select category
    if (categoryElement.value == 'notselected'){
        errorElement2.innerHTML = 'Please select a category'
    }
    else {
        errorElement2.innerHTML = ''
        category = true
    }

    // redirect to homepage
    if (title && category){
        window.location.href = 'homepage.html'
    }
}

uploadForm.addEventListener('submit', validationEvent)