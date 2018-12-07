import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    // 1. Stop the from from submitting
    event.preventDefault();

    // 2. get the text from that input
    console.log(this.myInput);

    // 3. Change the page to /store/whatever-they-typed
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store </button>
      </form>
    )
  }
}

export default StorePicker;