function hideElements(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
    }
    
    function showElements(elementId){
        const element = document.getElementById(elementId);
        element.classList.remove('hidden');
        }
    
    
     function setbackgroundColor(elementId){
        const element = document.getElementById(elementId);
        element.classList.add('bg-orange-400');
     } 
     function removebackgroundColor(elementId){
       const element = document.getElementById(elementId);
       element.classList.remove('bg-orange-400');
    } 
    function selectNow(){
       hideElements('home-screen');
     showElements('successful-page');
     }

     function continueNow(){
        hideElements('successful-page');
        showElements('home-screen');
     }