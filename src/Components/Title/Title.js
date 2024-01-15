import "./Title.scss";

const Title = (props) => {
  return (
    <div className="title" data-toggle="title-show">
      <h1>{props.label}</h1>;
    </div>
  );
};

export default Title;
