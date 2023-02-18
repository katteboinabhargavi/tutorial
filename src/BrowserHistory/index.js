import './index.css'

const BrowserHistory = props => {
  const {historyDetails, deleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="list-container">
      <div className="list-container">
        <p className="para1">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="main-img" />
        <p className="heading1">{title}</p>
        <p className="para2">{domainUrl}</p>
      </div>
      <div>
        <button className="delete-button" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory
