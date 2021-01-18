import { useContext } from 'react';
import { AppContext } from '../../../context';
import { createMarkup } from '../../../utils';
import Breadcrumbs from '../../common/breadcrumbs/Breadcrumbs';

export default function TermsPage() {
  const { appContext } = useContext(AppContext);
  const { dictionary } = appContext;

  const path = [
    {
      name: dictionary.termsAndConditions,
      link: '/terms',
    },
  ];

  return (
    <>
      <Breadcrumbs path={path} />
      <div className="guarantees-container">
        <h2 className="terms-page-name">{dictionary.termsAndConditions}</h2>

        <h4 className="terms-heading">1. {dictionary.privacyTitle2}</h4>
        <p dangerouslySetInnerHTML={createMarkup(dictionary.termsText1)} />

        <h4 className="terms-heading">2.{dictionary.termsTitle1}</h4>
        <p dangerouslySetInnerHTML={createMarkup(dictionary.termsText2)} />

        <h4 className="terms-heading">3. {dictionary.termsTitle2}</h4>
        <div>
          <div dangerouslySetInnerHTML={createMarkup(dictionary.termsText3)} />
          <ul className="terms-list">
            <li className="terms-list-item">{dictionary.termsList1}</li>
            <li className="terms-list-item">{dictionary.termsList2}</li>
            <li className="terms-list-item">{dictionary.termsList3}</li>
            <li className="terms-list-item">{dictionary.termsList4}</li>
            <li className="terms-list-item">{dictionary.termsList5}</li>
            <li className="terms-list-item">{dictionary.termsList6}</li>
          </ul>
          <br />
          <div dangerouslySetInnerHTML={createMarkup(dictionary.termsText4)} />
        </div>

        <h4 className="terms-heading">4. {dictionary.termsTitle3}</h4>
        <p dangerouslySetInnerHTML={createMarkup(dictionary.termsText5)} />

        <h4 className="terms-heading">5.1. {dictionary.termsTitle4}</h4>
        <p dangerouslySetInnerHTML={createMarkup(dictionary.termsText6)} />

        <h4 className="terms-heading">6.2. {dictionary.termsTitle5}</h4>
        <p dangerouslySetInnerHTML={createMarkup(dictionary.termsText7)} />

        <h4 className="terms-heading">{dictionary.termsTitle6}</h4>
        <p dangerouslySetInnerHTML={createMarkup(dictionary.termsText8)} />
      </div>
    </>
  );
}
