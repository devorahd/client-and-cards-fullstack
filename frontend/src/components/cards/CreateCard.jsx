import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { addCard } from '../../services/storage';

export default function CreateCard() {
  let bizNameRef = useRef();
  let descriptionRef = useRef();
  let addressRef = useRef();
  let phoneRef = useRef();
  let imageRef = useRef();
  let navigate = useNavigate();

  function createBizCard() {
    const newBizCard = {
      businesName: bizNameRef.current.value,
      businesDescription: descriptionRef.current.value,
      businesAddress: addressRef.current.value,
      businesPhone: phoneRef.current.value,
      businesImage: imageRef.current.value,
    };

    if (newBizCard) {
      addCard(newBizCard)
        .then((res) => {
          if (!res.ok) {
            return res.json().then((data) => {
              throw new Error(data);
            });
          }
          return res
            .json()
            .then((res) => {
              alert(
                `New business card created successfully. Business name: ${newBizCard.businesName},
        Business description: ${newBizCard.businesDescription}`
              );
              navigate('/cards');
            })
            .catch((error) => alert(error.message));
        })
        .catch((error) => {
          throw new Error(alert(error.message));
        });
    }
  }

  return (
    <>
      <h1>Create New Business Card</h1>
      <div>Business name:</div>
      <input
        type="text"
        placeholder="Enter business name"
        ref={bizNameRef}
        required
      />
      <div>Business description:</div>
      <input
        type="text"
        placeholder="Enter business description"
        ref={descriptionRef}
        required
      />
      <div>Business address:</div>
      <input
        type="text"
        placeholder="Enter business address"
        ref={addressRef}
      />
      <div>Business phone number:</div>
      <input
        type="text"
        placeholder="Enter business phone number"
        ref={phoneRef}
      />
      <div>Business image:</div>
      <input type="text" placeholder="Enter business image" ref={imageRef} />

      <button onClick={createBizCard}>Create business card</button>
    </>
  );
}
