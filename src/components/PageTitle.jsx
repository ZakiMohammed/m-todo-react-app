import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

const PageTitle = ({ title, link }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          {
            link ? <NavLink className="btn btn-primary btn-sm float-end" to={link}>Add</NavLink> : ''
          }
          <h4 className='border-bottom pb-3'>{title}</h4>
        </div>
      </div>
    </>
  )
}

export default PageTitle

PageTitle.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
}

PageTitle.defaultProps = {
  title: '',
  link: ''
}
