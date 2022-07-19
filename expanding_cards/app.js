const panels=document.querySelectorAll('.panel')
//for (let i=0; i < panels.length; i++){
    //panels[i].addEventListener('click', function(){
       
        //panels[i].classList.add('active');
    //});
//}
panels.forEach(function(panel){
    panel.addEventListener('click', function(){
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(function(panel){
            panel.classList.remove('active')
        });
    }