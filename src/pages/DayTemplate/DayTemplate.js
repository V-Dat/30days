import Container from "../../component/ReUse/Container/Container"
import Content from "../../component/ReUse/Content/Content";
import React from 'react'
function DayTemplate({children, background}) {
  return (
    <Content className={`${background} background-color`}>
      <Container>
        {children}         
      </Container>
    </Content>
  )
}

export default DayTemplate