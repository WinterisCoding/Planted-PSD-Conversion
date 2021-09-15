// 1. Capture User Input from Form on event "submit"
//  1a. add event listener to the form for the submit even
//  1b. Prevent the default form behavior
//  1c. Get the value the user wrote from the page
//    - Create a variable to hold the userName
//    - Create a variable to hold the userEmail
//    - Create a variable to hold the UserComment
//  1d. Clear the input after submission

// 2. Display the comment on the page
//  2a. create a new HTML "comment-box" element and populate it
//    2ab. Create a "Comment-image-container" and a "comment-text-container" within
//        -Create an <h6> element and a <p> element within the "text-container"
//        -Add "date" to H6 element
//        -Add user comment to <p> element
//  2b. Get the "Comment-Container" from the page and append our new comment


// Get the Form From the page
const formElement = document.querySelector('.post-comment')

// add an event listener to the form for "submit event"
formElement.addEventListener('submit', function(event) {
// prevent the default behavior of the submit event
  event.preventDefault();
  
// Get the 'name' input from the page
  const inputName = document.querySelector('#name');
// Store the user's "Name" input in a variable
  const userName = inputName.value;

// Get the "comment" input from the page
  const inputComment = document.querySelector('#comment')
// Store the user's "Comment" in a variable
  const userComment = inputComment.value;

  postComment(userName, userComment);
});

const postComment = function(userName, userComment) {
  const newCommentBox = document.createElement('div');
  newCommentBox.innerHTML = `
  <div class="comment-image-container">
    <img src="https://placekitten.com/200/300" alt="">
  </div> <!-- end of box image-container -->
  <div class="comment-text-container">
    <h6 class="commentHeading"></h6>
    <p class="commentParagraph"></p>
  </div> <!--end of box text-container -->
</div> <!-- end of comment-box1-->`

  const newParagraph = newCommentBox.querySelector('.commentParagraph');
  newParagraph.textContent = userComment;

  const newHeading = newCommentBox.querySelector('.commentHeading');
  newHeading.textContent = userName;

  const containerElement = document.querySelector('.comment-container');
  containerElement.appendChild(newCommentBox)
};