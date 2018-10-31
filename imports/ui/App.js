import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import recipeActionCreators from "./actions/recipe-actions";

class App extends React.Component {
  componentDidMount() {
    const { recipeActions } = this.props;

    recipeActions.getRecipes();
  }

  handleForm(e) {
    e.preventDefault();
    const { recipeActions } = this.props;
    const name = this.refs.name.value;

    this.props.recipeActions.createRecipe({ name });

    this.refs.name.value = "";
  }

  render() {
    const { recipes, recipeActions } = this.props;

    return (
      <div>
        <h1>recipes</h1>
        <ul>
          {recipes ? (
            recipes.map(w => <li key={w._id}>{w.name}</li>)
          ) : (
            <li>none</li>
          )}
        </ul>
        <form onSubmit={this.handleForm.bind(this)}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" ref="name" />
          <input type="submit" value="Add Recipe" />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    recipeActions: bindActionCreators(recipeActionCreators, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
