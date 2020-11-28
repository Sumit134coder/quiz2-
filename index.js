var readlineSync= require('readline-sync');
var chalk=require('chalk');
var score=0;
var rank='';
console.log(chalk.yellow.bold('WELCOME TO THE QUIZ OF THE CAPITALS!'));
var userName=readlineSync.question('ENTER YOUR NAME -> ');
console.log(chalk.blue('WELCOME '+ userName.toUpperCase()));
console.log('---------------------------------------------------\n');
console.log(userName.toUpperCase()+chalk.green.bold(' ,the rules for the quiz are->\n1. for every correct answer,2 points will be given.\n2. for wrong answer,1 mark will be deducted.\n3. At end of quiz, you will be ranked on basis of your total score.\n'));
console.log('---------------------------------------------------------');
console.log('here is the quiz\n');
var quiz=
[
  {
    question:'1. What is the capital of India?\n1. bihar\n2. Delhi\n3. jammu\n4. goa\n',
    answer:'2'
  },
  {
    question:'2. Capital of Afganistan is ____\n1. kabul\n2. alabama\n3. Argentina\n4. jamaica\n',
    answer:'1'
  },
  {
    question:'3. Capital of bangladesh?\n1. guineea\n2. bahamas\n3. new jersey\n4. dhakka\n',
    answer:'4'
  },
    {
    question:'4. Capital of belgium?\n1. new zealand\n2. brusells\n3. san diego\n4. bengal\n',
    answer:'2'
  }, 
  {
    question:'5. Capital of egypt?\n1. cairo\n2. bahamas\n3. talinn\n4. dc\n',
    answer:'1'
  }, 
  {
    question:'6. Capital of germany?\n1. combodia\n2. berlin\n3. british columbia\n4. mujhe nhi pta\n',
    answer:'2'
  }, 
  {
    question:'7. Capital of italy?\n1. rome\n2. venice\n3. san martin\n4. pundicheery\n',
    answer:'1'
  },
  {
    question:'8. Capital of erangel?\n1. pochinki\n2. shelter\n3. prison\n4. militiary base\n',
    answer:'1'
  },
]

function answerCheck(question,answer)
{
  var userAnswer=readlineSync.question(question);
  if (userAnswer===answer)
  {
    console.log(chalk.green.bold('correct answer'));
    score=score+2;
  }
  else
  {
    console.log(chalk.red.bold('oops! WRONG ANSWER'));
    score=score-1;
  }
}

for(var i=0;i<8;i++)
{
  answerCheck(quiz[i].question,quiz[i].answer);
}

function rankDecider(score)
{
  if (score==14 && score>=12)
  {
    rank='PRO'
  }
  else if(score<12&&score>=8)
  {
    rank='semi-PRO'
  }
  else if(score<8&&score>=4)
  {
    rank='intermediate'
  }
  else if(score<4&&score>=2)
  {
     rank='padh le bhai'
  }
  else
  {
      rank='BETA PADHAI VHADAI KRO.IAS VIASS BNO AUR DESH  KA NAAM UCHA KRO'
  }
}
rankDecider(score);
console.log(chalk.blue('----------------------------------------------------------'));

console.log(score+' is your score out of 14 and you are ranked as '+rank.toUpperCase());