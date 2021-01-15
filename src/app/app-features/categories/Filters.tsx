import ComplexSelect from 'react-select';
import React, { useEffect, useState, useContext } from 'react';
import {
  DropDownOption,
  UiFilter,
  UiFiltersQuery,
} from './ProductCategoriesQueries';
import { apolloClient } from '../../lib/apolloClient';
import {
  NumberInput,
  NumberInputField,
  SkeletonText,
  useMediaQuery,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { AppContext } from '../../../context';

export interface FiltersProps {
  categoryId: string;
  handleClose: () => void;
}

export default function Filters({
  categoryId,
  handleClose,
}: FiltersProps): JSX.Element {
  const [uiFilters, setUiFilters] = useState<UiFilter[]>([]);
  const [loadingFilters, setLoadingFilters] = useState(false);
  const [formValue, setFormValue] = useState({});
  const [isSmallerThan1250] = useMediaQuery('(max-width: 1250px');
  const router = useRouter();
  const context = useContext(AppContext);
  const { dictionary } = context.appContext;

  useEffect(() => {
    setLoadingFilters(true);
  }, []);

  useEffect(() => {
    (async () => {
      if (categoryId) {
        const res = await apolloClient.query({
          query: UiFiltersQuery,
          variables: { categoryId },
          context: {
            headers: {
              lang: context.locale,
            },
          },
        });
        setLoadingFilters(false);
        setUiFilters((res.data && res.data.uiFilters) || []);
        if (router.query.filter) {
          try {
            const activeFilters = JSON.parse(
              decodeURI(router.query.filter as string)
            );
            setFormValue(activeFilters);
          } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e); // Useful Console Log
          }
        }
      }
    })();
  }, [categoryId]);

  const colourStyles = {
    control: (styles) => ({ ...styles, borderRadius: 8 }),
  };

  const onFormApplyClick = () => {
    const currentQuery = router.query;
    currentQuery['filter'] = encodeURI(JSON.stringify(formValue));
    currentQuery['page'] = '1';
    router.push({
      pathname: router.pathname,
      query: currentQuery,
    });
    handleClose();
  };

  const onClearClick = () => {
    const currentQuery = router.query;
    delete currentQuery['filter'];
    currentQuery['page'] = '1';
    setFormValue({});
    router.push({
      pathname: router.pathname,
      query: currentQuery,
    });
    handleClose();
  };

  const onDropDownChange = (propertyName: string, value: DropDownOption[]) => {
    setFormValue((formState) => ({
      ...formState,
      [propertyName]: value || [], //(value && value.map((v) => v.value)) || [],
    }));
  };

  const onNumberRangeChange = (
    propertyName: string,
    changeKey: 'minValue' | 'maxValue',
    value: number
  ) => {
    setFormValue((formState) => ({
      ...formState,
      [propertyName]: {
        ...(formState[propertyName] || {}),
        [changeKey]: value,
      },
    }));
  };

  const buildDropDownFilter = (uiFilter: UiFilter, key: number) => {
    return (
      <div key={key} className="filter-dd-wrapper">
        <div className="filter-dd-name">{uiFilter.name}</div>
        <ComplexSelect
          options={uiFilter.values}
          value={formValue[uiFilter.property] || []}
          onChange={(value) => onDropDownChange(uiFilter.property, value)}
          isMulti
          placeholder="Selectează opțiuni"
          noOptionsMessage={() => 'Nu sunt opțiuni'}
          styles={colourStyles}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: '#C3CFE4',
              primary75: '#4D70AE',
              primary50: '#889FC9',
              primary: '#124193',
              danger: '#4D70AE',
              dangerLight: '#C3CFE4',
            },
          })}
        />
      </div>
    );
  };

  const buildInputRangeFilter = (uiFilter: UiFilter, key: number) => {
    return (
      <div key={key} className="filter-dd-wrapper">
        <div className="filter-dd-name">{uiFilter.name}</div>
        <div className="flex-row">
          <NumberInput
            value={
              (formValue[uiFilter.property] &&
                formValue[uiFilter.property].minValue) ||
              ''
            }
            style={{ marginRight: 10 }}
            className="filter-input"
          >
            <NumberInputField
              value={formValue[uiFilter.property]?.minValue}
              onChange={(e) =>
                onNumberRangeChange(
                  uiFilter.property,
                  'minValue',
                  isNaN(parseInt(e.target.value)) ? null : +e.target.value
                )
              }
              placeholder="de la"
            />
          </NumberInput>
          <NumberInput
            value={
              (formValue[uiFilter.property] &&
                formValue[uiFilter.property].maxValue) ||
              ''
            }
            className="filter-input"
          >
            <NumberInputField
              onChange={(e) =>
                onNumberRangeChange(
                  uiFilter.property,
                  'maxValue',
                  isNaN(parseInt(e.target.value)) ? null : +e.target.value
                )
              }
              placeholder="până la"
            />
          </NumberInput>
        </div>
      </div>
    );
  };

  return (
    <div
      className={
        isSmallerThan1250
          ? 'filter-panel-wrapper-mobile'
          : 'filter-panel-wrapper'
      }
    >
      <div
        className="flex-row flex-center bold"
        style={{ height: 40, marginBottom: 10 }}
      >
        {dictionary.filterBy}
      </div>
      {!loadingFilters && (
        <>
          <form>
            {uiFilters.map((filter: UiFilter, key: number) => {
              if (filter.values) {
                return buildDropDownFilter(filter, key);
              } else {
                return buildInputRangeFilter(filter, key);
              }
            })}
          </form>
          <div className="flex-row justify-between" style={{ marginTop: 30 }}>
            <button onClick={onClearClick} className="btn rounded default">
              {dictionary.clear}
            </button>
            <button
              onClick={onFormApplyClick}
              className="btn rounded"
              style={{ width: '60%' }}
            >
              {dictionary.apply}
            </button>
          </div>
        </>
      )}
      {loadingFilters && (
        <SkeletonText noOfLines={4} skeletonHeight="45px" spacing="20px" />
      )}
    </div>
  );
}
