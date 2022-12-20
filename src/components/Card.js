export default function (props) {
  // const nums = [1, 2, 3, 4, 5];
  // let result = nums.map((x) => x ** 2);
  // console.log(result);

  //   const names = ["alice", "bob", "charlie", "danielle"];
  //   function capLetters(arr) {
  //     return arr.map((el) => {
  //       return el.charAt(0).toUpperCase() + el.slice(1)
  //     })
  // }
  //   console.log(capLetters(names));

  // const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];

  // const pTag = pokemon.map((n) => `<p>${n}</p>`);
  // console.log(pTag);

  return (
    <div className="card-container1">
      <img src={props.img} className="card--start--img" />
      <div className="card-icons">
        <ul>
          <li>
            <img src="./img/Star 1.png" className="card--start--icon" />
          </li>
          <li>{props.ratings}</li>
          <li className="grey">({props.reviewCount} comments) </li>
          <li className="grey">·{props.country}</li>
        </ul>
      </div>
      <div className="card-texts">
        <p>{props.title}</p>
        <div className="card-from">
          <p>
            {" "}
            <span className="bold">From ${props.price} </span>/ person
          </p>
        </div>
      </div>
    </div>
  );
}
