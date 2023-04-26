import PageTitle from '../components/PageTitle'

const Contact = () => {
  return (
    <>
      <PageTitle title={'Contact'} />

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, hic?</p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15092.765388875927!2d72.828261!3d18.967155!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce40286f418d%3A0x6e6b2e24d141231e!2sMasterfax%20Enterprises!5e0!3m2!1sen!2sin!4v1682522133697!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{border: '0', borderRadius: '0.5rem'}}
        allowFullScreen={true}
        loading="lazy">
      </iframe>
    </>
  )
}

export default Contact