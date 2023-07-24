export default function Footer() {
  return (
    <div className="Footer">
      <div className="footerContact">
        <a href="http://www.linkedin.com/in/devorahdayan" target="_blank">
          <img
            src="https://img.icons8.com/?size=2x&id=447&format=png"
            alt="Linkedin Icon"
            width="20rem"
          />
        </a>
        <a href="http://www.github.com/devorahd" target="_blank">
          <img
            src="https://img.icons8.com/?size=2x&id=106567&format=png"
            alt="Github Icon"
            width="20rem"
          />
        </a>{' '}
        <a
          href="mailto:devorah2993@gmail.com?subject=I%20saw%20your%20website.%20Are%20you%20looking%20for%20a%20job?"
          target="_blank"
        >
          <img
            src="https://img.icons8.com/?size=2x&id=12580&format=png"
            alt="Envelope Icon"
            width="20rem"
          />
        </a>
      </div>
      <section> &copy; developed by Devorah Dayan using React</section>
    </div>
  );
}
