import main from "../assets/images/main.svg";
export default function Home() {
  return (
    <div className="container page">
      <div>
        <img src={main} alt="hunt" className="img main-img" />
      </div>
      <div>
        <h1>Welcome!</h1>
      </div>
    </div>
  );
}
