import './index.css'

const TabItem = props => {
  const {tabDetails, updetedState, isactive} = props
  const {tabId, displayText} = tabDetails
  const tabItemClass = isactive ? 'active-tab-btn' : ''
  const onUpdate = () => {
    updetedState(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn${tabItemClass}`}
        onClick={onUpdate}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
