import { useContext } from 'react';
import { AppContext } from '../../../context';
import Breadcrumbs from '../../common/breadcrumbs/Breadcrumbs';
import { createMarkup } from '../../../utils/index';

export default function GuaranteesPage(): JSX.Element {
  const { appContext } = useContext(AppContext);
  const { dictionary } = appContext;

  const path = [
    {
      name: dictionary.guarantees,
      link: '/guarantees',
    },
  ];

  return (
    <>
      <Breadcrumbs path={path} />
      <div className="guarantees-container">
        <h2 className="terms-page-name">{dictionary.guaranteesTitle1}</h2>
        <p>{dictionary.guaranteesText1}</p>
        <h4 className="terms-heading">{dictionary.guaranteesTitle2}</h4>
        <p>
          {dictionary.guaranteesText2}
          <br />
          <br />
          {dictionary.guaranteesText3}
          <br />
          <br />
          {dictionary.guaranteesText4}
        </p>
        <div
          className="terms-list"
          dangerouslySetInnerHTML={createMarkup(dictionary.guaranteesListItem1)}
        ></div>
        <h4 className="terms-heading">{dictionary.guaranteesTitle3}</h4>
        <ul className="terms-list">
          <li className="terms-list-item">{dictionary.guaranteeList1}</li>
          <li className="terms-list-item">{dictionary.guaranteeList2}</li>
          <li className="terms-list-item">{dictionary.guaranteeList3}</li>
          <li className="terms-list-item">{dictionary.guaranteeList4}</li>
          <li className="terms-list-item">{dictionary.guaranteeList5}</li>
          <li className="terms-list-item">{dictionary.guaranteeList6}</li>
          <li className="terms-list-item">{dictionary.guaranteeList7}</li>
          <li className="terms-list-item">{dictionary.guaranteeList8}</li>
        </ul>
        <h4 className="terms-heading">{dictionary.guaranteesTitle2}</h4>
        <p>
          {dictionary.guaranteesText5}
          <br />
          <br />
          {dictionary.guaranteesText6}
        </p>
        <ul className="terms-list">
          <li className="terms-list-item">{dictionary.guaranteeList9}</li>
        </ul>
        <p>{dictionary.guaranteesText7}</p>
        <ul className="terms-list">
          <li className="terms-list-item">{dictionary.guaranteeList10}</li>
          <li className="terms-list-item">{dictionary.guaranteeList11}</li>
          <li className="terms-list-item">{dictionary.guaranteeList12}</li>
        </ul>
        <div
          dangerouslySetInnerHTML={createMarkup(dictionary.guaranteesText8)}
        />
      </div>
    </>
  );
}
