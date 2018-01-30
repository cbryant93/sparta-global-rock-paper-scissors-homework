function userSelect(){

  var uSelect = prompt('Ready to play? Select: (r)Rock p(Paper) s(Scissors)');

   switch (uSelect) {
     case 'r': var rock = 0;

               return rock;

     break;

     case 'p': var scissors = 1;

               return scissors;

     break;

     case 's': var paper = 2;

               return paper;

     break;

     default: console.log('error');

                   }

                     }
function aiSelect(){

  var randomSelect = Math.floor(Math.random()*3);

  return randomSelect;


  }



 var aiPoint = 0;
 var userPoint = 0;
 var turns = 1;

 while (turns <= 5 && aiPoint <= 3 && userPoint <= 3) {

    var select = userSelect();
    var randSelect = aiSelect();
    console.log(randSelect);

      if (select < randSelect) {

        userPoint++;

        alert('You have ' + userPoint);

       }else{

         aiPoint++;

         alert('AI has ' + aiPoint);

            }

      if (userPoint > aiPoint) {

        alert('You are winning!');

      }else if(aiPoint == userPoint){

        alert('You are drawing!');
      }else{

        alert('You Lose this round!');
          }

                                                    }
