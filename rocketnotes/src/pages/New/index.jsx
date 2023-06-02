import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Textarea } from "../../components/textArea";
import { NoteItem } from "../../components/noteItem";
import { Section } from "../../components/section";

import { Container, Form } from "./styles";

export function New () {
  return (
    <Container>
      <Header/>
    <main>
      <Form>
        <header>
          <h1>Criar nota</h1>
          <a href="/">Voltar</a>
        </header>

        <Input placeholder="Titulo"/>
        <Textarea placeholder="Observações"/>

        <Section title= "Links úteis">
          <NoteItem value="https://rocketseat.com.br" />
          <NoteItem  $isNew placeholder="Novo link"/>
        </Section>


      </Form>
    </main>

    </Container>
  );
}