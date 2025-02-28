import React from "react";
import styles from "./About.module.css"; // Importação do CSS global

import quizito2 from "../../logoImg/quizito1.jpg";

const Achievements = () => {
  return (
    <section className={styles.about_achievements}>
      <div className={styles.about_achievements_container}>
        <div className={styles.about_achievements_left}>
          <img src={quizito2} alt="Conquistas" />
        </div>

        <div className={styles.about_achievements_right}>
          <h1>Conquistas</h1>
          <p>
            "Na jornada da vida, as conquistas desempenham um papel fundamental..."
          </p>

          <div className={styles.achievements_cards}>
            <div className={styles.achievements_card}>
              <span className={styles.achievements_icon}>
                <i className="bx bx-video"></i>
              </span>
              <h3>450+</h3>
              <p>Cursos</p>
            </div>

            <div className={styles.achievements_card}>
              <span className={styles.achievements_icon}>
                <i className="bx bxs-user-check"></i>
              </span>
              <h3>79,000+</h3>
              <p>Estudantes</p>
            </div>

            <div className={styles.achievements_card}>
              <span className={styles.achievements_icon}>
                <i className="bx bxl-graphql"></i>
              </span>
              <h3>26+</h3>
              <p>Prêmios</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
