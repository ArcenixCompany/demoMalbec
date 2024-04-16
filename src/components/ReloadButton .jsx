// components/ReloadButton.js

const ReloadButton = () => {
    const handleClick = () => {
      window.location.reload(); // Recarga la página
    };
  
    return (
      <button onClick={handleClick} className="btn shadow-glow">Volver a Jugar</button>
    );
  };
  
  export default ReloadButton;
  