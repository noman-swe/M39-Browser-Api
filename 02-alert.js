// alert('MA is comming');

const maComming = () => {
    alert('AMMU is comming! open the book.');
};

const askPicnic = () => {
    const response = confirm('are you comming?');
    console.log(response);
     if(response === true){
         alert('Amak tk de');
     }else{
         console.log('Tui gia Mor');
     }
}

const askName = () => {
    const name = prompt('What is yout Name?');
    if(name != false){
        console.log(name);
    }else{
        alert('Enter Your name Plz');
    }
}