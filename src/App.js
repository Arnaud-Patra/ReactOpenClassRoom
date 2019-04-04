import React, { Component } from 'react'
import './App.css'
import Card from './Card'
import GuessCount from './GuessCount'
import * as ReactDOM from "react-dom";



class App extends Component {

    render() {

        const won = new Date().getSeconds() % 2 === 0;

        return (
            <div className="memory">
                <GuessCount guesses={0} />
                <Card card="😀" feedback="hidden"  onClick={App.handleCardClick} />
                <Card card="🎉" feedback="justMatched" onClick={App.handleCardClick}/>
                <Card card="💖" feedback="justMismatched" onClick={App.handleCardClick}/>
                <Card card="🎩" feedback="visible" onClick={App.handleCardClick}/>
                <Card card="🐶" feedback="hidden" onClick={App.handleCardClick}/>
                <Card card="🐱" feedback="justMatched" onClick={App.handleCardClick}/>

                {won && (<p>Gagné !</p>)}
            </div>


        )
    }

    static handleCardClick(card) {
        console.log(card, 'clicked')
    }

}

export default App
