import './index.css'

const VisitedCountries = props => {
  const {visitedArrayList, onRemoveButton} = props

  const handleRemove = id => {
    onRemoveButton(id)
  }

  return (
    <div className="visited-countries">
      {visitedArrayList.length === 0 ? (
        <h1 style={{color: 'white', textAlign: 'center', alignSelf: 'center'}}>
          No Countries Visited yet!
        </h1>
      ) : (
        <div className="bottom-container">
          {visitedArrayList.map(each => (
            <div>
              <div>
                <img src={each.imageUrl} alt="thumbnail" className="image" />
              </div>
              <div className="remove-button-container">
                <h1 className="name-heading">{each.name}</h1>
                <button
                  onClick={() => handleRemove(each.id)}
                  className="remove-button"
                  type="button"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default VisitedCountries
