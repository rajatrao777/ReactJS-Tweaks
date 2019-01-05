'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>
    );
  }
}

document.querySelectorAll('.like_button_container').forEach(domContainer => {
  // Read the comment ID from a data-* attribute.
  ReactDOM.render(<LikeButton />, domContainer)
});