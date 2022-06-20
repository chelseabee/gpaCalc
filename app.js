var termInput = document.getElementById("termInput");
var termSeason = document.getElementById("termSeason");
var addTermBtn = document.getElementById("submitTerm");
var termDisplay = document.getElementById("termDisplay");
var classNames = document.getElementById("classes");
var classInput = document.getElementById("classNameInput");
var newClassList = document.getElementById("classDisplay");
var addClassBtn = document.getElementById("submitClass");
var gpaInput = document.getElementById("gpaInput");
gpaArray = [];






addTermBtn.addEventListener("click", function(e){
e.preventDefault();
termDisplay.style.display = "block";
termDisplay.textContent = termSeason.value + " " + termInput.value; 
document.getElementById("classForm").classList.toggle('hidden');
document.getElementById('termForm').classList.toggle('hidden'); 
});

addClassBtn.addEventListener("click", function(e){
    e.preventDefault();
    newClassList.style.display = "block";
    let li = document.createElement('li');
    li.textContent = classInput.value + " " + gpaInput.value;
    newClassList.appendChild(li);
    returnGpa();
    });

    function returnGpa(){
        gpaArray.push(gpaInput.value);
        var sum = 0.0;
        for(var i = 0; i < gpaArray.length; i++){
            gpaArray[i] = + (gpaArray[i]);
            sum += gpaArray[i];
            console.log(sum);
             
        }
        var average = sum / (gpaArray.length);
        console.log(average);
        var averageDisplay = document.getElementById("averageDisplay");
        averageDisplay.textContent = "Term GPA is: " + average; 
         
    }
    
    

   
