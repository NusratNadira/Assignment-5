function hideElements(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
    }
    
    function showElements(elementId){
        const element = document.getElementById(elementId);
        element.classList.remove('hidden');
        }
    function Show(){
        showElements('select-seat');
    }
        function getTextElementValueById(elementId){
            const element = document.getElementById(elementId);
            const value= element.innerText ;
            return value;
            }

            function setTextElementValueById(elementId , value){
            const element = document.getElementById(elementId);
             element.innerText=value;
            }

     function setbackgroundColor(elementClass){
        const element = document.getElementsByClassName(elementClass);
        element.classList.add('bg-green-400');
     } 
     function removebackgroundColor(elementId){
       const element = document.getElementById(elementId);
       element.classList.remove('bg-green-400');
    } 
    function selectNow(){
       hideElements('home-screen');
     showElements('successful-page');
     }

     function continueNow(){
        hideElements('successful-page');
        showElements('home-screen');
     }

     const allseat =document.getElementsByClassName('a');

     

     let count=0;
let leftSeat = 8;
     for(const seat of allseat){
        seat.addEventListener('click', function(e){
            setbackgroundColor(seat);
count= count+1;
leftSeat = leftSeat-1;
setTextElementValueById('seat-count',count);
setTextElementValueById('seat-remain' , leftSeat);

if(count == 4){
    alert("You can not select no more seat!");
}

//setbackgroundColor(seat);
        })
     }