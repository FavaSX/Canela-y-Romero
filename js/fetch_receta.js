$(document).ready(function() {

    // Función para obtener una receta aleatoria al cargar la página
    getRandomRecipe();

    // Función para obtener una receta aleatoria
    function getRandomRecipe() {
        $.ajax({
            type: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/random.php',
            success: function(response) {
                const recipe = response.meals[0];
                displayRecipe(recipe);
            },
            error: function(xhr, status, error) {
                console.error('Error:', status, error);
                alert('Error fetching random recipe.');
            }
        });
    }

    // Función para mostrar la receta en la página
    function displayRecipe(recipe) {
        $('#recipeImage').attr('src', recipe.strMealThumb);
        $('#recipeName').text(recipe.strMeal);
        
        $('#ingredientsList').empty();

        for (let i = 1; i <= 20; i++) {
            const ingredient = recipe['strIngredient' + i];
            const measure = recipe['strMeasure' + i];
            if (ingredient) {
                $('#ingredientsList').append(`<li>${measure} ${ingredient}</li>`);
            } else {
                break;
            }
        }

        const instructions = recipe.strInstructions;
        if (instructions) {
            $('#preparationInstructions').text(instructions);
        } else {
            $('#preparationInstructions').text('No instructions available.');
        }
    }

    // Evento de clic para obtener una receta aleatoria cuando se presiona el botón
    $('#randomRecipeBtn').click(function() {
        getRandomRecipe();
    });

    // Evento de clic para buscar una receta por nombre
    $('#searchRecipeBtn').click(function() {
        const searchQuery = $('#searchInput').val().trim();
        if (searchQuery !== '') {
            $.ajax({
                type: 'GET',
                url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`,
                success: function(response) {
                    const recipe = response.meals[0];
                    if (recipe) {
                        displayRecipe(recipe);
                    } else {
                        alert('Recipe not found.');
                    }
                },
                error: function(xhr, status, error) {
                    console.error('Error:', status, error);
                    alert('Error searching recipe.');
                }
            });
        } else {
            alert('Please enter a recipe name to search.');
        }
    });

});
