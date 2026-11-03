import "../../styles/home.css";
// import { ContactContextFunction } from "../../context/contact.jsx";
// import image from "/images/img-8.webp";

export function PersonalLife() {
  // const { openContactPopup } = ContactContextFunction();

  return (
    <section className="personal-life" id="personal-life">
      <span className="personal-life-hdr">Three Wise Men and a Baby</span>
      <span className="solid-header">
        The Unexpected Side of a Leading Man{" "}
      </span>
      <div className="personal-life-txt">
        <span>
          Some performances become particularly memorable because they reveal
          something audiences did not necessarily expect. Three Wise Men and a
          Baby was one such example. In the 2022 Hallmark production, Hynes
          played Taylor Brenner, one of three brothers unexpectedly brought
          together by the responsibility of caring for a baby. The film allowed
          him to explore a different kind of comedy. Rather than relying
          entirely on romantic tension, the story found its humour in family
          dynamics, sibling rivalry, personal responsibility, and the
          awkwardness of people being pushed into unfamiliar situations.
        </span>
        {/* <div className="personal-life-text-mid">

        </div> */}
        <span>
          Alongside Andrew W. Walker and Paul Campbell, Hynes helped create a
          dynamic that audiences embraced. The film became a major success for
          Hallmark, and its popularity led to the continuation of the story in
          Three Wiser Men and a Boy. It was an important reminder that his
          appeal extended beyond romance. He could be funny. He could be
          emotionally expressive. He could be part of an ensemble. And he could
          make an audience enjoy the simple pleasure of watching characters grow
          together.
        </span>
        {/* <button onClick={openContactPopup}>Get in Touch</button> */}
      </div>
    </section>
  );
}
