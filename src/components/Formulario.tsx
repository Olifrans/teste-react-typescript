const Formulario = () => {
  return (
    <form>
      <input type="text" placeholder="Insira os nomes do participantes"/>
      {/* <input type="text" placeholder="Qualquer coisa"/> */}


      <button disabled={true}>Adicionar</button>
      {/* <button disabled={false}>Adicionar</button> */}


    </form>
  );
};

export default Formulario;
