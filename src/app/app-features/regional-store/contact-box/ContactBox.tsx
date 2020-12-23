import MailIcon from '../../../../../public/svg/MailIcon.svg'
import MapIcon from '../../../../../public/svg/MapIcon.svg'
import LargePhone from '../../../../../public/svg/LargePhone.svg'

export default function ContactBox(props): JSX.Element {
  return (
    <>
      <div className="box-containers">
        <h1 className="contact-box-h1">{props.title}</h1>
        <div className="contact-box-info-container">
          <div className="contact-box-info">
            <i className="svg">
              <MapIcon />
            </i>
            {props.location}
          </div>
          <div className="contact-box-info">
            <i className="svg">
              <MailIcon />
            </i>
            {props.email}
          </div>
          <div className="contact-box-info">
            <i className="svg">
              <LargePhone />
            </i>
            {props.phone}
          </div>
        </div>
      </div>
    </>
  )
}
