import { Link } from 'react-router-dom';

export default function CardList({ tempCards, onDelete }) {
  /*   function tryEdit() {
    console.log(cardUl);
  } */
 /*  let tempCards = [
    {
      _id: {
        $oid: '64aa79542820975af45bd01e',
      },
      businesName: 'Bazar',
      businesDescription: 'new toy store in the city',
      businesAddress: 'Helel 34, Harish, Israel',
      businesPhone: '0526664444',
      businesImage:
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?cs=srgb&dl=pexels-fauxels-3184292.jpg&fm=jpg',
      __v: 0,
    },
    {
      _id: {
        $oid: '64aa7c3f2820975af45bd023',
      },
      businesName: 'Falafel',
      businesDescription: 'new falafel store in the city',
      businesAddress: 'Falafel 34, ranana, Israel',
      businesPhone: '0501112233',
      businesImage:
        'https://www.nonguiltypleasures.com/wp-content/uploads/2023/02/falafel-pita-sandwich-768x1152.jpg',
      __v: 0,
    },
  ]; */
  if (!tempCards) return <section>No data</section>;
  let cardUl = tempCards.map((c, i) => {
    return (
      <div className="flipCard">
        <div className="flipCardInner">
          <div className="flipCardFront">
            <img
              src={c.businesImage}
              alt="business image"
              style={{ width: '200px', height: '200px' }}
            />
            <ul key={i}>
              <li>Business Name: {c.businesName}</li>
              <li>Description: {c.businesDescription}</li>
            </ul>
          </div>
          <div className="flipCardBack">
            <ul key={i}>
              <li>Address: {c.businesAddress}</li>
              <li>Phone number: {c.businesPhone}</li>
            </ul>
            <section>
              <Link to={`/updatecard/ ${c._id}`}>Edit</Link>
              {/*  <button onClick={tryEdit}>try edit</button> */}
              <button onClick={() => onDelete(c._id, c.businesName)}>
                Delete
              </button>
            </section>
          </div>
        </div>
      </div>
    );
  });
  return <div>{cardUl}</div>;
}
