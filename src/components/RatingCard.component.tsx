import { FC } from 'react';
import { AlertType } from '../App';

import { Container } from '../styles/RatingCard.style';

import StarIcon from '../assets/images/icon-star.svg';
import Alert from './Alert.component';

export interface RatingCardType {
  alert: any;
  showAlert: AlertType;
  selectedInput: string;
  ratingsOnSubmit: any;
  clickInput: (e: any) => void;
}

const RatingCard: FC<RatingCardType> = ({
  alert,
  showAlert,
  selectedInput,
  ratingsOnSubmit,
  clickInput,
}) => {
  const numbers: { id: string; number: string }[] = [
    { id: 'rating-1', number: '1' },
    { id: 'rating-2', number: '2' },
    { id: 'rating-3', number: '3' },
    { id: 'rating-4', number: '4' },
    { id: 'rating-5', number: '5' },
  ];

  return (
    <Container>
      <img src={StarIcon} alt="" aria-hidden="true" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form onSubmit={ratingsOnSubmit}>
        <fieldset>
          {numbers?.map((item) => {
            const { id, number } = item;
            return (
              <div className="rating-item" key={number}>
                <label htmlFor={id} >
                  {number}
                  <input
                    checked={selectedInput === number}
                    onChange={clickInput}
                    type="radio"
                    name="ratings"
                    id={id}
                    value={number}
                  />
                </label>
              </div>
            );
          })}
        </fieldset>

        {/* Display the submit button or display the alert */}
        {(alert.show && <Alert {...alert} removeAlert={showAlert} />) || (
          <button type="submit">Submit</button>
        )}
      </form>
    </Container>
  );
};

export default RatingCard;
