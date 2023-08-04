import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const title = "Adopta un perrito";
  const dogs = [
    {
      name: "Rocky",
      description:
        "Rocky es un perro enérgico y valiente. Siempre está listo para una aventura y le encanta jugar al aire libre. Es cariñoso con su familia y protege su hogar con lealtad.",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT724vi75FI5hhjY2Mz-ehbZmxpkEy-ZfnibYSjr7I5uoQh0jBuEO4FotTQJFcTbLDjCDs&usqp=CAU",
      tags: [{ text: "Lobo", color: "primary" }],
    },
    {
      name: "Bella",
      description:
        "Bella es una perrita cariñosa y gentil. Tiene un temperamento dulce y es la compañía perfecta para momentos de relajación y caricias. Siempre está dispuesta a dar amor y recibirlo de vuelta.",
      imageSrc:
        "https://media.gq.com.mx/photos/63bda45fbbea9025756973da/master/w_2560%2Cc_limit/perro.jpg",
      tags: [{ text: "Pastor", color: "info" }],
    },
    {
      name: "Zeus",
      description:
        "Zeus es un perro imponente y fuerte. Con su mirada fiera y protectora, es un guardián nato. Sin embargo, también tiene un lado juguetón y le encanta divertirse con su familia.",
      imageSrc:
        "https://images.ecestaticos.com/h34TvzTFVdrau9Un4Wdmwhed_e4=/0x115:2265x1390/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8ec%2F08c%2F85c%2F8ec08c85c866ccb70c4f1c36492d890f.jpg",
      tags: [{ text: "Chihuahua", color: "dark" }],
    },
    {
      name: "Coco",
      description:
        "Coco es un perro juguetón y travieso. Su energía inagotable lo convierte en un compañero perfecto para las actividades al aire libre. Tiene un corazón leal y siempre está listo para hacer reír a quienes lo rodean.",
      imageSrc:
        "https://images.ecestaticos.com/6sBfqVAafBgDnRSzgexcXrntPxs=/0x0:1254x836/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fad9%2F5c2%2F36b%2Fad95c236b7d6ce4df06290141f7fa00a.jpg",
      tags: [{ text: "De calle", color: "danger" }],
    },
  ];

  return (
    <div className="containerprincipal">
      <Header title={title} />
      <div className="card-container">
        {dogs.map(function (dog, index) {
          return (
            <Card
              key={index}
              name={dog.name}
              description={dog.description}
              imageSrc={dog.imageSrc}
              tags={dog.tags}
            />
          );
        })}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
