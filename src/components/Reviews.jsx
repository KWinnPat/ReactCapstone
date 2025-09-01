import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Reviews = (props) => {
  const ratingInfo = props.props;
  return (
    <div className="review">
      <div className="stars">
        <FontAwesomeIcon icon={["fas", "star"]} />
      </div>
      <p>{ratingInfo.rate}</p>
      <p>({ratingInfo.count})</p>
    </div>
  );
};

export default Reviews;
