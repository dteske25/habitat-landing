import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "75vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "center",
        gap: "24px",
      }}
    >
      <div
        style={{
          flex: "0 0 auto",
        }}
      >
        <img src="https://via.placeholder.com/1000x600" alt="placeholder" />
      </div>

      <div>
        <a href="https://discord.gg/fH6DcwgwVA">
          <Button variant="outline-primary" size="lg">
            Join our Discord
          </Button>
        </a>
      </div>
      <div>
        <a href="https://cerv.is/0119gucg3eW">
          <Button variant="outline-primary" size="lg">
            Build Day Sign-ups
          </Button>
        </a>
      </div>
      <div>
        <a href="https://habitatomaha.org/donate/young-professionals/">
          <Button variant="outline-primary" size="lg">
            Pay Your Dues
          </Button>
        </a>
      </div>
    </div>
  );
}

export default App;
