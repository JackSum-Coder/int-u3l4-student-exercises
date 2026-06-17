// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`

// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {
        myName.innerHTML = "Lucas";





});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.

image1Button.addEventListener('click', function() {
    image.src="https://media.tenor.com/6gpbqWCQKzsAAAAM/apple-eating-apple.gif";
})



// 5. Add an event listener to the `image2Button`
image2Button.addEventListener('click', function(){
    image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlx5ghJbIsid6y9nqQT9sQffhwj1kiqNZP6UZpVs5ai4aSESGa4vb8jtO6&s=10";
})
// 6. When clicked, it should change the source of `image` to another image URL.


// BONUS
// 7. Try using different event types for your buttons.
image2Button.addEventListener('mouseover', function(){
    myHobby.innerHTML="apples"
})

image2Button.addEventListener('mouseleave', function(){
    myHobby.innerHTML="bananas"
})
