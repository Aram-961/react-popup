import Popup from "./components/Popup";
import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <input
        type="button"
        value="Click to Open Popup's"
        onClick={togglePopup}
      />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini
      </p>

      {isOpen && (
        <Popup
          content={
            <>
              <b>Design your Popup</b>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              {/* <button
                onClick={() => {
                  console.log("button is clicked TEST");
                }}
              >
                Test button
              </button> */}
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default App;
