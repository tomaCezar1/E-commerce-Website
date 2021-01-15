import Breadcrumbs from '../../common/breadcrumbs/Breadcrumbs';
import { createMarkup } from '../../../utils/index';
import { useContext } from 'react';
import { AppContext } from '../../../context';

export default function AboutPage(): JSX.Element {
  const { appContext } = useContext(AppContext);
  const { dictionary } = appContext;

  const path = [
    {
      name: 'Despre noi',
      link: '/about',
    },
  ];

  return (
    <>
      <Breadcrumbs path={path} />
      <div className="guarantees-container">
        <h2 className="terms-page-name">{dictionary.aboutUs}</h2>
        <h4 className="terms-heading">{dictionary.aboutTitle1}</h4>
        <p dangerouslySetInnerHTML={createMarkup(dictionary.aboutText1)}></p>
        <h4 className="terms-heading">{dictionary.aboutTitle2}</h4>
        <p className="terms-paragraph-18">{dictionary.aboutText2}</p>
        <br />
        <p dangerouslySetInnerHTML={createMarkup(dictionary.aboutText3)} />
      </div>
    </>
  );
}
