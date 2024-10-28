import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import IntroId from "./pages/IntroId/IntroId";
import Login from "./pages/LogIn/Login";
import ProductPage from "./components/ProductPage/ProductPage";
import ProductNav from "./components/ProductNav/ProductNav";
import Cart from "./Components/Cart/Cart";

function App() {
  const information = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4I2UdTlKbv3vEE5s0BsIwtEdj45QfcWBxzDo_2z-pgy22nNL2WJHh6bciit4sUSMNAiM&usqp=CAU",
      title: "Exportation",
      text: "Travel clothes are typically designed for comfort, ease of movement, and functionality.",
      buttonText: "Info",
      additionalInfo:
        "This is some extra information for Exportation.Exportation refers to the act or practice of sending goods or services to another country for sale. This includes the process of preparing items, such as packing them into crates, for delivery to foreign markets.Arise also provides assurance that American consumers will hear American voices on the line’s other end, helping to reverse the exportation of call center jobs to places like the Philippines.",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSeqLbiwIAtf-rs-Vi5aNM6OXoUTu598GlFyvTRHpOMRbHj3JY1XGxNbfa51toV-Wq6vU&usqp=CAU",
      title: "Material of clothes",
      text: "Potential outdoor conditions, often avoiding fine or delicate fabrics enhance mobility.",
      buttonText: "Info",
      additionalInfo:
        "Extra details about Material of clothes.Material Design is a design system created by Google that provides a set of guidelines, components, and tools to help teams build high-quality digital experiences across platforms including Android, iOS, Flutter, and the web. It's adaptable and focuses on user interface design best practices, backed by open-source code.",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1788NxU5rYqRTaLZadW2Juw3oxmoqSv8P4Lamqtlw4aMYD1C8jzGmFbATmYS_n17ub9I&usqp=CAU",
      title: "Brand of company",
      text: "They often incorporate stretchy materials such as spandex, elastane, or Lycra to enhance mobility.",
      buttonText: "Info",
      additionalInfo:
        "Detailed information about the Brand of company.BRND is a female-founded Australian brand focused on empowering women by helping them feel comfortable and confident in their bodies. They aim to create engaging and meaningful brand experiences by understanding and connecting with their customers.",
    },
  ];

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/product", element: <ProductNav /> },
    { path: "/introid/:id", element: <IntroId infoss={information} /> },
    { path: "/login", element: <Login /> },
    { path: "/product/:id", element: <ProductPage /> },
    { path: "/buy", element: <Cart /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
