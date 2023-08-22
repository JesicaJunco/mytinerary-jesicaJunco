import React from 'react'
import { useParams } from 'react-router-dom'
import DetailsCard from '../components/DetailsCard'


export default function Details() {
    let{id} = useParams()

  return (
    <>
        <DetailsCard/>
    </>
  )
}