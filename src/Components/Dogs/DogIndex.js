import React, {Component} from 'react';
import Dogs from './Dogs';


class App extends Component {
    constructor(props) {
        super[props];
        this.state = {
            dogs: []
        }
    }
componentDidMount() {

}
fetch('https://dog.ceo/api/breeds/image/random.json')
.then((res) => res.json[])
.then((data) => {
    this.setState({ dogs: data.message})
})
}

render() {
    return (
        <div>
            <h1>
                Check out this Wonderful FoofyBoof
            </h1>
            <Dogs dogs={this.state.dogs}/>
            <div>
    );
}
}

//     const [ results, setResults ] = useState([])

// const fetchResults = () => {
//     let url = `${baseURL}`;

//     fetch(url)
//     .then(res => res.json())
//     //.then(data => setResults(data.response.docs??????))
// }


// }

export default DogIndex;