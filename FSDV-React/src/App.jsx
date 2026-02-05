import "./App.css"
import Card from "./card"
import Menu from "./menu";

function App() {
  return(
    <>
    <Menu/>
    <div className="card-container">
      <Card
      image="https://marketplace.canva.com/EAGUhHGuQOg/1/0/1003w/canva-orange-and-blue-anime-cartoon-illustrative-novel-story-book-cover-WZE2VIj5AVQ.jpg"
      title="React Basics"
      description="Learn about components,props and state"
      />
       <Card
      image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/old-books-cover-design-template-528851dfc1b6ed275212cd110a105122_screen.jpg?ts=1698687093"
      title="Java Script"
      description="Master the language behind react"
      />
      <Card
      image="https://miblart.com/wp-content/uploads/2024/01/main-6-scaled.jpg"
      title="CSS Tricks"
      description="Master the language behind react"
      />
    </div>
    </>
  )
}
export default App;