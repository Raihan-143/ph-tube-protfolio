console.log('Hello, world!');
function loadCatogories() {
    // console.log('Loading categories...');
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(response => response.json())
    .then(data => {
      displayCategories(data.categories);
    });
}
function displayCategories(categories) {
    console.log(categories);
}
loadCatogories();