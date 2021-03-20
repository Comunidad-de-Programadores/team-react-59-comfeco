import Layout from "../components/general/Layout";
import CardEventsActive from "../components/eventoActivo/cardEventsActive";

const evento = () => {
  return (
    <Layout>
      <main>
        <div className="backgroundHome"></div>
        <div className="backgroundLigth"></div>
        <div className="containerEvento">
          <CardEventsActive />
        </div>
      </main>
    </Layout>
  );
};

export default evento;
