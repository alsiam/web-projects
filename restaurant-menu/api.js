// Load First
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`;
fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data.meals))
    .catch(error => {

        document.getElementById('api-error').innerHTML = ` <b class="text-danger">Something went wrong </b>`;

    });

const searchFood = () => {
    // Preloader adding
    const preloader = () => {
        document.getElementById('loading').classList.remove('invisible');
        document.getElementById('search-result').classList.add('d-none');
        setTimeout(() => {
            document.getElementById('loading').classList.add('invisible');
            document.getElementById('search-result').classList.remove('d-none')
        }, 3000)
    }
    preloader();

    const searchInput = document.getElementById('search-field');
    const searchValue = searchInput.value;

    // Clear Data
    searchInput.value = '';

    if (searchValue == '') {
        document.getElementById('error-message').innerHTML = `
        <h1 class="text-danger">No Result Found</h1>
        `;
    } else {
        // Load Data
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayMeal(data.meals))
            .catch(error => {

                document.getElementById('api-error').innerHTML = ` <b class="text-danger">Something went wrong </b>`;

            });
    }
}


const displayMeal = getMeals => {

    const searchResult = document.getElementById('search-result');

    // Clear PRevious
    searchResult.textContent = '';

    if (getMeals == null) {
        document.getElementById('error-message').innerHTML = `
        <h1 class="text-danger">No Result Found</h1>
        `
    } else {
        document.getElementById('error-message').innerHTML = "";
    }
    getMeals.forEach(meal => {
        const mealList = document.createElement('div');
        mealList.classList.add('col');

        mealList.innerHTML = `
        <div onclick="loadMealDetails(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                 <p class="card-text">${(meal.strInstructions).slice(0, 100)}</p>
            </div>
        </div>
        `;


        searchResult.appendChild(mealList);
    })

}
const loadMealDetails = idMeal => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const meal = data.meals[0];
            const mealDetails = document.getElementById('meal-details');
            mealDetails.innerHTML = '';

            const div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML = `
              <img src="${meal.strMealThumb}" class="card-img-top img-thumbnail" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${(meal.strInstructions).slice(0, 150)}</p>
                    <a href="${meal.strYoutube}" class="card-link">Learn To Cook</a>
                </div>
            `;
            mealDetails.appendChild(div);
        })

}