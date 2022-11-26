import { useState } from 'react';

import { GlobalStyle } from './styles/Global.style';

import RatingCard from './components/RatingCard.component';
import ThankYouCard from './components/ThankYouCard.component';
import Footer from './components/Footer.component';

export interface AlertType {
  show:boolean;
  type: string;
  msg: string;
  removeAlert?: any;
}

function App() {
  const [ratings, setRatings] = useState<boolean>(false);
  const [selectedInput, setSelectedInput] = useState<string>('');
  const [alert, setAlert] = useState<AlertType>({
    show: false,
    msg: '',
    type: '',
  });

  const ratingsOnSubmit: any = (e: any) => {
    e.preventDefault();
    if (!selectedInput) {
      // Display alert
      showAlert(true, 'danger', 'Please select a value');
      setRatings(false);
    } else {
      setRatings(true);
    }
  };

  //Display an alert if the user hasn't selected a value
  const showAlert: any = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  //Selecting a value
  const clickInput: any = (e: any) => {
    setSelectedInput(e.currentTarget.value);
  };

  return (
    <>
      <GlobalStyle />
      {ratings ? (
        <ThankYouCard selectedInput={selectedInput} />
      ) : (
        <RatingCard
          selectedInput={selectedInput}
          ratingsOnSubmit={ratingsOnSubmit}
          clickInput={clickInput}
          alert={alert}
          showAlert={showAlert}
        />
      )}
      <Footer/>
    </>
  );
}

export default App;
