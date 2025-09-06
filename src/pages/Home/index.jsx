import React from "react";
import Banner from "../../components/Banner";
import HomeBanner from "../../assets/bannerHome.png";
import Card from "../../components/Card";
import logements from "../../logements.json";
import "./Home.scss";

function Home() {
  return (
    <main className="main_home">
      {/* Bannière */}
      <Banner image={HomeBanner} text="Chez vous, partout et ailleurs" />

      {/* Grille de cards */}
      <section className="home_cards">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </section>
    </main>
  );
}

export default Home;
