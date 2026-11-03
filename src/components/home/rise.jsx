import "../../styles/home.css";
import image from "/images/th-1.webp";

export function Rise() {
  return (
    <section className="rise">
      <span className="rise-hdr">
        The Transition to Film From the Stage to the Screen
      </span>
      <div className="rise-main">
        <div className="rise-txt">
          The move from theatre to film opened an entirely different creative
          world. Hynes made his feature-film debut in Little Men, starring
          alongside Mariel Hemingway. It was the beginning of a career that
          would take him through an increasingly diverse collection of
          productions. Rather than immediately becoming associated with one
          particular genre, he developed his experience through television
          dramas, adventure productions, independent films, and feature
          projects. His early screen career included Tales from the NeverEnding
          Story, where he portrayed Atreyu, and Amazon, where he played a
          central character across the series. These projects introduced him to
          audiences beyond the theatre and established him as a young performer
          with considerable screen experience. There was something important
          happening during those years. He was not simply growing older in the
          industry. He was growing into his craft.
        </div>

        <div className="rise-main-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
