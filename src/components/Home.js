import React from 'react'	
import { Button } from 'react-bootstrap';

export default function Home(props) {

    return(
      <>
  <Button href="/blog" variant="primary" size="lg" block>
    Check out my blogs!
  </Button>
  </>
    )
  }