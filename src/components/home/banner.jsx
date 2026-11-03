import "../../styles/home.css";
import image from "/images/th.webp";
// import { ContactContextFunction } from "../../context/contact.jsx";

export function Banner() {
  // const { openContactPopup } = ContactContextFunction();

  return (
    <section className="banner" id="home">
      <div className="banner-img">
        <img src={image} />
      </div>

      <div className="banner-text">
        <span>Tyler Hynes</span>
        <span>The Art of Being Unforgettable</span>
        <div>
          <div>
            Some actors capture attention. Others capture emotion. And then
            there are those rare performers who manage to do both without ever
            appearing to try too hard. Tyler Hynes belongs to that interesting
            category. An actor, filmmaker, director, producer, writer, and
            creative mind, Hynes has spent much of his life exploring the many
            dimensions of storytelling. <br /> <br /> His career has moved
            through theatre, television, independent cinema, dramatic
            productions, comedy, and romantic films, revealing a performer who
            has never been particularly interested in remaining inside one
            creative box.To millions of viewers, he is a familiar face
            associated with warmth, romance, and the unmistakable charm of
            Hallmark movies. But that is only one chapter of a much larger
            story.
          </div>{" "}
          <div>
            {" "}
            Behind the familiar smile is a performer who began working
            professionally as a child, spent years developing his craft across
            different genres, and gradually expanded his ambitions beyond
            acting. His journey is not simply about becoming recognizable. It is
            about becoming an artist. And perhaps what makes Tyler Hynes
            particularly interesting is that, even after decades in the
            entertainment industry, there remains a sense that he is still
            discovering what he can do.
          </div>
        </div>

        {/* <button onClick={openContactPopup}>Get in Touch</button> */}
      </div>
    </section>
  );
}
