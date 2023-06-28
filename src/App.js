import './App.css'
import {Component} from 'react'
import LanguageItem from './components/LanguageItem'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    clickedBtn: languageGreetingsList[0].id,
    currentLanguage: languageGreetingsList[0],
  }

  toggleGreetings = id => {
    this.setState({
      currentLanguage: languageGreetingsList.filter(each => each.id === id)[0],
      clickedBtn: languageGreetingsList.filter(each => each.id === id)[0].id,
    })
  }

  render() {
    const {clickedBtn, currentLanguage} = this.state

    console.log(currentLanguage)

    return (
      <div className="multilingual-greetings-container">
        <h1>MultiLingual Greetings</h1>
        <ul className="languages-btn-list">
          {languageGreetingsList.map(eachLang => (
            <LanguageItem
              key={eachLang.id}
              details={eachLang}
              isActive={eachLang.id === clickedBtn}
              toggleGreetings={this.toggleGreetings}
            />
          ))}
        </ul>
        <img
          className="greeting-image"
          src={currentLanguage.imageUrl}
          alt={currentLanguage.imageAltText}
        />
      </div>
    )
  }
}

export default App
