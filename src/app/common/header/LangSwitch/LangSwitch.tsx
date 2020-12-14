import React from 'react'
import { useRouter } from 'next/router'

export default function LangSwitch(): JSX.Element {
  const router = useRouter()

  const handleClick = (lang: string) => {
    router.push('/', '/', {locale: lang})
  }

  return (
    <div className="lang-wrapper">
      <div className={router.locale === 'ro' ? "lang active" : 'lang'} onClick={() => handleClick('ro')}>
        Ro
      </div>
      <div className={router.locale === 'ru' ? "lang active" : 'lang'}  onClick={() => handleClick('ru')}>
        Ru
      </div>
    </div>
  )
}