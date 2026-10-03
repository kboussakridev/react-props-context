import { useState } from "react";

function Button({ text, color, size, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      size="medium"
      className={`
        rounded-lg font-medium transition-all duration-300 
        ${size === "small" ? "text-sm px-4 py-1" : ""}
        ${size === "medium" ? "text-base px-6 py-2" : ""}
        ${size === "large" ? "text-lg px-8 py-3" : ""}
        ${size === "full" ? "w-full text-base px-6 py-2" : ""}
        ${color === "primary" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}
        ${color === "secondary" ? "bg-gray-500 hover:bg-gray-600 text-white" : ""}
        ${color === "success" ? "bg-green-500 hover:bg-green-600 text-white" : ""}
        ${color === "danger" ? "bg-red-500 hover:bg-red-600 text-white" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        `}
    >
      {text}
    </button>
  );
}

function BasicProps() {
  const [clickText, setClickText] = useState({
    text: "",
    color: "",
  });
  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Basic Props</h2>
      <p className="mb-4 text-gray-600">
        Cet exemple montre comment utiliser les props de base dans un composant
        React. Le composant `Button` reçoit plusieurs props qui permettent de
        personnaliser son apparence et de contrôler son comportement.
      </p>
      {/* useState sur clickText */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-3">
          <Button
            text="Primary"
            color="primary"
            size="medium"
            onClick={() =>
              setClickText({
                text: "Primary clicked!",
                color: "text-blue-500",
              })
            }
          />
          <Button
            text="Secondary"
            color="secondary"
            size="medium"
            onClick={() =>
              setClickText({
                text: "Secondary clicked!",
                color: "text-gray-500",
              })
            }
          />
          <Button
            text="Success"
            color="success"
            size="medium"
            onClick={() =>
              setClickText({
                text: "Success clicked!",
                color: "text-green-500",
              })
            }
          />
          <Button
            text="Danger"
            color="danger"
            size="medium"
            disabled={true}
            onClick={() =>
              setClickText({
                text: "Danger clicked!",
                color: "text-red-500",
              })
            }
          />
        </div>
      </div>

      {/* size examples */}
      <div className="space-y-4 mt-6">
        <div className="flex flex-wrap gap-3">
          <Button
            text="Primary"
            color="primary"
            size="small"
            onClick={() =>
              setClickText({
                text: "Primary clicked!",
                color: "text-blue-500",
              })
            }
          />
          <Button
            text="Secondary"
            color="secondary"
            size="medium"
            onClick={() =>
              setClickText({
                text: "Secondary clicked!",
                color: "text-gray-500",
              })
            }
          />
          <Button
            text="Success"
            color="success"
            size="large"
            onClick={() =>
              setClickText({
                text: "Success clicked!",
                color: "text-green-500",
              })
            }
          />
          <Button
            text="Danger"
            color="danger"
            size="full"
            disabled={true}
            onClick={() =>
              setClickText({
                text: "Danger clicked!",
                color: "text-red-500",
              })
            }
          />
        </div>
      </div>
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-gray-700 text-lg font-bold ">
          Couleurs différentes :{" "}
          <span className={clickText.color}>{clickText.text}</span>
        </p>
      </div>
    </section>
  );
}

export default BasicProps;
