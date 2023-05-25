import {Container, Links} from "./styles"

import { Header } from "../../components/header"
import { Button } from "../../components/button"
import { Section } from "../../components/section"
import { Tag } from "../../components/tag"

export function Details(){


  return(
    <Container>
      <Header />
      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://www.rocketseat.com.br</a></li>
          <li><a href="#">https://www.rocketseat.com.br</a></li>
        </Links>
      </Section>


      <Section title="Marcadores">
        <Tag title="express"></Tag>
        <Tag title="express"></Tag>

      </Section>
   
   
    <Button title = "Voltar"/>
    </Container>
  )
}