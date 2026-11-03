import "../../styles/home.css";
import image from "/images/th-2.jpg";

export function Legacy() {
  return (
    <section className="legacy" id="legacy">
      <span className="legacy-hdr">The Relationship With His Audience</span>

      <div className="solid-header">Connection Without Excess </div>
      <div className="legacy-main">
        <div className="legacy-main-txt">
          Celebrity culture often encourages performers to make themselves
          constantly available. More appearances. More headlines. More personal
          revelations. More content. But a lasting relationship between an
          artist and an audience does not necessarily depend on constant
          exposure. Hynes has cultivated a recognizable public presence while
          maintaining a relatively personal and unconventional relationship with
          celebrity culture. His official website and public-facing projects
          offer glimpses into his creative interests, professional work, and
          personality. He has also developed traditions that audiences have come
          to recognize, including his well-known annual Boot Shot tradition. His
          connection with fans is an important part of his public identity. Yet
          it is worth remembering that the person audiences encounter through
          interviews, photographs, films, and social media is still only a
          public-facing part of an individual’s life. An actor’s work can be
          appreciated without assuming that every aspect of their private world
          is available for public interpretation. Perhaps that distinction is
          particularly important in an era when audiences sometimes feel they
          know performers personally simply because they have watched them for
          years. Hynes remains, first and foremost, an artist whose work
          provides the clearest window into his professional identity.
        </div>
        <div className="legacy-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
