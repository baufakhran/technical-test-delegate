import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import useFetcher from '../hooks/useFetcher'
import CardNews from '../components/CardNews'
import { Container, Spinner, Jumbotron } from 'react-bootstrap'
import api from '../api'
import News from '../components/News'

export default function home() {
  const [classPop, setClassPop] = useState('selected-btn')
  const [classAll, setClassAll] = useState('my-btn')
  const [error, isLoading, idBusiness] = useFetcher(
    `https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=1e9011ff060349a8b5a3c0b9ca75f853`
  )
  const [usError, usLoading, usBusiness] = useFetcher(
    `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1e9011ff060349a8b5a3c0b9ca75f853`
  )
  const [sgError, sgLoading, sgBusiness] = useFetcher(
    `https://newsapi.org/v2/top-headlines?country=sg&category=business&apiKey=1e9011ff060349a8b5a3c0b9ca75f853`
  )
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link rel="shorcut icon" href="../icon.png" type="png"></link>
      </Head>
      <Navbar />
      <Jumbotron fluid className="business-header">
        <Container>
          <h2>Business</h2>
        </Container>
      </Jumbotron>
      <Container>
        {!usBusiness.articles && <Spinner animation="grow" />}
        {usBusiness.articles && (
          <News
            className="mb-4"
            country={'United States'}
            data={usBusiness.articles}
          ></News>
        )}
        <hr></hr>
        {!idBusiness.articles && <Spinner animation="grow" />}
        {idBusiness.articles && (
          <News
            className="mb-4"
            country={'United States'}
            data={idBusiness.articles}
          ></News>
        )}

        <hr></hr>
        {!sgBusiness.articles && <Spinner animation="grow" />}
        {sgBusiness.articles && (
          <News
            className="mb-4"
            country={'Singapore'}
            data={sgBusiness.articles}
          ></News>
        )}
        <hr></hr>
      </Container>
    </>
  )
}
