import "../../styles/home.css";
import image from "/images/tyler-hynes-3.jpeg";

export function Biography() {
  return (
    <section className="biography" id="about">
      <span className="biography-hdr">
        Before the Cameras Where the Story Began
      </span>

      <div className="biography-txt">
        <div>
          Born in Toronto, Canada, Tyler Hynes grew up with an early connection
          to creativity and performance. His introduction to professional
          entertainment came remarkably young. At just eight years old, he began
          performing in theatre, appearing in a 72-performance production of A
          Christmas Carol. It was followed by a cross-Canada tour of The Who’s
          Tommy, in which he played the young Tommy. For a child, those
          experiences represented more than an introduction to acting. They were
          an education in discipline. Theatre demands presence. It requires an
          understanding of timing, movement, emotion, and the ability to
          communicate with an audience without the safety net of multiple takes.
          Night after night, a young Hynes was learning the fundamentals of
          performance in front of live audiences. It was an unusual beginning,
          but one that would prove valuable throughout his career. Long before
          television audiences became familiar with his face, he was already
          learning how to tell stories. And he was learning the hard way: by
          doing the work.
        </div>

        <div className="biography-txt-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
