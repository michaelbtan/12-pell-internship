import './Layout.css'
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"

export default function Layout(props) {
    return (
      <div className="layout"> 
        <div className="nav">
          <Nav />
        </div>
          <div className="body">
            {props.children}
        </div>
        <div className="footer">
          <Footer />
        </div>
        </div>
    )
}