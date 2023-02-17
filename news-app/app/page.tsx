import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { categories } from "../constants";

async function Homepage() {

    const news: Ahmet = await fetchNews(categories.join(",")); 
  return (
    <div>
        {/* newlist news */}

    </div>
  )
}

export default Homepage