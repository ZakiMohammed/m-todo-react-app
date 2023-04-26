import PropTypes from 'prop-types';

const PageTitle = ({ title }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <h4 className='border-bottom pb-3'>{title}</h4>
        </div>
      </div>
    </>
  )
}

export default PageTitle

PageTitle.propTypes = {
  title: PropTypes.string
}

PageTitle.defaultProps = {
  title: ''
}
