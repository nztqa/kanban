import PropTypes from 'prop-types';
import BaseComponent from './BaseComponent.js';

class CardItem extends BaseComponent {
  constructor(props) {
    super(props);
    this.onCLick = this.onCLick.bind(this);
  }

  onCLick(event) {
    event.preventDefault();
    const { card, remove } = this.props;
    remove(card._id);
  }
}

CardItem.propTypes = {
  card: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
  updateTitle: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default CardItem;
