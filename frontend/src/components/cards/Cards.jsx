import { getCards, deleteCard } from '../../services/storage';
import SearchCards from './SearchCards';
import SortCards from './SortCards';
import CardList from './CardDetails';
import { useEffect, useState } from 'react';
import { UNSAFE_NavigationContext } from 'react-router-dom';

export default function Cards() {
  const [tempCards, setTempCards] = useState([]);

  useEffect(() => {
    rerender();
  }, []);

  function rerender() {
    getCards()
      .then((cardsJSON) => setTempCards(cardsJSON))
      .catch((error) => alert(error.message));
  }

  function onChangeCard(text) {
    getCards()
      .then((cardsJSON) => {
        let filteredCards = cardsJSON.filter((c) => {
          let lowercaseText = text.toLowerCase();
          let lowercaseBusinessName = c.businesName.toLowerCase();
          let lowercaseBusinessDescription = c.businesDescription.toLowerCase();
          let lowercaseBusinessAddress = c.businesAddress.toLowerCase();
          return (
            lowercaseBusinessName.indexOf(lowercaseText) > -1 ||
            lowercaseBusinessDescription.indexOf(lowercaseText) > -1 ||
            lowercaseBusinessAddress.indexOf(lowercaseText) > -1
          );
        });
        setTempCards(filteredCards);
      })
      .catch((error) => alert(error.message));
  }

  function onOrderChange(ascdesc) {
    getCards()
      .then((cardsJSON) => {
        let sortedCards = [...cardsJSON];
        if (ascdesc === 'asc') {
          sortedCards.sort((a, b) =>
            a.businesName.localeCompare(b.businesName)
          );
        } else if (ascdesc === 'desc') {
          sortedCards.sort((a, b) =>
            b.businesName.localeCompare(a.businesName)
          );
        }
        setTempCards(sortedCards);
      })
      .catch((error) => alert(error.message));
  }

  function onClickDelete(id, name) {
    if (confirm(`delete ${name} card?`) == true)
      deleteCard(id).then((res) => rerender());
    rerender();
  }

  return (
    <>
      <SearchCards onChangeCard={onChangeCard} />
      <SortCards onOrderChange={onOrderChange} />
      <CardList tempCards={tempCards} onDelete={onClickDelete} />
    </>
  );
}
