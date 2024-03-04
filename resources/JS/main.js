  
  const messages = [
    'There is space for me to grow.',
    'Do not let what you cannot do interfere with what you can do.',
    'If someone else can do it, there\'s no reason you cannot do it.',
    'Focus on do-ing, not don\'t-ing.'
  ];
  const authors = [
    'Unknown',
    'John Wooden',
    'Unknown',
    'Unknown'
  ];
  
  

  function myFunction() {

    let randomNumber = Math.floor(Math.random()*messages.length);
    let messageText = document.getElementById('message');
    let authorText = document.getElementById('author');
    console.log(messageText);

    messageText.textContent = messages[randomNumber];
    authorText.textContent = '~ ' + authors[randomNumber];

  }

  let button = document.getElementById('myButton');

  button.addEventListener('click', myFunction);