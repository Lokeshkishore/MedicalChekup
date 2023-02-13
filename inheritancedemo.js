class GrandParent
{
    constructor(name,age,date){
        this.name=name;
        this.age=age;
        this.date=date;
        document.write("NAME: "+name +"<br><br>");
        document.write("AGE: "+age+"<br><br>");
        document.write("DATE: "+date+"<br><br>");
        
    }
    
  sugarLevelCheck()
  {
    var check=prompt("  enter 1 To check your sugar level or  enter 2 To check your medicines"); 
    switch(check){
      case "1":{
        var sugar_level=prompt("enter your sugar level"); 
        var checklevel=prompt("To check your sugar level before fasting  enter 1 or after fasting enter 2"); 
        
        switch(checklevel){
           case "1":
            if(sugar_level>=70&&sugar_level<=90){
              document.write("SUGAR LEVEL: your sugar level is normal");
            }
            else if(sugar_level>=90&&sugar_level<=125){
              document.write("SUGAR LEVEL: you are in is Prediabetes stage");
            }
            else{
              document.write("SUGAR LEVEL: you are in diabetes stage");
            }
           break;
          case "2":
            if(sugar_level<=140){
              document.write("SUGAR LEVEL: your sugar level is normal");
            }
            else if(sugar_level>=140&&sugar_level<=180){
              document.write("SUGAR LEVEL: you are in is Prediabetes stage");
            }
            else{
              document.write("SUGAR LEVEL: you are in diabetes stage");
            }
           break;
           default:
            document.write("please enter value 1 or 2");
        }

      }break;
      case "2":{
        var checkmedicine=prompt("To check your medicines for prediabetes enter 1 or To check your medicines for diabetes enter 2"); 
         
        switch(checkmedicine){
            case "1":
              document.write("MEDICINES FOR PREDIABETES : Medications to help lower blood sugar and reverse prediabetes include metformin (Glucophage, Fortamet) or a similar drug.");
              break;
            case "2":
               document.write("MEDICINES FOR DIABETES :Metformin (Fortamet, Glumetza, others) is generally the first medication prescribed for type 2 diabetes.");
               break;
           default:
            document.write("please enter value 1 or 2");
        }
      }break;
      default:
            document.write("please enter value 1 or 2");

    }
    
        
  }
  bloodPressureLevelCheck()
  {
    var check=prompt("  enter 1 To check your Bp level or  enter 2 To check your medicines"); 
    switch(check)
    {
      case "1":{
              var bPLevel=prompt("Enter your bp level");
              if(bPLevel<=145&&bPLevel>=110){
                document.write("BP LEVEL: your Bp level is normal");
              }
              else if(bPLevel>=145){
                document.write("BP LEVEL: your Bp level is High");
              }
              else{
                document.write("BP LEVEL: your Bp level is Low");
              }
            }break;
     case "2":{
              var checkmedicine=prompt("To check your medicines for Low BP enter 1 or To check your medicines for High BP enter 2"); 
               
              switch(checkmedicine){
                  case "1":
                    document.write("If you have long-term (chronic) orthostatic hypotension, midodrine (Orvaten) may be prescribed to raise standing blood pressure levels. This drug reduces the ability of the blood vessels to expand, which raises blood pressure.");
                    break;
                  case "2":
                     document.write("Angiotensin-converting enzyme (ACE) inhibitors reduce blood pressure by relaxing your blood vessel");
                     break;
                 default:
                  document.write("please enter value 1 or 2");
              }
            }break;
     default:
              document.write("please enter value 1 or 2");
    }

  }
  saltLevelCheck()
  {
    var check=prompt("  enter 1 To check your salt level or  enter 2 To check your medicines");

    switch(check){
      case "1":{
          var saltLevel=prompt("Enter your salt level");
          if(saltLevel<=142&&saltLevel>=135){
            document.write(" SALT LEVEL: your Salt level is normal");
          }
          else if(saltLevel>=142){
            document.write(" SALT LEVEL: your salt level is High");
          }
          else{
            document.write(" SALT LEVEL: your salt level is Low");
          }
        }break;
     case "2":
            document.write("Tolvaptan (Samsca) is used to treat hyponatremia (low levels of sodium in the blood) in people who have heart failure (condition in which the heart cannot pump enough blood to all parts of the body), syndrome of inappropriate antidiuretic hormone (SIADH; condition in which the body produces too much of a certain ...");
        break;
      default:
          document.write("please enter value 1 or 2");  

      }

 }
     hemoGlobinLevelCheck()
     {
         var check=prompt("  enter 1 To check your Hemoglobin level or  enter 2 To check your medicines");
          
         switch(check){
          case "1":{
            var hemoglobinlevel=prompt("enter Hemoglobin level"); 
            var checkGender=prompt("To check your hemoglobin level for men enter 1 or for women enter 2"); 
            
            switch(checkGender){
               case "1":
                if(hemoglobinlevel>=13.6&&hemoglobinlevel<=16.6){
                  document.write("HEMOGLOBIN LEVEL: your hemoglobin level is normal");
                }
                else if(hemoglobinlevel>=16.6){
                  document.write("HEMOGLOBIN LEVEL: your hemoglobin level is high");
                }
                else{
                  document.write("HEMOGLOBIN LEVEL: your hemoglobin level is low ");
                }
               break;
               case "2":
                if(hemoglobinlevel>=11.6&&hemoglobinlevel<=15){
                  document.write("HEMOGLOBIN LEVEL: your hemoglobin level is normal");
                }
                else if(hemoglobinlevel>=15){
                  document.write("HEMOGLOBIN LEVEL: your hemoglobin level is high");
                }
                else{
                  document.write("HEMOGLOBIN LEVEL: your hemoglobin level is low");
                }
               break;
               default:
                document.write("please enter value 1 or 2");
            }
    
          }break;
        case "2":
            document.write("Erythropoietin (EPO) is a hormone produced by the kidneys and helps catalyze red blood cell production. It also promotes blood cell synthesis with hemoglobin, which allows the cells to carry oxygen throughout the body.");
        break;
      default:
          document.write("please enter value 1 or 2");  
     }

 }


}
class Parent extends GrandParent{
  
