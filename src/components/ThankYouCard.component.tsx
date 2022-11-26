import { FC } from 'react';
import { RatingCardType } from './RatingCard.component';

import { Container } from '../styles/ThankYouCard.style';

import ThankYou from '../assets/images/illustration-thank-you.svg';

interface ThankYouCardType {
  selectedInput: RatingCardType['selectedInput'];
}

const ThankYouCard: FC<ThankYouCardType> = ({ selectedInput }) => {
  return (
    <Container>
      <img src={ThankYou} alt="" aria-hidden="true" />

      <div className="rating-output">
        <p>You selected {selectedInput} out of 5</p>
      </div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </Container>
  );
};

export default ThankYouCard;
