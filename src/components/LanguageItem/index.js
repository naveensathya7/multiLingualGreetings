import './index.css'

const LanguageItem = props => {
  const {details, isActive, toggleGreetings} = props

  const {buttonText, id} = details
  const clickedButton = isActive ? 'clicked-btn' : ''

  const onClickButton = () => {
    toggleGreetings(id)
  }
  return (
    <li className="language-item">
      <button
        className={`language-btn ${clickedButton}`}
        onClick={onClickButton}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default LanguageItem
