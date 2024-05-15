$(document).ready(() => 
    $.ajax({
        type : 'GET',
        url : 'https://www.themealdb.com/api/json/v1/1/random.php',
        success : (response) => {
            const recipe = response.meals[0]
            console.log(recipe)
            $('#mealName').html(recipe.strMeal);
            $('#recipeImage').attr('src','https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg')
        },
        error : (response) => {
            alert('Error'+response.status+' '+response.statusText);
        }
    })
);