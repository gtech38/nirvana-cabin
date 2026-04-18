import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import PhotosPage from './pages/PhotosPage'
import ReviewsPage from './pages/ReviewsPage'
import LocationPage from './pages/LocationPage'
import BookPage from './pages/BookPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/book" element={<BookPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
