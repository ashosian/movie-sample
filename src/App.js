import React from 'react'
import { Routes, Route } from 'react-router'
import RootLayout from './components/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Category from './pages/Category'
import Detail from './pages/Detail'
import Search from './pages/Search'
import PageMovie from './pages/PageMovie'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='movie/:category' element={<Category />} />
        <Route path='movie/detail/:id' element={<Detail />} />
        <Route path='searchmovie/:search' element={<Search />} />
        <Route path="/searchpage/:category/:page" element={<PageMovie />} />
      </Route>
    </Routes>
  )
}

export default App
