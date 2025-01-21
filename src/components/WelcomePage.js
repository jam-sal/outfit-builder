import { NavBar } from "./NavBar";

export function WelcomePage() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="main">
        <h1>Welcome to your Outfit Builder</h1>
        <p>Import photos of your clothes and create outfit ideas here without needing to ransack your wardrobe!</p>
        <div>
          <button>Clothes</button>
          <button>Outifts</button>
        </div>
      </div>
    </div>
  );
}