import CountryItem from '../CountryItem'
import './index.css'

const CountriesList = props => {
  const {initialCountriesList, onClickButton} = props

  return (
    <div className="container">
      {initialCountriesList.map(each => (
        <CountryItem onClickButton={onClickButton} key={each.id} data={each} />
      ))}
    </div>
  )
}

export default CountriesList
