// var exam_result = 2;
// if ( exam_result >= 90)
//     {
//         console.log("Excellent.Pass with Distinction");
//     }

//     else if (70 > exam_result <  89)
//         {
//             console.log("Well Done.Pass with Honours");
//         }

//         else if (69 > exam_result < 55)
//             {
//                 console.log("Just Passed");
//             }

//             else if(exam_result < 54)
//                 {
//                     console.log("Failed.Do better next time");
//                 }

// Submit to move to the next question
var firstForm = document.getElementById('form');
var secondForm = document.getElementById('form_2');
function nextQuestion(){
    if(firstForm.style.display == "flex"){
        firstForm.style.display = "none"
        secondForm.style.display = "flex"
    }
    else{
        firstForm.style.display = "none"
        secondForm.style.display = "flex"
    }
}