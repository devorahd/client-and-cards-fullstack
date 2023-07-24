import Cards from './cards/Cards';

export default function Home() {
  return (
    <>
      <h1>Business Cards</h1>
      <p>
        This web page was developed to enable business managers to upload their
        business cards for potential customers to see. The managers can add,
        update, and delete cards after they register and log in. Customers can
        read all the business cards, sort them by name and search for specific
        businesses.{' '}
      </p>
      <Cards />
    </>
  );
}
