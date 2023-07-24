import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCardById, updateCard } from '../../services/storage';

// turn into popup later

export default function EditCard() {
  let bizNameRef = useRef();
  let descriptionRef = useRef();
  let addressRef = useRef();
  let phoneRef = useRef();
  let imageRef = useRef();
  let [card, setCard] = useState({});
  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getCardById(params.id)
      .then((res) => {
        console.log('Response:', res);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((cardJSON) => {
        console.log('cardJSON:', cardJSON);
        setCard(cardJSON);
      })
      .catch((error) => alert(error.message));
  }, []);

  console.log('card: ' + card);
  console.log('params.id: ' + params.id);

  /* const cardMap = card.map((c) => {
    return (oldCard = {
      id: c._id,
      oldName: c.businesName,
      oldDescription: c.businesDescription,
      oldAddress: c.businesAddress,
      oldPhone: c.businesPhone,
      oldImage: c.businesImage,
    });
  });

  console.log('cardMap: ' + cardMap); */

  function updateStorage() {
    let updatedCard = {
      id: card._id,
      businesName: bizNameRef.current.value,
      businesDescription: descriptionRef.current.value,
      businesAddress: addressRef.current.value,
      businesPhone: phoneRef.current.value,
      businesImage: imageRef.current.value,
    };
    updateCard(card._id, updatedCard)
      .then(() => {
        alert('Card updated sucessfully');
        navigate('/cards');
      })
      .catch((error) => alert(error.message));
  }

  return (
    <div className="editCardContainer">
      <h1>Edit Business Card</h1>
      <div>Business name:</div>
      <input
        type="text"
        placeholder="Enter business name"
        ref={bizNameRef}
        /*  defaultValue={card.businesName} */
      />
      <div>Business description:</div>
      <input
        type="text"
        placeholder="Enter business description"
        ref={descriptionRef}
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
      <button onClick={updateStorage}>Edit business card</button>
    </div>
  );
}
