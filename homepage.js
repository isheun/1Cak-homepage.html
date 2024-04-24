// document.querySelectorAll(".post1").forEach(post1 => {
//     const postId = post1.dataset.postId;
//     const ratings = post.querySelectorAll(".post1");
//     const likeRating = ratings[0];

//     ratings.forEach(rating => {
//         const button = rating.querySelector(".like-button");
//         const count = rating.querySelector(".like-count");

//         button.addEventListener("click", async () => {
//             if(rating.classList.contains("like-selected")){
//                 return;
//             }

//             count.textContent = Number(count.textContent) + 1;

//             ratings.forEach(rating => {
//                 if(rating.classList.contains("like-selected")){
//                     const count = rating.querySelector(".like-count");
//                     count.textContent = Math.min(0, Number(count.textContent) - 1);
//                     rating.classList.remove("like-selected");
//                 }
//             });

//             rating.classList.add("like-selected");

//             const likeOrDislike = likeRating === rating ? "like" : "disike";
//             const response = await fetch(`/posts/${poistId}/${likeOrDislike}`);
//             const body = await response.json();
//         });
//     })
// });

// document.querySelectorAll('.like-button').forEach(button => {
//     button.addEventListener('click', () => {
//         const action = button.dataset.action;
//         const countElement = button.nextElementSibling;
//         const otherButton = button.parentElement.nextElementSibling.querySelector('.like-button');
//         const otherCountElement = otherButton.nextElementSibling;
        
//         let count = parseInt(countElement.textContent);
//         let otherCount = parseInt(otherCountElement.textContent);
        
//         if (action === 'like') {
//             if (!button.classList.contains('active') && !otherButton.classList.contains('active')) {
//                 button.classList.add('active');
//                 count++;
//                 countElement.textContent = count;
//             }
//             else if (!button.classList.contains('active') && otherButton.classList.contains('active')) {
//                 button.classList.add('active');
//                 count++;
//                 countElement.textContent = count;

//                 otherButton.classList.remove('active');
//                 otherCount--;
//                 otherCountElement.textContent = otherCount;
//             }
//             else if(button.classList.contains('active')){
//                 button.classList.remove('active');
//                 count--;
//                 countElement.textContent = count;
//             }
//         } 
//         else if (action === 'dislike') {
            // if (!otherButton.classList.contains('active')) {
            //     otherButton.classList.add('active');
            //     otherCount++;
            //     otherCountElement.textContent = otherCount;
            // }
            // else if(otherButton.classList.contains('active')){
            //     otherButton.classList.remove('active');
            //     otherCount--;
            //     otherCountElement.textContent = count;
            // }

            // if (!button.classList.contains('active')) {
            //     button.classList.add('active');
            //     count++;
            //     countElement.textContent = count;

            //     otherButton.classList.remove('active');
            //     otherCount--;
            //     otherCountElement.textContent = otherCount;
            // } else {
            //     button.classList.remove('active');
            //     count--;
            //     countElement.textContent = count;
            // }

            // if (!button.classList.contains('active')) {
            //     button.classList.add('active');
            //     count++;
            //     countElement.textContent = count;
                
            //     otherButton.classList.remove('active');
            //     otherCount--;
            //     otherCountElement.textContent = otherCount;
            // }
//         }

//          button.style.color = button.classList.contains('active') ? 'blue' : '';
//         otherButton.style.color = otherButton.classList.contains('active') ? 'blue' : '';

//     });
// });

// document.querySelectorAll('.like-button').forEach(button => {
//     button.addEventListener('click', () => {
//         const action = button.dataset.action;
//         const countElement = button.nextElementSibling;
//         const count = parseInt(countElement.textContent);

//         if (!button.classList.contains('active')) {
//             button.classList.add('active');
//             countElement.textContent = count + 1;
//         } else {
//             button.classList.remove('active');
//             countElement.textContent = count - 1;
//         }

//         const otherButton = button.parentElement.querySelector('.like-button:not([data-action="' + action + '"])');
//         console.log(otherButton)
//         const otherCountElement = otherButton.nextElementSibling;

