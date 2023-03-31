import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import { Map } from '@/components/Map'
import { Logo } from '@/components/Logo'
import { MobileNavigation } from '@/components/MobileNavigation'
import { Navigation } from '@/components/Navigation'
import { Prose } from '@/components/Prose'
import { Search } from '@/components/Search'
import { ThemeSelector } from '@/components/ThemeSelector'
import Szechenyi from './Szechenyi'

function Header({ navigation }) {
  let [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 py-2 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8',
        {
          'dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75':
            isScrolled,
          'dark:bg-transparent': !isScrolled,
        }
      )}
    >
      <div className="mr-6 lg:hidden">
        <MobileNavigation navigation={navigation} />
      </div>
      <div className="relative flex flex-grow basis-0 items-center">
        <Link href="/">
          <a className="block w-10 overflow-hidden lg:w-auto">
            <span className="sr-only">Kezdolap</span>
            <Logo />
          </a>
        </Link>
      </div>
      <div className="-my-5 mr-6 sm:mr-8 md:mr-0"></div>
      <div className="relative flex basis-0 justify-end space-x-6 sm:space-x-8 md:flex-grow">
        <ThemeSelector className="relative z-10 mr-12" />
      </div>
    </header>
  )
}

export function Layout({ children, title, navigation, tableOfContents }) {
  let router = useRouter()
  let isHomePage = router.pathname === '/'
  let allLinks = navigation.flatMap((section) => section.links)
  let linkIndex = allLinks.findIndex((link) => link.href === router.pathname)
  let section = navigation.find((section) =>
    section.links.find((link) => link.href === router.pathname)
  )

  const var1 = groupByFirstLetter(tableOfContents)
  console.log(var1)
  let currentSection = useTableOfContents(var1)

  function isActive(section) {
    if (section.id === currentSection) {
      return true
    }
    if (!section.children) {
      return false
    }
    return section.children.findIndex(isActive) > -1
  }

  return (
    <>
      <Header navigation={navigation} />

      <Szechenyi />

      <div className="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12">
        <div className="hidden lg:relative lg:block lg:flex-none">
          <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
          <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-16 pl-0.5">
            <div className="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
            <div className="absolute bottom-0 right-0 top-28 hidden w-px bg-slate-800 dark:block" />
            <Navigation
              navigation={navigation}
              className="w-64 pr-8 xl:w-72 xl:pr-16"
            />
          </div>
        </div>
        <div className="min-w-0 max-w-2xl flex-auto px-4 py-4 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
          <article className="prose-a:text-bblue hover:prose-a:underline">
            {(title || section) && (
              <header className="mb-9 space-y-1">
                {section && (
                  <p className="font-display text-sm font-medium text-bblue">
                    {section.title}
                  </p>
                )}
                {title && (
                  <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
                    {title}
                  </h1>
                )}
              </header>
            )}
            <ul className="mb-12 flex grow flex-wrap gap-x-4 gap-y-2">
              {var1.map((section) => (
                <li key={section.letter}>
                  <h3>
                    <Link href={`#${section.section.id}`}>
                      <a
                        className={clsx(
                          isActive(section)
                            ? 'text-xl font-bold text-sky-500'
                            : 'text-xl font-bold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
                        )}
                      >
                        {section.letter}
                      </a>
                    </Link>
                  </h3>
                </li>
              ))}
            </ul>

            <Prose>{children}</Prose>

            {isHomePage && <Map />}
          </article>
        </div>
        <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6"></div>
      </div>
    </>
  )
}

function groupByFirstLetter(tableOfContents) {
  let result = []
  let currentLetter = null
  for (let section of tableOfContents) {
    let letter = section.title[0]
    if (letter !== currentLetter) {
      currentLetter = letter
      result.push({ letter, section })
    }
  }
  return result
}

function useTableOfContents(tableOfContents) {
  let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.id)

  let getHeadings = useCallback(() => {
    function* traverse(node) {
      if (Array.isArray(node)) {
        for (let child of node) {
          yield* traverse(child)
        }
      } else {
        let el = document.getElementById(node.id)
        if (!el) return

        let style = window.getComputedStyle(el)
        let scrollMt = parseFloat(style.scrollMarginTop)

        let top = window.scrollY + el.getBoundingClientRect().top - scrollMt
        yield { id: node.id, top }

        for (let child of node.children ?? []) {
          yield* traverse(child)
        }
      }
    }

    return Array.from(traverse(tableOfContents))
  }, [tableOfContents])

  useEffect(() => {
    let headings = getHeadings()
    if (tableOfContents.length === 0 || headings.length === 0) return
    function onScroll() {
      let sortedHeadings = headings.concat([]).sort((a, b) => a.top - b.top)

      let top = window.pageYOffset
      let current = sortedHeadings[0].id
      for (let i = 0; i < sortedHeadings.length; i++) {
        if (top >= sortedHeadings[i].top) {
          current = sortedHeadings[i].id
        }
      }
      setCurrentSection(current)
    }
    window.addEventListener('scroll', onScroll, {
      capture: true,
      passive: true,
    })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll, {
        capture: true,
        passive: true,
      })
    }
  }, [getHeadings, tableOfContents])

  return currentSection
}
