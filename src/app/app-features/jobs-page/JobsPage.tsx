import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import Breadcrumbs from '../../common/breadcrumbs/Breadcrumbs';
import { createMarkup } from '../../../utils';
import { useState } from 'react';

export default function JobsPage({ jobsList }) {
  const [openItemIndex, setOpenItemIndex] = useState([]);

  const path = [
    {
      name: 'Posturi vacante',
      link: '/jobs',
    },
  ];

  const handleChange = (activeIndex) => {
    setOpenItemIndex(activeIndex);
  };

  return (
    <div className="jobs-page-container">
      <Breadcrumbs path={path} />
      <div className="jobs-list-wrapper">
        <h1 className="product-list-header">Posturi vacante</h1>
        <Accordion
          index={openItemIndex}
          onChange={handleChange}
          defaultIndex={null}
          allowMultiple
          allowToggle
        >
          {jobsList.map((el, index) => {
            return (
              <AccordionItem key={el.id} className="jobs-list-item">
                <AccordionButton className="jobs-list-button">
                  <span
                    className={
                      openItemIndex.indexOf(index) === -1
                        ? 'jobs-list-title'
                        : 'jobs-list-title-active'
                    }
                  >
                    {el.title}
                  </span>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel className="jobs-item-content">
                  <div dangerouslySetInnerHTML={createMarkup(el.content)} />
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
