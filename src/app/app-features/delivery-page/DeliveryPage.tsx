import Breadcrumbs from '../../common/breadcrumbs/Breadcrumbs';
import { useContext } from 'react';
import { AppContext } from '../../../context';
import { createMarkup } from '../../../utils/index';

export default function DeliveryPage() {
  const { appContext } = useContext(AppContext);
  const { dictionary } = appContext;

  const path = [
    {
      name: 'Livrare',
      link: '/delivery',
    },
  ];

  return (
    <>
      <Breadcrumbs path={path} />
      <div className="guarantees-container">
        <h2 className="terms-page-name">{dictionary.livrare}</h2>
        <h4 className="terms-heading">{dictionary.pickUp}</h4>
        <p>{dictionary.livrareText1}</p>
        <h4 className="terms-heading">{dictionary.livrareChisinau}</h4>
        <p dangerouslySetInnerHTML={createMarkup(dictionary.livrareText2)} />
        <h4 className="terms-heading">{dictionary.livrareMd}</h4>
        <p dangerouslySetInnerHTML={createMarkup(dictionary.livrareText3)} />
      </div>
    </>
  );
}
