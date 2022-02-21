import React from 'react'
import ReactDOM from 'react-dom'
import { Play } from './pages/Play'
import { AiOutlineHome } from 'react-icons/ai'
import { GiTreeSwing } from 'react-icons/gi'
import { Home } from './pages/Home'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { FaHamburger } from 'react-icons/fa'
import { UseContext, UseEffect, UseMemo, UseReducer, UseRef, UseState } from './demos'

const body = document.querySelector('body') as HTMLElement
const root = document.querySelector('#root')

function Index() {
  const [isHidden, setIsHidden] = React.useState(true)

  function handleDOMClick(e: MouseEvent) {
    e.stopPropagation()
    const target = e.target as HTMLElement

    if (target.tagName !== 'ASIDE') {
      setIsHidden(true)
    }
  }

  function handleTyping(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      setIsHidden(current => !current)
    }
  }

  React.useEffect(() => {
    body.addEventListener('click', e => handleDOMClick(e))
    body.addEventListener('keydown', e => handleTyping(e))

    return () => {
      body.removeEventListener('click', handleDOMClick)
      body.removeEventListener('keydown', handleTyping)
    }
  }, [])

  return (
    <>
      <BrowserRouter>
        <div id="app" className="app">
          <nav>
            <div>
              <Link to={'/'}>
                <AiOutlineHome />
              </Link>
              <Link to={'/playground'}>
                <GiTreeSwing />
              </Link>
            </div>
            <div
              id="menu"
              style={{ position: 'relative' }}
              onClick={e => {
                e.stopPropagation()
                setIsHidden(current => !current)
              }}
            >
              <FaHamburger className="burger" />
            </div>
          </nav>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/playground" element={<Play />} />
              {/* HOOKS */}
              <Route path="/useState" element={<UseState />} />
              <Route path="/useEffect" element={<UseEffect />} />
              <Route path="/useContext" element={<UseContext />} />
              <Route path="/useReducer" element={<UseReducer />} />
              <Route path="/useMemo" element={<UseMemo />} />
              <Route path="/useRef" element={<UseRef />} />
            </Routes>
          </main>
          <aside id="sideNav" style={{ display: `${isHidden ? 'none' : 'flex'}` }}>
            <Link to={'/useState'}>useState</Link>
            <Link to={'/useEffect'}>useEffect</Link>
            <Link to={'/useContext'}>useContext</Link>
            <Link to={'/useReducer'}>useReducer</Link>
            <Link to={'/useMemo'}>useMemo</Link>
            <Link to={'/useRef'}>useRef</Link>
          </aside>
        </div>
      </BrowserRouter>
    </>
  )
}

ReactDOM.render(<Index />, root)
// ReactDOM.render(<App />, root)
