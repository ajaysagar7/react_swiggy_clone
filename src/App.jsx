import Category from "./Components/Category/Category";
import Header from "./Components/Header/Header";
import TopRestaurant from "./Components/Top Restaurant/TopRestaurant";

export default function App() {
  return (
    <>
    <div className="max-w-[1200px] mx-auto  ">
       {/* HEADER */}
    <Header />
    <Category/>
    <TopRestaurant/>

    </div>
    
    </>
  );
    
}