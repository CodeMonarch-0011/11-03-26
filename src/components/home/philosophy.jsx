import "../../styles/home.css";
import image from "/images/tyler-hynes-2.webp";

export function Philosophy() {
  return (
    <section className="philosophy" id="philosophy">
      <span className="philosophy-hdr">A Creative Personality</span>
      <span className="solid-header">Curiosity Over Convention</span>
      <div className="philosophy-main">
        <div className="philosophy-list">
          <span>Tyler Hynes’s artistic identity rests on five pillars:</span>

          <div>
            There is a distinction between having a career and having a creative
            identity. A career is built through opportunities, professional
            decisions, and the projects one accepts. A creative identity
            develops through the instincts, interests, and ideas that continue
            to shape those decisions. Hynes’s work suggests a person interested
            in several sides of the creative process. Acting is one expression.
            Directing is another. Writing, producing, editing, and filmmaking
            provide additional ways to explore the same underlying interest:
            storytelling. He has also maintained an interest in music,
            photography, and other creative pursuits. This broader curiosity
            helps explain why his professional journey has not followed one
            predictable path. He has moved between different kinds of
            productions. He has explored different responsibilities. And he has
            continued to find ways to participate in the industry beyond the
            roles audiences recognize. There is something refreshing about that
            approach. It leaves room for experimentation. For mistakes. For
            growth. And for the possibility of becoming something different with
            each new project.
            {/* <ul>
              <li>
                Intelligence as Strength Her greatest characters succeed because
                they think.
              </li>

              <li>
                Emotional Precision She avoids excess and trusts subtlety.
              </li>

              <li>
                Fearless Material She repeatedly chooses challenging stories.
              </li>

              <li>
                Privacy as Principle She protects the distinction between public
                work and private life.
              </li>

              <li>
                Lifelong Curiosity Whether acting, directing, or studying,
                curiosity drives her choices.
              </li>
            </ul> */}
          </div>
        </div>
        <div className="philosophy-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
