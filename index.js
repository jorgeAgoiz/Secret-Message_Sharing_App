const { hash } = window.location;//Destructuring

const message = atob(hash.replace('#', ''));//Take the base64 hash and encode to normal string
if(message){//If message is true show the String in another div
    document.querySelector('#messageForm').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;//Insert the message in H1
};

document.querySelector('form').addEventListener('submit', event => {
    
    event.preventDefault();//This function is for not to reload the page

    document.querySelector('#messageForm').classList.add('hide');
    document.querySelector('#linkForm').classList.remove('hide');

    const input = document.querySelector('#messageInput');
    console.log(input.value);
    //btoa() function to convert a string in base64 encrypted
    const encrypted = btoa(input.value);

    const linkInput = document.querySelector('#linkInput');
    linkInput.value = `${window.location}#${encrypted}`;//Insert the complete link with the string encoded
    linkInput.select();//With this the link are selected from the beginning

    console.log(window.location);//Interesting object to our project

});