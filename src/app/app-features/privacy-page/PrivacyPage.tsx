import Breadcrumbs from '../../common/breadcrumbs/Breadcrumbs';
import { useContext } from 'react';
import { AppContext } from '../../../context';
import { createMarkup } from '../../../utils/index';

export default function PrivacyPage(): JSX.Element {
  const { appContext } = useContext(AppContext);
  const { dictionary } = appContext;

  const path = [
    {
      name: dictionary.privacy,
      link: '/privacy',
    },
  ];

  return (
    <>
      <Breadcrumbs path={path} />
      <div className="guarantees-container">
        <h2 className="terms-page-name">{dictionary.privacy}</h2>
        <p className="terms-paragraph-18-regular">{dictionary.privacyText1}</p>

        <h4 className="terms-heading">1. {dictionary.privacyTitle1}</h4>
        <p dangerouslySetInnerHTML={createMarkup(dictionary.privacyText2)} />

        <h4 className="terms-heading">2. {dictionary.privacyTitle2}</h4>
        <p dangerouslySetInnerHTML={createMarkup(dictionary.privacyText3)} />

        <h4 className="terms-heading">3. {dictionary.privacyTitle3}</h4>
        <div>
          <div
            dangerouslySetInnerHTML={createMarkup(dictionary.privacyText4)}
          ></div>
          <ul className="terms-list">
            <li className="terms-list-item">{dictionary.privacyList1};</li>
            <li className="terms-list-item">{dictionary.privacyList2};</li>
            <li className="terms-list-item">{dictionary.privacyList3};</li>
            <li className="terms-list-item">{dictionary.privacyList4};</li>
            <li className="terms-list-item">{dictionary.privacyList5};</li>
            <li className="terms-list-item">{dictionary.privacyList6}.</li>
          </ul>
          <div
            dangerouslySetInnerHTML={createMarkup(dictionary.privacyText5)}
          ></div>{' '}
        </div>

        <h4 className="terms-heading">4. {dictionary.privacyTitle4}</h4>
        <p dangerouslySetInnerHTML={createMarkup(dictionary.privacyText6)} />

        <h4 className="terms-heading">5.1. {dictionary.privacyTitle5}</h4>
        <p dangerouslySetInnerHTML={createMarkup(dictionary.privacyText7)} />

        <h4 className="terms-heading">6.1.{dictionary.privacyTitle61}:</h4>
        <p className="terms-paragraph-18-bold">
          6.1.1. {dictionary.privacyTitle6}
        </p>
        <div>
          <div
            dangerouslySetInnerHTML={createMarkup(dictionary.privacyText8)}
          ></div>
          <p
            className="terms-paragraph-18-bold"
            dangerouslySetInnerHTML={createMarkup(dictionary.privacyText9)}
          />
          <div
            dangerouslySetInnerHTML={createMarkup(dictionary.privacyText10)}
          />
        </div>

        <h4 className="terms-heading">7.1. {dictionary.privacyTitle7}</h4>
        <p dangerouslySetInnerHTML={createMarkup(dictionary.privacyText11)} />

        <h4 className="terms-heading">8.1. {dictionary.privacyTitle8}</h4>
        <p dangerouslySetInnerHTML={createMarkup(dictionary.privacyText12)} />

        <h4 className="terms-heading">9.1. {dictionary.privacyTitle9}</h4>
        <p dangerouslySetInnerHTML={createMarkup(dictionary.privacyText13)} />
      </div>
    </>
  );
}