//         otherButton.classList.remove('active');
//         otherCountElement.textContent = otherButton === button ? count : parseInt(otherCountElement.textContent);
//     });
// });

// let isLiked = false;
// let isDisliked = false;

// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelectorAll('.like-button').forEach(button => {
//         button.addEventListener('click', () => {
//             const action = button.dataset.action;
//             const countElement = button.nextElementSibling;
//             const count = parseInt(countElement.textContent);

//             if (!button.classList.contains('active')) {
//                 if(isDisliked == false)
//                 {
//                     isLiked = true;
//                     button.classList.add('active');
//                     countElement.textContent = count + 1;
//                 }
//                 else if(isDisliked == true)
//                 {
//                     button.classList.remove('active');
//                     countElement.textContent = count - 1;
//                     isDisliked = false;
//                 }
//             } else {
//                 if(isLiked == true)
//                 {
//                     button.classList.remove('active');
//                     countElement.textContent = count - 1;
//                     isLiked = false;
//                 }
//             }
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelectorAll('.dislike-button').forEach(button => {
//         button.addEventListener('click', () => {
//             const action = button.dataset.action;
//             const countElement = button.nextElementSibling;
//             const count = parseInt(countElement.textContent);

//             if (!button.classList.contains('active')) {
//                 if(isLiked == false)
//                 {
//                     isDisliked = true;
//                     button.classList.add('active');
//                     countElement.textContent = count + 1;
//                 }
//                 else if(isDisliked == true)
//                 {
//                     button.classList.remove('active');
//                     countElement.textContent = count - 1;
//                     isLiked = false;
//                 }
//             } else {
//                 if(isDisliked == true)
//                 {
//                     button.classList.remove('active');
//                     countElement.textContent = count - 1;
//                     isDisliked = false;
//                 }
//             }
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const likeButtons = document.querySelectorAll('.like-button');
    const dislikeButtons = document.querySelectorAll('.dislike-button');

    likeButtons.forEach(likeButton => {
        likeButton.addEventListener('click', () => {
            if (!likeButton.classList.contains('active')) {
                likeButton.classList.add('active');
                const countElement = likeButton.nextElementSibling;
                const count = parseInt(countElement.textContent);
                countElement.textContent = count + 1;

                // Disable all dislike buttons
                dislikeButtons.forEach(dislikeButton => {
                    dislikeButton.disabled = true;
                });
            } else {
                likeButton.classList.remove('active');
                const countElement = likeButton.nextElementSibling;
                const count = parseInt(countElement.textContent);
                countElement.textContent = count - 1;

                // Enable all dislike buttons
                dislikeButtons.forEach(dislikeButton => {
                    dislikeButton.disabled = false;
                });
            }
        });
    });

    dislikeButtons.forEach(dislikeButton => {
        dislikeButton.addEventListener('click', () => {
            if (!dislikeButton.classList.contains('active')) {
                dislikeButton.classList.add('active');
                const countElement = dislikeButton.nextElementSibling;
                const count = parseInt(countElement.textContent);
                countElement.textContent = count + 1;

                // Disable all like buttons
                likeButtons.forEach(likeButton => {
                    likeButton.disabled = true;
                });
            } else {
                dislikeButton.classList.remove('active');
                const countElement = dislikeButton.nextElementSibling;
                const count = parseInt(countElement.textContent);
                countElement.textContent = count - 1;

                // Enable all like buttons
                likeButtons.forEach(likeButton => {
                    likeButton.disabled = false;
                });
            }
        });
    });
});


document.querySelectorAll('.saved-buttonn').forEach(button => {
    button.addEventListener('click', () => {
        const action = button.dataset.action;
        const countElement = button.nextElementSibling;
        const count = parseInt(countElement.textContent);

        if (!button.classList.contains('active')) {
            button.classList.add('active');
            countElement.textContent = count + 1;
        } else {
            button.classList.remove('active');
            countElement.textContent = count - 1;
        }
        
    });
});