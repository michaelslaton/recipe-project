import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes}) {

  const [type, setType] = useState("Text");
  const initialFormState = {name: '', cuisine: '', photo: '', ingredients: '', preparation: ''};
  const [formData, setFormData] = useState(initialFormState)

  function handleChange(event){
    setFormData({
      ...formData, [event.target.name]: event.target.value
    })
  };
  
  async function handleCreate(event){
    event.preventDefault();
    setRecipes([...recipes,formData]);
    setFormData(initialFormState);
    console.log(await recipes);
  }
  
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements. 
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input
              name="name"
              id="name"
              type="text"
              placeholder="Name"
              onChange={handleChange}
              required={true}
              value={formData.name}
              />
            </td>
            <td>
              <input
              name="cuisine"
              id="cuisine"
              type="text"
              placeholder="Cuisine"
              onChange={handleChange}
              required={true}
              value={formData.cuisine}
              />
            </td>
            <td>
              <input
              name="photo"
              id="photo"
              type="url"
              placeholder="URL"
              onChange={handleChange}
              required={true}
              value={formData.photo}
              />
            </td>
            <td>
              <textarea
              name="ingredients"
              id="ingredients"
              type="text"
              placeholder="Ingrediants"
              onChange={handleChange}
              required={true}
              value={formData.ingredients}
              />
            </td>
            <td>
              <textarea
              name="preparation"
              id="preparation"
              type="text"
              placeholder="Preparation"
              onChange={handleChange}
              required={true}
              value={formData.preparation}
              />
            </td>
            <td>
              <button type="submit" onClick={handleCreate}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
