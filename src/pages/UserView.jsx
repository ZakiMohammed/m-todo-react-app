import PropTypes from 'prop-types';

const UserView = ({ user }) => {
  return (
    <>
      <div className="card mb-2">
        <div className="card-body">
          <div className="row">
            <div className="col-3 col-lg-1">
              <img src={`https://i.pravatar.cc/300?img=${user.id}`} alt="Avatar" className="img-fluid rounded-circle" />
            </div>
            <div className="col-9 col-lg-11">
              <h4 className="card-title">{user.name}</h4>
              <h6 className="card-subtitle mb-2 text-muted">{user.company.name}</h6>
              <p className="card-text">
                {user.email} | {user.website}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserView

UserView.propTypes = {
  user: PropTypes.object
}
