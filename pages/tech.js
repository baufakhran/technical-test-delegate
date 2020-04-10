import React from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import useFetcher from '../hooks/useFetcher'
import { Container, Jumbotron, Spinner } from 'react-bootstrap'
import News from '../components/News'

export default function home() {
  const [iderror, idLoading, idTech] = useFetcher(
    `https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=1e9011ff060349a8b5a3c0b9ca75f853`
  )
  const [usError, usLoading, usTech] = useFetcher(
    `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=1e9011ff060349a8b5a3c0b9ca75f853`
  )
  const [sgError, sgLoading, sgTech] = useFetcher(
    `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=1e9011ff060349a8b5a3c0b9ca75f853`
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
      </Head>
      <Navbar />
      <Jumbotron fluid className="tech-header">
        <Container>
          <h2 style={{ color: 'white' }} className="mt-3">
            Technology
          </h2>
        </Container>
      </Jumbotron>
      <Container>
        {!usTech.articles && <Spinner animation="grow" />}
        {usTech.articles && (
          <News
            className="mb-4"
            country={'United States'}
            data={usTech.articles}
          ></News>
        )}
        <hr></hr>
        {!idTech.articles && <Spinner animation="grow" />}
        {idTech.articles && (
          <News
            className="mb-4"
            country={'Indonesia'}
            data={idTech.articles}
          ></News>
        )}
        <hr></hr>
        {!sgTech.articles && <Spinner animation="grow" />}
        {sgTech.articles && (
          <News
            className="mb-4"
            country={'Singapore'}
            data={sgTech.articles}
          ></News>
        )}
      </Container>
    </>
  )
}
