import './index.css'

const CountryItem = props => {
  const {data, onClickButton} = props
  const {name, id, isVisited} = data

  const handleButtonClick = () => {
    onClickButton(id)
  }

  return (
    <div>
      <div className="item-container">
        <h1 className="name">{name}</h1>
        {isVisited ? (
          <p>Visited</p>
        ) : (
          <button
            onClick={handleButtonClick}
            type="button"
            className="visit-button"
          >
            Visit
          </button>
        )}
      </div>
    </div>
  )
}

export default CountryItem
