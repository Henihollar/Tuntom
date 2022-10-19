const button = document.getElementById('button');



button.addEventListener('click', ()=> {
const input = document.querySelector('input').value;
const textarea = document.getElementById('textMessage').value;
if(input !== "" && textarea !== ""){
    alert("Response Sent Successfully !");
    window.setTimeout(() => {
       location.assign('/'); 
    }, 3000);
}else{
    alert('Field is Empty')
}
})




