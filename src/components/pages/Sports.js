import React from "react";
import "./interiit.css";
import Navbar from "../Navbar";
import Footer from "../Footer"
import useDocumentTitle from "../useDocumentTitle";


// dynamic titles props
function Page(props) {
  const titleSuffix = ' | Expectations, IIT Mandi'
  useDocumentTitle(`${props.title}${titleSuffix}`)
  return <div>{props.content}</div>
}

function Sports() {
  return (
    <Page content={
      <div>
      <Navbar />
      <div className="heading">
        <h3>Sports Facilities</h3>
      </div>
      <div className="container-meet">
        <div className="container-content">
          <div className="image">
            <img
              src="https://dummyimage.com/700x400/000/fff"
              className="sports-image"
            />
          </div>
          <div className="text">
            <h2 className="meet-heading">Swimming Pool</h2>
            <p className="container-text">
            Cricket ground, football ground, basketball court, volleyball court, badminton court, table tennis complex yeh sb south campus me hai
            And gym bhi hai south me
            Aur north me
            Badminton court, table tennis complex, gym, squash room, swimming pool, half basketball court,
            Yeh sb hai
            Hockey ground bhi north me hai
            </p>
          </div>
        </div>
        <div className="container-content">
          <div className="image">
            <img
              src="https://dummyimage.com/700x400/000/fff"
              className="sports-image"
            />
          </div>
          <div className="text">
            <h2 className="meet-heading">Sports Complex</h2>
            <p className="container-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maiores reprehenderit, inventore fuga facilis quis. Soluta, minus impedit dolore culpa eius numquam explicabo repudiandae cum vitae libero sed tempora consequatur eligendi consectetur perferendis alias optio vero molestiae voluptas voluptate labore exercitationem iure! Ad porro at blanditiis sunt! Dicta hic similique quis? Officia voluptate quod rem maiores ullam consequuntur facere dolores.
            </p>
          </div>
        </div>
        <div className="container-content">
          <div>
            <img
              src="https://dummyimage.com/700x400/000/fff"
              className="sports-image"
            />
          </div>
          <div className="text">
            <h2 className="meet-heading">Grounds</h2>
            <p className="container-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, corrupti. Corrupti asperiores ducimus impedit quibusdam praesentium dicta, fugit aut consequatur voluptatibus voluptate. Saepe ea iusto quo libero obcaecati soluta animi eveniet, illo aliquid omnis maxime assumenda voluptatum similique accusantium sed quis inventore dicta nobis, atque sequi, tempora a laboriosam expedita mollitia! Inventore velit vero vel quisquam corporis in natus doloremque?
            </p>
          </div>
        </div>
        <div className="container-content">
          <div className="image">
            <img
              src="https://dummyimage.com/700x400/000/fff"
              className="sports-image"
            />
          </div>
          <div className="text">
            <h2 className="meet-heading">Central Gym</h2>
            <p className="container-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo impedit iste molestias, dolor officiis, aliquid veniam ullam voluptate quia soluta enim placeat saepe accusamus eos architecto reiciendis iusto ducimus natus doloribus? Necessitatibus alias assumenda nesciunt fugit magni illo aspernatur veniam repellendus? Aliquid earum provident molestias quibusdam rerum doloribus inventore! Sapiente, non adipisci alias ut ullam voluptate fugit incidunt animi et?
            </p>
          </div>
        </div>
        <div className="container-content">
          <div className="image">
            <img
              src="https://dummyimage.com/700x400/000/fff"
              className="sports-image"
            />
          </div>
          <div className="text">
            <h2 className="meet-heading">Courts</h2>
            <p className="container-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo impedit iste molestias, dolor officiis, aliquid veniam ullam voluptate quia soluta enim placeat saepe accusamus eos architecto reiciendis iusto ducimus natus doloribus? Necessitatibus alias assumenda nesciunt fugit magni illo aspernatur veniam repellendus? Aliquid earum provident molestias quibusdam rerum doloribus inventore! Sapiente, non adipisci alias ut ullam voluptate fugit incidunt animi et?
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    } title='Sports' />
  );
}

export default Sports;
