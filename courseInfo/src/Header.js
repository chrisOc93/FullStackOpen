import './index.css';

const Header = (props) => {
    console.log(props)
    return(
        <div className="header"> <h1>{props.course}</h1> </div>
        )
}

export default Header