  bmicalculator(height,weight){
        var bmi=(weight/(height*height)) ;
        document.write("Your height is:"+ height+"<br><br>");  
        document.write("Your weight is:"+ weight+"<br><br>");  
        document.write("Your BMI is:"+ bmi+"<br><br>");  
        
        if(bmi>=18.5&&bmi<=24.5){
          document.write("Your BMI value is normal"+"<br><br>");
          document.write("You will continue your normal diet plan"+"<br><br>");   
        }
        else if(bmi>=24.5){
          document.write("Your BMI value is High"+"<br><br>");
          document.write("Your diet plan is Brown Rice. Rich in whole grains and fiber, brown rice is one of the favorite snacks of fitness inthusiasts. ... "+"<br><br>");
        }
        else{
          document.write("Your BMI value is Low"+"<br><br>");
          document.write("Your diet plan is whole grains, dried fruit, potatoes, avocados, oily fish, eggs, and dairy products. "+"<br><br>");
        }
  }
  
}
var name=prompt("Enter your name");
 var age=prompt("Enter your age");
 var date=prompt("Enter your date");
 
//+const u=new GrandParent();

const p= new Parent(name,age,date);
p.sugarLevelCheck();
document.write("<br><br>"); 
p.bloodPressureLevelCheck();
document.write("<br><br>");
p.saltLevelCheck();
document.write("<br><br>");
p.hemoGlobinLevelCheck();
document.write("<br><br>");
var height=prompt("Enter your height");
var weight=prompt("Enter your weight");
p.bmicalculator(height,weight);

//var b=p.bmicalculator();;








    