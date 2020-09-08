var text = document.getElementById('text');
var output = document.getElementById('output')
var count;


text.addEventListener('input',function(e){
    count=e.target.value;
    output.textContent=count.length;
})