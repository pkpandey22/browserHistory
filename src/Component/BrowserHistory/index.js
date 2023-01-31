import './index.css'

const BrowserHistory = props => {
  const {eachUser, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachUser

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-container">
      <div className="browser-list">
        <div className="title-container">
          <p>{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <p className="title">{title}</p>
          <p>{domainUrl}</p>
        </div>
        <button
          type="button"
          className="delete-btn"
          onClick={onDeleteHistory}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory
