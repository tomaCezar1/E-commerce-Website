import React from 'react';
import { useRouter } from 'next/router';

export default function LangSwitch({ mobile }): JSX.Element {
  const router = useRouter();

  const handleClick = async (lang: string) => {
    // router.push('/', '/', { locale: lang });
    window.location.assign('/' + lang);
  };

  return (
    <div
      className={`lang-wrapper ${mobile && 'mobile'} ${
        router.locale === 'ro' ? 'ro-active' : 'ru-active'
      }`}
    >
      <div
        className={router.locale === 'ro' ? 'lang active' : 'lang'}
        onClick={() => handleClick('ro')}
      >
        Ro
      </div>
      <div
        className={router.locale === 'ru' ? 'lang active' : 'lang'}
        onClick={() => handleClick('ru')}
      >
        Ру
      </div>
    </div>
  );
}
