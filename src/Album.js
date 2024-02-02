function Album(props) {
  return (
    <div>
      <div className="album">
        <img src={props.albumObj.photoName} />
        <div>
          <h3>
            {props.albumObj.name}
            <br></br>
            <br></br>
            <span>{props.albumObj.price}</span>
            <br></br>
          </h3>
          <h4>
            <span>{props.albumObj.stock}</span>
          </h4>
        </div>
      </div>
    </div>
  );
}
export default Album;
