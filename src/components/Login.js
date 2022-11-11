import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" />
        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);


  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

`

const CTA = styled.div`

`

const CTALogoOne = styled.img`

`