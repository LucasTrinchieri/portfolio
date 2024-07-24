import { lazy } from 'react'

const HomePage = lazy(()=> import("../pages/home"))
const BookDetailsPage = lazy(()=> import("../pages/bookDetails"))

export const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/book-details',
    component: BookDetailsPage
  }
]