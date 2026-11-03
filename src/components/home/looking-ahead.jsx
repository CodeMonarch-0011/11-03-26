import "../../styles/home.css";
import { ContactContextFunction } from "../../context/contact.jsx";

export function LookingAhead() {
  const { openContactPopup } = ContactContextFunction();

  return (
    <section className="looking-ahead">
      <span className="looking-ahead-hdr">A Legacy Still Being Written</span>

      <div>
        Tyler Hynes’s story is not a finished one. It is a continuing collection
        of performances, creative experiments, professional collaborations, and
        opportunities yet to be explored. From an eight-year-old boy discovering
        the stage to an established Canadian actor and filmmaker working across
        multiple areas of the entertainment industry, his journey reflects the
        value of staying connected to the craft. He has experienced the demands
        of theatre. The discipline of television. The intimacy of independent
        filmmaking. The commercial appeal of romantic storytelling. And the
        creative responsibility of working behind the camera. Each chapter has
        contributed something different. And together, they tell the story of a
        performer who has never needed to be defined by just one kind of work.
        Because there is more to an artist than the roles that make them famous.
        There is the journey that brought them there. The curiosity that keeps
        them moving. And the stories they have yet to tell. Tyler Hynes is still
        writing that story. And perhaps that is the most interesting part of
        all. Some actors find their place in the industry. Others spend a
        lifetime discovering how much more they can do within it. Tyler Hynes is
        still discovering.
      </div>

      <button onClick={openContactPopup}>Get in Touch</button>
    </section>
  );
}
