import React, { Component } from "react"
import axios from "axios"

export default class DadJoke extends Component {
    state = {
        joke: ""
    }

    // componentDidMount 
    // runs only once when the elemounts 'mounts' (aka is rendered for the first time)
    // IMPORTANT -- runs only once, you can modify state from this method
    componentDidMount() {
        console.log('the dad joke component has mounted!')
        const options = {
            headers: {
                Accept: 'application/json'
            }
        }

        axios.get('https://icanhazdadjoke.com/', options)
            .then(response => {
                console.log(response.data)

                this.setState({
                    joke: response.data.joke
                })
            })
            .catch(console.log)
    }

    // componentDidUpdate
    // runs each time the component is re-rendered
    // aka runs each time state is modified
    componentDidUpdate() {
        // here a console.log of state will always be accurate
        console.log(this.state)
        console.log('the component updated!')
    }

    // componentWillUnmount
    // runs one time when the component is removed from the virtual DOM (destroyed -- no longer needed)
    componentWillUnmount() {
        // if you mount anything on the window/document
        // such as itervals, or eventListeners 
        // animation frames -- you need to remove them
    }

    // event handlers 
    handleFetchJoke = async () => {
        try {
            const options = {
                headers: {
                    Accept: "application/json"
                }
            }
            const response = await axios.get('https://icanhazdadjoke.com/', options)
            this.setState({
                joke: response.data.joke
            })
        } catch (err) {
            console.log()
        }
    }

    render() {
        return (
            <div>
                <h1>Dad Joke:</h1>
                <p>{this.state.joke}</p>

                <button onClick={this.handleFetchJoke}>fetch new joke</button>
            </div>
        )
    }
}