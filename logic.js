window.onload=function() {
    document.getElementById('section--0').addEventListener('click', function() {
        console.log('Worked');
        document.getElementById('section-0').style.display="block";
    });
    document.querySelector('.close-0').addEventListener('click', function() {
        console.log('Closed');
        document.getElementById('section-0').style.display="none";
    });
    document.getElementById('section--1').addEventListener('click', function() {
        console.log('Worked');
        document.getElementById('section-1').style.display="block";
    });
    document.querySelector('.close-1').addEventListener('click', function() {
        console.log('Closed');
        document.getElementById('section-1').style.display="none";
    });
    document.getElementById('section--2').addEventListener('click', function() {
        console.log('Worked');
        document.getElementById('section-2').style.display="block";
    });
    document.querySelector('.close-2').addEventListener('click', function() {
        console.log('Closed');
        document.getElementById('section-2').style.display="none";
    });
    document.getElementById('section--3').addEventListener('click', function() {
        console.log('Worked');
        document.getElementById('section-3').style.display="block";
    });
    document.querySelector('.close-3').addEventListener('click', function() {
        console.log('Closed');
        document.getElementById('section-3').style.display="none";
    });
};