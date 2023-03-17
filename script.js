let left= document.getElementsByClassName('bxs-left-arrow')[0];
let right=document.getElementsByClassName('bxs-right-arrow')[0];
let boxes=document.getElementsByClassName('boxes')[0];

left.addEventListener('click', () => {
    boxes.scrollLeft -= 140;
});
right.addEventListener('click', () => {
    boxes.scrollLeft += 140;
});

$(document).ready(function(){
    $("#exampleModal").modal('show');
});