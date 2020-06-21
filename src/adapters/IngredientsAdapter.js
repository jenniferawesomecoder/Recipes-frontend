class IngredientsAdapter {
  constructor() {
    this.baseURL = "https://recipesproject.herokuapp.com/ingredients"
  }

  getIngredients() {
    return fetch(this.baseURL).then(response => response.json()).then(json => (json.data))
  }
}
