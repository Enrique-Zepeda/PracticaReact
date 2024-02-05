import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { HomeScreen } from "../routes/HomeScreen"
import { AboutScreen } from "../routes/AboutScreen"
import { ContactScreen } from "../routes/ContactScreen"
import { UserProvider } from "../context/UserProvider"
import { LoginScreen } from "../routes/LoginScreen"

export const App = () => {
  return (

    <UserProvider>

    <Navbar></Navbar>

    <Routes>
      <Route path="/" element={ <HomeScreen></HomeScreen> }></Route>
      <Route path="/login" element={ <LoginScreen></LoginScreen> }></Route>
      <Route path="/about" element={ <AboutScreen></AboutScreen> }></Route>
      <Route path="/contact" element={ <ContactScreen></ContactScreen> }></Route>
      <Route path="/*" element={ <Navigate to ='/'></Navigate> }></Route>
    </Routes>
    </UserProvider>
    
  )
}
