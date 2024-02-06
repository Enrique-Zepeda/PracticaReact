import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { ComprasPage } from "./pages/ComprasPage"
import { CarritoPage } from "./pages/CarritoPage"

export const CarritoApp = () => {
  return (
    <>
    <NavBar></NavBar>
    <div className="container">
    <Routes>
        <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
        <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
        <Route path="/*" element={<Navigate to="/"></Navigate>}> </Route>
    </Routes>
    </div>
    </>
  )
}
