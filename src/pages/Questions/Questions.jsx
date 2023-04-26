import React from "react";
import "./Questions.scss";
// import Direction from '../../components/Direction/Direction';
import PageTitle from "../../components/Titles/PageTitle";
import Question from "./Question/Question";

const Questions = () => {
  window.scrollTo(0, 0);

  return (
    <div className="questions-section">
      <div className="container">
        {/* <Direction
                    categorie={{ name: 'Tez-tez verilən suallar', slug: '/questions' }}
                /> */}
        <PageTitle title="Tez-tez verilən suallar" />
        <div className="questions">
          <Question
            question={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet egestas interdum dui nibh ut fermentum posuere. Mi ultrices phasellus massa lectus tellus sem? "
            }
            answer={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut. ANkaskakjs ljasljalmxlssajojsqlmawk jdixuakxkans"
            }
          />
          <Question
            question={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet egestas ?"
            }
            answer={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut. ANkask akjsljasljalmxlssa jojsqlmawk jdixuakxkans"
            }
          />
          <Question
            question={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet egestas interdum dui nibh ut fermentum posuere. Mi ultrices phasellus massa lectus tellus sem? "
            }
            answer={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut. ANkask akjsljasljalmxlssaj ojsqlmawk jdixuakxkans"
            }
          />
          <Question
            question={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet egestas ?"
            }
            answer={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut. ANkaskak jsljasljalm xlssajoj sqlmawkjd ixua kxkans"
            }
          />
          <Question
            question={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet egestas interdum dui nibh ut fermentum posuere. Mi ultrices phasellus massa lectus tellus sem? "
            }
            answer={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut. ANkaskak jsljasljalm xlssajoj sqlmawkjd ixua kxkans"
            }
          />
          <Question
            question={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet egestas ?"
            }
            answer={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut. ANkaskak jsljasljalm xlssajoj sqlmawkjd ixua kxkans"
            }
          />
          <Question
            question={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet egestas interdum dui nibh ut fermentum posuere. Mi ultrices phasellus massa lectus tellus sem? "
            }
            answer={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut. ANkaskak jsljasljalm xlssajoj sqlmawkjd ixua kxkans"
            }
          />
          <Question
            question={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet egestas ?"
            }
            answer={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut. ANkaskak jsljasljalm xlssajoj sqlmawkjd ixua kxkans"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Questions;
