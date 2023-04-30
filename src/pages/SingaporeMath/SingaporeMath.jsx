import React from "react";
import "./SingaporeMath.scss";
import PageTitle from "../../components/Titles/PageTitle";
import BarModeling from "../../images/barmodeling.svg";
const SingaporeMath = () => {
  return (
    <div className="singapore-math-page container">
      <PageTitle title="What is Singapore Math?" />
      <div className="section">
        <h2 className="title">About Singapore Math</h2>
        <div className="content">
          <div className="text-container">
            <p className="text">
              Interest in Singapore Math is high because over the last three
              decades Singaporean students have consistently scored at the top
              in mathematics and science on international benchmarks such as
              TIMSS and PISA. These students are some of the best prepared in
              the world.
            </p>
            <p className="text">
              Their success is attributed to the high quality of the{" "}
              <span className="highlighted">Singapore Math curriculum</span> and
              strong teacher preparation programs. The learning process focuses
              on visualization in the context of problem-solving as opposed to
              mere memorization of facts.
            </p>
            <p className="text">
              Interest in Singapore Math is high because over the last three
              decades Singaporean students have consistently scored at the top
              in mathematics and science on international benchmarks such as
              TIMSS and PISA. These students are some of the best prepared in
              the world.
            </p>
          </div>
          <div className="img-container">
            <img src={BarModeling} alt="BarModeling" />
          </div>
        </div>
      </div>
      <div className="section">
        <h2 className="title">What is the Singapore Math Method?</h2>
        <div className="content">
          <div className="text-container">
            <p className="text">
              The Singapore Math method is founded on the constructivist
              research pioneered by Jerome Bruner in the United States in the
              1960s. The Singapore Math pedagogy is based on the
              Concrete-Pictorial-Abstract Sequence. In this approach, students’
              learning experiences are situated in a meaningful context that
              begins with explorations of concrete objects and virtual
              manipulatives and is followed by pictorial and abstract
              representations of these situations.
            </p>
            <p className="text">
              Mathematical concepts are abstract. Elementary school age children
              are entering the developmental phase where they can understand
              abstractions. It is important to create a bridge to understanding
              abstractions in a concrete and relevant context using common
              objects. Examples of common objects are apples, crayons, toy cars,
              etc. Examples of manipulatives include counters, connected cubes
              and others. The use of common objects and manipulatives
              corresponds to the concrete state. The pictures of these objects
              correspond to the pictorial representations of the objects.
              Subsequent calculations and equations correspond to the abstract
              stage.
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <h2 className="title">What is the Singapore Math Pedagogy?</h2>
        <div className="content">
          <div className="text-container">
            <p className="text">
              The Singapore Math pedagogy for{" "}
              <span className="highlighted"> teaching math </span> is based
              primarily on the five learning theories that were developed by
              leading European and American educators, mathematicians and
              psychologists of the 19th and 20th century: Jean Piaget, Jerome
              Bruner, Zoltan Diens, Lev Vigotsky, and Richard Skemp.
            </p>
            <p className="text">
              Jean Piaget, psychologist and educator, suggested that students
              should have ample learning time to accommodate new ideas. That’s
              why Singapore <span className="highlighted">Math programs</span>{" "}
              contain anchor tasks which are designed to be dealt with for a
              long time over the course of a unit. According to Piaget, children
              need to continually construct their understanding and then
              reconstruct prior ideas as they mature.
            </p>
            <p className="text">
              Jerome Bruner, an educator and a student of Jean Piaget, advocated
              for children to engage in concrete activities prior to moving to
              abstract learning. Bruner, believed that a student could learn
              almost anything, provided that instruction would go through
              appropriate stages. Each level in the instructional sequence
              should become more abstract.
            </p>
            <p className="text">
              Zoltan Diens, mathematician and educator, advocated that informal
              learning through exploration should take place before structured
              learning. He noticed that in trying to solve a problem, most
              people would engage in a random search for a solution. He called
              this stage “Free Play” and suggested that all learning should
              begin at this stage.
            </p>
            <p className="text">
              Lev Vigotsky, psychologist and educator, advocated cooperative
              learning in the zone of proximal development (ZPD). ZPD is the
              distance between a student’s independent problem-solving level and
              the potential level of problem solving under the guidance of an
              adult/expert.
            </p>
            <p className="text">
              Richard Skemp, mathematician and educator, suggested that it is
              important for students to develop a relational understanding of
              conceptual ideas. He believed that even elementary school children
              could create complex and complete conceptual frameworks and, as a
              result, they are capable of learning with deep understanding.
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <h2 className="title">What is Bar Modeling?</h2>
        <div className="content">
          <div className="text-container">
            <p className="text">
              <span className="highlighted">Bar Modeling</span> or model drawing
              is an ingenious problem-solving strategy built into the Singapore
              Math curriculum. Bar Modeling is a pictorial representation of
              mathematical quantities and their relationships. It helps students
              visualize abstract mathematical concepts to gain deeper
              understanding of the operations they need to use in order to solve
              word problems.
            </p>
            <p className="text">
              Bar Modeling improves student problem solving abilities because
              visual representations of word problems allow students to grasp
              them in their entirety (wholes) with minimum effort (law of
              Pragnanz). Bar Modeling allows students to organize textual
              information and then restructure it visually in a model. It helps
              students think holistically, gain insight and then solve the
              problem.
            </p>
            <p className="text">
              Bar Modeling is a term that was coined in the United States. The
              original term is the Model Method or Model Drawing that was
              developed in Singapore in the 1980s. Bar Models are also called
              Tape Diagrams or Strip Diagrams in the Common Core State Standards
              in Mathematics, New York State Modules, Eureka Math and some other
              elementary mathematics programs used in the United States.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingaporeMath;
