import React from "react";

export const NavPage = () => {
  return (
    <>
      <p>Page:{page}</p>
      {page > 1 ? (
        <button
          className="btn btn-primary m-2 btn-sm"
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Pagina anterior
        </button>
      ) : (
        console.log("No hay pagina mayor a 1")
      )}
      <button
        className="btn btn-primary m-2 btn-sm"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Siguiente Pagina
      </button>
    </>
  );
};
