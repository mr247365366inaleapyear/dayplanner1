$(document).ready(function() {
    let timeEl = $('<p>');
    let dayEl = $('<p>');
    let box1 = $('#div1');
    let box2 = $('#div2');
    let box3 = $('#div3');
    let box4 = $('#div4');
    let box5 = $('#div5');
    let box12 = $('#div12');
    let box11 = $('#div11');
    let box10 = $('#div10');
    let box9 = $('#div9');


button9.on('click', function() {
    event.preventDefault();
    if (box9.val() !== '') {
        localStorage.setItem('Entry9', box9.val());
    }
});
button10.on('click', function() {
    event.preventDefault();
    if (box10.val() !== '') {
        localStorage.setItem('Entry10', box10.val());
    }
});
button11.on('click', function() {
    event.preventDefault();
    if (box11.val() !== '') {
        localStorage.setItem('Entry11', box11.val());
    }
});
button12.on('click', function() {
    event.preventDefault();
    if (box12.val() !== '') {
        localStorage.setItem('Entry12', box12.val());
    }
});
button1.on('click', function() {
    event.preventDefault();
    if (box1.val() !== '') {
        localStorage.setItem('Entry1', box1.val());
    }
});
button2.on('click', function() {
    event.preventDefault();
    if (box2.val() !== '') {
        localStorage.setItem('Entry2', box2.val());
    }
});
button3.on('click', function() {
    event.preventDefault();
    if (box3.val() !== '') {
        localStorage.setItem('Entry3', box3.val());
    }
});
button4.on('click', function() {
    event.preventDefault();
    if (box4.val() !== '') {
        localStorage.setItem('Entry4', box4.val());
    }
});
button5.on('click', function() {
    event.preventDefault();
    if (box5.val() !== '') {
        localStorage.setItem('Entry5', box5.val());
    }
});
}