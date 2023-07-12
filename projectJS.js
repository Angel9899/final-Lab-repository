function makeMealPlan(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var goal = document.getElementById('goal').value;

    if(!validateEmail(email)){
        alert('please enter a valid email');
        return;
    }

    var mealplan = '<h2> The Meal plan is for' + name + '</h2>';
    mealplan += '<p> Email:' + email + '</p>';
    mealplan += '<p> goal:' + goal + '</p>';
    mealplan += '<h3>Weekly Meal Plan</h3>';
    mealplan += '<ul>';
    mealplan += '<li><strong>Monday:</strong>' + document.getElementById('monday').value + '</li>'
    mealplan += '<li><strong>tuesday:</strong>' + document.getElementById('tuesday').value + '</li>'
    mealplan += '<li><strong>wednesday:</strong>' + document.getElementById('wednesday').value + '</li>'
    mealplan += '<li><strong>thursday:</strong>' + document.getElementById('thursday').value + '</li>'
    mealplan += '<li><strong>friday:</strong>' + document.getElementById('friday').value + '</li>'
    mealplan += '<li><strong>saturday:</strong>' + document.getElementById('saturday').value + '</li>'
    mealplan += '<li><strong>sunday:</strong>' + document.getElementById('sunday').value + '</li>'


    var mealPlanPage = window.open('','_blank');
    mealPlanPage.document.write(mealplan);
    mealPlanPage.document.close();

}

function displayMealPlan(){
        window.print()
}

function validateEmail(email){
    var windowRegex = /^\S+@\S+\.\S+$/;
    return windowRegex.test(email);

}

displayMealPlan();

