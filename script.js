/**
 * Created by SHERRI on 3/4/15.
 */
//connecting to firebase
var app = angular.module("Tiger", ["ngRoute", "firebase"]);
app.controller("AppController", function($scope, $firebase) {
    var ref = new Firebase("https://tigerapp.firebaseio.com");
    var sync = $firebase(ref);
    // download the data into a local object
    var syncObject = sync.$asObject();
    syncObject.$bindTo($scope, "user");
});

/*


 //calculate surplus or deficit
 var surplusOrdeficit = function(){
 var totalIncome;
 var userExpenses;
 totalIncome = (userIncome - userExpenses);
 console.log (totalIncome);}
 if (totalIncome > 0 && totalExpenses < 50% of totalIncome) {
 document.write ('woo hoo, you're right on track.')
 document.write('Right now, your income, ' + ' totalIncome ' is more than your total expenses
 of ' + ' userExpenses 'and makes up less than half of your income,
 which is a good place to be.');
 else {
 document.write('Right now, your income, ' + ' totalIncome ' is more than your total expenses
 of ' + ' userExpenses '.')
 }

 } else {
 convert the negative number to a postitive and state that number as deficit
 document.write('Your expenses are ' + ' deficit 'more than your income' of totalIncome '+' '.')
 document.write('Let's see what we can do about that.')
 go to setAgoal page
 }
 }











 var userBudget = [];
 for (var i=0; userBudget[i].length <1; i++)
 userBudget.push({userRent:"", userUtilities: ""});

 //call the calculateSales function
 for (var i=0; userBudget[i].length <1; i++) {
 surplusOrdeficit();}

 */









/*
 this will be filter for poet
 <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.2/angular.min.js"></script>
 <SCRIPT TYPE="text/javascript" src='app.js'></SCRIPT>

 <div ng-controller='AppController'>

 <!--uppercase is a filter for -->
 {poet|uppercase}}
 <br>

 <input ng-model = 'filterInput'>
 <div ng-repeat='element in myArr | changeValueOfA:filterInput'>
 <!--filterInput is the parameter for the filter changeValueOfA-->

 {{element}}

 </div>

 </div>

 */