import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import {

  Button,
  Input,
} from "@material-tailwind/react";
import { useFormik } from 'formik';

const Header = () => {
  const nav = useNavigate()

  const formik = useFormik({
    initialValues: {
      anything: ''
    },
    onSubmit: (val, { resetForm }) => {
      nav(`/searchmovie/${val.anything}`)
      resetForm();
    }

  })
  return (
    <div className='h-[8vh] bg-slate-600 flex justify-between items-center px-4 bg-black text-white'>







      <div className="box1 space-x-6">

        <NavLink to='/' replace>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='contact'>Contact</NavLink>

      </div>

      <form onSubmit={formik.handleSubmit}>

        <div className="box2 space-x-7 flex items-center">

          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              name='anything'
              value={formik.values.anything}
              onChange={formik.handleChange}
              label="Type here..."
              className="pr-20"
              containerProps={{
                className: "min-w-[500px]",
              }}
            />
            <Button type='submit' size="sm" className="!absolute right-1 top-1 rounded">
              Search
            </Button>
          </div> {/* search*/}

          <div className="header space-x-6">

            <NavLink to='/movie/popular'>Popular</NavLink>
            <NavLink to='/movie/top_rated'>TopRated</NavLink>
            <NavLink to='/movie/upcoming'>Up comming</NavLink>
          </div>{/*header */}


        </div>


      </form>




    </div>
  )
}

export default Header
