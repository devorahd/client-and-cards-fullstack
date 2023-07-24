import { Link } from 'react-router-dom';

export default function Error404() {
  return (
    <div className="container404">
      <h1>404</h1>
      <h3>Page not found</h3>
      <section>The page you are looking for does not exist</section>
      <Link to={'/'}>Return to homepage</Link>
    </div>
  );
}
