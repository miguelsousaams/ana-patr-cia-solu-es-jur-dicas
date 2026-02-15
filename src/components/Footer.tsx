import { Scale, Phone, Mail, MapPin } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Footer = () => (
  <footer className="py-12 border-t border-border/40">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-primary font-semibold">
            <Scale className="h-5 w-5" />
            <span>Ana Patrícia de Oliveira</span>
          </div>
          <p className="text-sm text-muted-foreground">Solicitadora</p>
        </div>

        {/* Contact placeholders */}
        <div className="space-y-3">
          <h4 className="font-semibold text-primary text-sm">Contacto</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+351 963 149 900</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>solicitadora8611@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>R. Tomé de Sousa 2, 4750-217 Barcelos</span>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="space-y-3">
          <h4 className="font-semibold text-primary text-sm">Aviso Legal</h4>
          <p className="text-xs text-muted-foreground">
            Informação geral — não dispensa consulta profissional.
          </p>
          <div className="mt-2 flex space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <button className="underline text-muted-foreground/90 hover:text-primary text-xs">
                  Política de privacidade
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Política de Privacidade</DialogTitle>
                </DialogHeader>
                <div className="max-h-[70vh] overflow-auto pr-2">
                  <DialogDescription>
                    <p>
                      A presente Pol&iacute;tica de Privacidade descreve as
                      finalidades a concretizar com os seus dados, o seu
                      tratamento, a eventual partilha,
                      conserva&ccedil;&atilde;o, a defesa dos seus direitos
                      quanto aos dados por mim tratados, definindo os meios
                      adequados de contacto. Os seus dados ser&atilde;o tratados
                      por Ana Patr&iacute;cia de Oliveira, Solicitadora, com a
                      C&eacute;dula Profissional n&ordm; 8611, com
                      domic&iacute;lio profissional na Rua Tom&eacute; de Sousa,
                      Edif&iacute;cio Diamante, Loja 2, 4750-217 Arcozelo,
                      Barcelos. Ana Patr&iacute;cia de Oliveira, Solicitadora
                      &eacute; a &nbsp;respons&aacute;vel pelo tratamento de
                      dados pessoais de acordo com o Regulamento Geral sobre a
                      Prote&ccedil;&atilde;o de Dados (RGPD).
                    </p>
                    <br />
                    <p>
                      <strong>
                        Porqu&ecirc; e para qu&ecirc; trato a sua
                        informa&ccedil;&atilde;o?
                      </strong>
                    </p>
                    <p>
                      Ana Patr&iacute;cia de Oliveira, Solicitadora, apenas
                      trata os seus dados pessoais para efeitos de cumprimento
                      de um contrato, na prossecu&ccedil;&atilde;o de um
                      interesse leg&iacute;timo, como desenvolvimento e
                      manuten&ccedil;&atilde;o do s&iacute;tio online,
                      presta&ccedil;&atilde;o de assist&ecirc;ncia
                      t&eacute;cnica, preven&ccedil;&atilde;o e
                      dete&ccedil;&atilde;o de fraude, assegurar a
                      seguran&ccedil;a da rede e de informa&ccedil;&atilde;o,
                      presta&ccedil;&atilde;o de servi&ccedil;os ou
                      informa&ccedil;&atilde;o, com o seu consentimento para
                      tratar os seus dados pessoais para finalidades
                      espec&iacute;ficas, expl&iacute;citas e leg&iacute;timas,
                      e tudo o que for necess&aacute;rio para cumprir com
                      obriga&ccedil;&otilde;es legais .
                    </p>
                    <br />

                    <p>
                      <strong>
                        Quais as principais finalidades de tratamento da sua
                        informa&ccedil;&atilde;o?
                      </strong>
                    </p>
                    <p>
                      Aquando do preenchimento dos formul&aacute;rios
                      disponibilizados no s&iacute;tio, os seus dados pessoais
                      (como o nome, e-mail, n&uacute;mero de telefone ou morada)
                      s&atilde;o recolhidos por Ana Patr&iacute;cia de Oliveira,
                      Solicitadora, e tratados de forma a responder &agrave;s
                      suas quest&otilde;es, pedidos ou a prestar-lhe os
                      servi&ccedil;os dispon&iacute;veis. Ao disponibilizar os
                      seus contactos, Ana Patr&iacute;cia de Oliveira,
                      Solicitadora, poder&aacute; contact&aacute;-lo(a) para
                      efeitos de esclarecimento sobre os servi&ccedil;os a
                      prestar ou mesmo para a&ccedil;&otilde;es relacionadas com
                      marketing e comunica&ccedil;&atilde;o dos seus
                      servi&ccedil;os, desde que tenha consentido o tratamento
                      dos seus dados pessoais para este efeito. Caso consinta,
                      receber&aacute; comunica&ccedil;&otilde;es atrav&eacute;s
                      de e-mail. Ainda assim, &eacute; um seu direito, enquanto
                      titular dos dados fornecidos, opor-se a este tratamento de
                      dados. O seu consentimento &eacute; essencial para que Ana
                      Patr&iacute;cia de Oliveira, Solicitadora trate os seus
                      dados pessoais para determinados efeitos, se optar por
                      n&atilde;o dar o seu consentimento, a sua visita e
                      utiliza&ccedil;&atilde;o do nosso s&iacute;tio online
                      n&atilde;o ser&aacute; afetada, nem condicionada.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <strong>
                        Durante quanto tempo conservamos a sua
                        informa&ccedil;&atilde;o?
                      </strong>
                    </p>
                    <p>
                      Esta pol&iacute;tica assenta na conserva&ccedil;&atilde;o
                      de dados apenas durante o per&iacute;odo necess&aacute;rio
                      para a observ&acirc;ncia dos prop&oacute;sitos para os
                      quais estes foram recolhidos. Ainda assim, em determinados
                      em certos caso, pode ser necess&aacute;rio conservar os
                      seus dados durante per&iacute;odos mais longos,
                      nomeadamente quando a Lei assim o impuser.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <strong>
                        Quais os direitos que det&eacute;m enquanto titular dos
                        dados?
                      </strong>
                    </p>
                    <p>A qualquer momento, pode:</p>
                    <p>
                      Solicitar o acesso &agrave; informa&ccedil;&atilde;o que
                      mantemos sobre si, e como titular dos dados pessoais, tem
                      o direito a obter a confirma&ccedil;&atilde;o de que os
                      dados que lhe digam respeito s&atilde;o ou n&atilde;o
                      objeto de tratamento e, se for o caso, de aceder aos seus
                      dados pessoais e aceder &agrave;s
                      informa&ccedil;&otilde;es previstas na lei.
                    </p>
                    <p>
                      Pedir a retifica&ccedil;&atilde;o da
                      informa&ccedil;&atilde;o caso esteja inexata ou
                      incompleta. Como titular dos dados pessoais, tem o direito
                      a que Ana Patr&iacute;cia de Oliveira, Solicitadora, sem
                      demora injustificada, retifique os dados inexatos ou
                      incompletos que lhe digam respeito.
                    </p>
                    <p>
                      Solicitar que sejam eliminados os seus dados pessoais. A/O
                      titular dos dados pessoais, tem o direito de solicitar a
                      Ana Patr&iacute;cia de Oliveira, Solicitadora, que sejam
                      eliminados os seus dados, sem demora injustificada, sendo
                      que&nbsp; profissional t&ecirc;m a obriga&ccedil;&atilde;o
                      de apagar os dados pessoais, sem demora injustificada,
                      quando se aplique, designadamente, um dos seguintes
                      motivos: <br /> 1. Os dados pessoais deixaram de ser
                      necess&aacute;rios para a finalidade que motivou a sua
                      recolha ou tratamento;
                      <br /> 2. Retirou o seu consentimento para o tratamento de
                      dados, e n&atilde;o existe outro fundamento para o
                      referido tratamento;
                      <br /> 3. Op&otilde;e-se ao tratamento e n&atilde;o
                      existem interesses leg&iacute;timos prevalecentes que
                      justifiquem o tratamento.
                    </p>
                    <p>
                      Solicitar a limita&ccedil;&atilde;o do tratamento dos seus
                      dados pessoais. Enquanto titular dos dados tem o direito
                      de pedir a Ana Patr&iacute;cia de Oliveira, Solicitadora,
                      a limita&ccedil;&atilde;o do tratamento dos seus dados se
                      se aplicar, designadamente, uma das seguintes
                      situa&ccedil;&otilde;es:
                      <br /> 1. Contestar a exatid&atilde;o dos dados pessoais,
                      durante um per&iacute;odo que permita verificar a sua
                      exatid&atilde;o;
                      <br /> 2. O tratamento de dados for l&iacute;cito e o
                      titular dos dados se opuser &agrave;
                      elimina&ccedil;&atilde;o dos dados pessoais e solicitar,
                      em contrapartida, a limita&ccedil;&atilde;o da sua
                      utiliza&ccedil;&atilde;o;
                      <br /> 3. Ana Patr&iacute;cia de Oliveira, Solicitadora
                      j&aacute; n&atilde;o precisar dos dados pessoais para fins
                      de tratamento, mas esses dados forem requeridos pelo
                      titular para efeitos de declara&ccedil;&atilde;o,
                      exerc&iacute;cio ou defesa de um direito;
                      <br /> 4. Se tiver oposto ao tratamento, at&eacute; se
                      verificar que os motivos leg&iacute;timos do
                      respons&aacute;vel pelo tratamento prevalecem sobre os do
                      titular dos dados.
                    </p>
                    <p>
                      Opor-se ao tratamento dos seus dados pessoais:
                      <br /> 1. Nos casos em que o tratamento de dados for
                      efetuado para efeito dos interesses leg&iacute;timos
                      prosseguidos por Ana Patr&iacute;cia de Oliveira,
                      Solicitadora, ou
                      <br /> 2. O tratamento de dados for efetuado para efeitos
                      de marketing direto ou
                      <br /> 3. defini&ccedil;&atilde;o de perfis, pode ainda, a
                      qualquer altura, opor-se ao tratamento dos seus dados
                      pessoais.
                    </p>
                    <p>
                      Se o tratamento depender do seu consentimento, tem direito
                      a retir&aacute;-lo. Se o consentimento for legalmente
                      necess&aacute;rio para o tratamento de dados pessoais o
                      titular dos dados tem o direito de retirar consentimento
                      em qualquer altura, embora esse direito n&atilde;o
                      comprometa a licitude do tratamento efetuado com base no
                      consentimento previamente dado nem o tratamento posterior
                      dos mesmos dados, baseado noutra base legal, como &eacute;
                      o caso do cumprimento do contrato ou da
                      obriga&ccedil;&atilde;o legal a que Ana Patr&iacute;cia de
                      Oliveira, Solicitadora est&aacute; sujeita. Caso pretenda
                      exercer qualquer um dos seus direitos, deve contactar, por
                      escrito, atrav&eacute;s do e-mail
                      solicitadora8611@gmail.com ou pela via postal para a Rua
                      Tom&eacute; de Sousa, Edif&iacute;cio Diamante, Loja 2,
                      4750-217 Arcozelo, Barcelos. Os seus pedidos ser&atilde;o
                      tratados com especial cuidado de forma a assegurar a
                      efic&aacute;cia dos seus direitos. Poder&aacute; ser-lhe
                      pedido que fa&ccedil;a prova da sua identidade de modo a
                      assegurar que a partilha dos dados pessoais &eacute;
                      apenas feita com o seu titular. Deve ter presente que em
                      certos casos (por exemplo, devido a requisitos legais) o
                      seu pedido n&atilde;o poder&aacute; ser imediatamente
                      satisfeito. De qualquer modo, ser&aacute; informado das
                      medidas tomadas nesse sentido, no prazo de um m&ecirc;s a
                      partir do momento em que o pedido for efetuado. Tem ainda
                      o direito de apresentar uma reclama&ccedil;&atilde;o
                      &agrave; Comiss&atilde;o Nacional de
                      Prote&ccedil;&atilde;o de Dados.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <strong>Seguran&ccedil;a e Confidencialidade</strong>
                    </p>
                    <p>
                      &Eacute; a minha prioridade manter os seus dados seguros,
                      sendo que garanto o recurso a medidas de seguran&ccedil;a
                      apropriadas para assegurar que a prote&ccedil;&atilde;o
                      dos seus dados pessoais e impedir o acesso a pessoas
                      n&atilde;o autorizadas. No entanto, a transmiss&atilde;o
                      de informa&ccedil;&atilde;o atrav&eacute;s de Internet
                      n&atilde;o &eacute; completamente segura, e n&atilde;o
                      podendo garantir absolutamente a seguran&ccedil;a da
                      informa&ccedil;&atilde;o transmitida atrav&eacute;s deste
                      s&iacute;tio online. Respeito tamb&eacute;m a
                      confidencialidade da sua informa&ccedil;&atilde;o. Como
                      tal, n&atilde;o vendo, distribuo ou de qualquer outro modo
                      disponibilizo comercialmente a sua
                      informa&ccedil;&atilde;o a qualquer terceiro. Ana
                      Patr&iacute;cia de Oliveira, Solicitadora, assume o
                      compromisso de manter a sua informa&ccedil;&atilde;o
                      confidencial de acordo com esta Pol&iacute;tica de
                      Privacidade e legisla&ccedil;&atilde;o aplic&aacute;vel.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <strong>Se tiver alguma d&uacute;vida . . .</strong>
                    </p>
                    <p>
                      Se permanecer com alguma d&uacute;vida relativamente ao
                      tratamento dos seus dados pessoais, ou pretender exercer
                      algum dos seus direitos, por favor contacte:
                    </p>
                    <p>
                      E-mail:&nbsp;
                      <a href="mailto:solicitadora8611@gmail.com">
                        solicitadora8611@gmail.com
                      </a>{" "}
                      <br /> Morada:{" "}
                      <a href="https://share.google/LCd071P2MLIj8UYqL">
                        Rua Tom&eacute; de Sousa, Edif&iacute;cio Diamante, Loja
                        2, 4750-217 Arcozelo, Barcelos
                      </a>
                    </p>
                    <p>
                      Por favor tenha em considera&ccedil;&atilde;o que,
                      ocasionalmente, a Ana Patr&iacute;cia de Oliveira,
                      Solicitadora, atualizar&aacute; esta Pol&iacute;tica de
                      Privacidade.
                    </p>
                    <p>
                      Solicito que reveja periodicamente este documento para se
                      manter atualizado.
                    </p>
                    <p>&nbsp;</p>
                  </DialogDescription>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="mt-2 flex space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <button className="underline text-muted-foreground/90 hover:text-primary text-xs">
                  Termos e condições
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Termos e Condições</DialogTitle>
                </DialogHeader>
                <div className="max-h-[70vh] overflow-auto pr-2">
                  <DialogDescription>
                    <ol>
                      <li>
                        <strong>
                          {" "}
                          INFORMA&Ccedil;&Atilde;O SOBRE O WEBSITE
                        </strong>
                      </li>
                    </ol>
                    <p>
                      A presente informa&ccedil;&atilde;o e o presente website
                      s&atilde;o um dom&iacute;nio da titularidade de Ana
                      Patr&iacute;cia de Oliveira, contribuinte fiscal n.&ordm;
                      261465074, com c&eacute;dula profissional n.&ordm; 8611 e
                      domic&iacute;lio profissional na Rua Tom&eacute; de Sousa,
                      Edif&iacute;cio Diamante, Loja 2, 44, 4750-217 Arcozelo,
                      Barcelos, denominada pelo nome &ldquo;ANA PATR&Iacute;CIA
                      DE OLIVEIRA | SOLICITADORA&rdquo;.
                    </p>
                    <br />
                    <p>
                      ANA PATR&Iacute;CIA DE OLIVEIRA pode ser contacta
                      atrav&eacute;s dos seguintes meios de contacto ao dispor:
                    </p>
                    <p>
                      Contacto telef&oacute;nico +
                      351&nbsp;963&nbsp;149&nbsp;900;
                    </p>
                    <p>Email: solicitadora8611@gmail.com&nbsp;</p>
                    <br />

                    <p>
                      O conte&uacute;do do website, incluindo log&oacute;tipo,
                      imagens e material de &aacute;udio ou v&iacute;deo e todos
                      os artigos e not&iacute;cias publicados, s&atilde;o da
                      autoria de titular exceto informa&ccedil;&atilde;o
                      expressa em contr&aacute;rio.
                    </p>
                    <br />

                    <p>
                      A utiliza&ccedil;&atilde;o do website, para
                      subscri&ccedil;&atilde;o dos servi&ccedil;os e
                      conte&uacute;dos digitais comercializados, implica a
                      aceita&ccedil;&atilde;o por parte do cliente/utilizador
                      dos presentes termos e condi&ccedil;&otilde;es de
                      utiliza&ccedil;&atilde;o, bem como o conhecimento sobre a
                      pol&iacute;tica de privacidade.
                    </p>
                    <br />

                    <p>
                      Todas as informa&ccedil;&otilde;es carregadas pelo
                      utilizador, s&atilde;o da sua exclusiva responsabilidade,
                      comprometendo-se o mesmo a n&atilde;o carregar
                      informa&ccedil;&atilde;o de terceiros, ofensiva e/ou que
                      infrinja os nossos direitos, os de terceiros ou as
                      disposi&ccedil;&otilde;es legais.
                    </p>
                    <br />

                    <p>
                      &Eacute; considerado <em>utilizador</em>(a) qualquer
                      pessoa singular ou coletiva que aceda ao website, e{" "}
                      <em>cliente </em>qualquer pessoa singular ou coletiva que
                      formalize uma compra.
                    </p>
                    <br />

                    <p>
                      Considera-se ainda <em>consumidor</em> a pessoa singular
                      que atue com fins que n&atilde;o se integrem no
                      &acirc;mbito da sua atividade comercial, industrial,
                      artesanal ou profissional.
                    </p>
                    <br />

                    <p>
                      A refer&ecirc;ncia &agrave; titular e aos utilizadores
                      poder&aacute; ser realizada no singular ou no plural, sem
                      que tal desvirtue o conte&uacute;do dos presentes termos e
                      condi&ccedil;&otilde;es.
                    </p>
                    <br />

                    <p>
                      Caso n&atilde;o aceite os termos e condi&ccedil;&otilde;es
                      e a{" "}
                        pol&iacute;tica de privacidade
                      
                      , n&atilde;o utilize o presente website.
                    </p>
                    <br />

                    <ol start="2">
                      <li>
                        <strong> CONSULTORIA JUR&Iacute;DICA</strong>
                      </li>
                    </ol>
                    <p>
                      Pelo presente website, poder&aacute; agendar uma consulta
                      jur&iacute;dica e/ou um servi&ccedil;o de acompanhamento e
                      representa&ccedil;&atilde;o legal com a Solicitadora Ana
                      Patr&iacute;cia de Oliveira, c&eacute;dula profissional
                      n.&ordm; 8611.
                    </p>
                    <br />

                    <p>
                      A atividade de Solicitadoria encontra-se exclu&iacute;da
                      da previs&atilde;o legal da obriga&ccedil;&atilde;o de
                      exist&ecirc;ncia de livro de reclama&ccedil;&otilde;es
                      eletr&oacute;nico. N&atilde;o obstante, caso pretenda
                      expor o seu descontentamento, para melhor a nossa
                      qualidade, n&atilde;o hesite em enviar-nos um e-mail para{" "}
                      <a href="mailto:solicitadora8611@gmail.com">
                        solicitadora8611@gmail.com
                      </a>
                      . Se quiser dar-nos o seu feedback, envie-nos um e-mail,
                      ap&oacute;s conclus&atilde;o do servi&ccedil;o contratado.
                    </p>
                    <br />

                    <p>
                      A rela&ccedil;&atilde;o jur&iacute;dica de mandato forense
                      n&atilde;o consubstancia uma rela&ccedil;&atilde;o de
                      consumo, termos pelos quais, aos servi&ccedil;os
                      prestados, ainda que &agrave; dist&acirc;ncia, n&atilde;o
                      &eacute; aplic&aacute;vel o regime previsto no Decreto-Lei
                      n.&ordm; 24/2014 de 14 de fevereiro, que rege os contratos
                      celebrados &agrave; dist&acirc;ncia e fora dos
                      estabelecimentos comerciais.&nbsp;
                    </p>
                    <br />

                    <p>
                      &Agrave; rela&ccedil;&atilde;o Solicitadora-Cliente
                      aplicam-se as disposi&ccedil;&otilde;es do Estatuto da
                      Ordem dos Solicitadores e Agentes de
                      Execu&ccedil;&atilde;o, designado de EOSAE.
                    </p>
                    <br />

                    <p>
                      As consultas online ser&atilde;o ministradas &agrave;
                      dist&acirc;ncia, atrav&eacute;s da plataforma Google Meet,
                      &agrave; qual o cliente dever&aacute; aceder no dia e
                      hor&aacute;rio de agendamento, ap&oacute;s
                      confirma&ccedil;&atilde;o da consulta.
                    </p>
                    <br />

                    <p>
                      Nenhum servi&ccedil;o ser&aacute; iniciado sem o pagamento
                      da totalidade pre&ccedil;o anunciado.
                    </p>
                    <p>
                      O cliente pode reagendar a consulta jur&iacute;dica,
                      dentro da disponibilidade de agenda.
                    </p>
                    <br />

                    <p>
                      N&atilde;o ser&atilde;o realizados quaisquer reembolsos em
                      rela&ccedil;&atilde;o a consultas jur&iacute;dicas
                      previamente agendadas, em caso de n&atilde;o
                      compar&ecirc;ncia sem pr&eacute;via
                      comunica&ccedil;&atilde;o de impossibilidade de
                      compar&ecirc;ncia com pedido de reagendamento, caso o
                      impedimento n&atilde;o seja comunicado em 24h &uacute;teis
                      anteriores &agrave; data agendada.
                    </p>
                    <br />

                    <p>
                      Com o agendamento, ser&aacute; solicitado ao cliente o
                      preenchimento de uma ficha sobre o enquadramento da
                      consulta jur&iacute;dica, e fornecimento de documentos
                      para pr&eacute;via an&aacute;lise.
                    </p>
                    <br />

                    <p>
                      O cliente compromete-se a carregar e a transmitir
                      informa&ccedil;&atilde;o fidedigna e completa, n&atilde;o
                      sendo o prestador do servi&ccedil;o respons&aacute;vel por
                      qualquer ato que resulte de informa&ccedil;&atilde;o falsa
                      ou deficientemente prestada pelo paciente.
                    </p>
                    <br />

                    <p>
                      Ao agendar o servi&ccedil;o, est&aacute; a declarar ter
                      lido e ter consentimento das presentes
                      condi&ccedil;&otilde;es pr&eacute;-contratuais.
                    </p>
                    <br />

                    <p>
                      Todos os dados pessoais recolhidos ser&atilde;o tratados
                      em conformidade com a lei aplic&aacute;vel, podendo saber
                      como na nossa Pol&iacute;tica de Privacidade.
                    </p>
                    <br />

                    <p>
                      Na rela&ccedil;&atilde;o Solicitadora-Cliente, aplica-se o
                      regime da responsabilidade civil contratual, nos termos
                      gerais.
                    </p>
                    <br />
                    
                    <ol start="6">
                      <li>
                        <strong> LIT&Iacute;GIOS</strong>
                      </li>
                    </ol>
                    <p>
                      Em caso de lit&iacute;gio, comprometem-se as partes em
                      empenhar todos os seus esfor&ccedil;os para resolver o
                      mesmo de forma extrajudicial.
                    </p>
                    <br />

                    <p>
                      A presente rela&ccedil;&atilde;o contratual rege-se pela
                      lei portuguesa.
                    </p>
                    <br />

                    <p>
                      Em caso de lit&iacute;gio, elege-se como foro competente o
                      do Tribunal Judicial da Comarca de Barcelos.
                    </p>
                    <br />

                    <p>
                      Caso o lit&iacute;gio surja no &acirc;mbito dos
                      exerc&iacute;cios das fun&ccedil;&otilde;es de
                      Solicitadora, poder&aacute; entrar em contacto com a Ordem
                      dos Solicitadores e Agentes de Execu&ccedil;&atilde;o.
                    </p>
                    <br />

                    <ol start="7">
                      <li>
                        <strong> OUTRAS INFORMA&Ccedil;&Otilde;ES</strong>
                      </li>
                    </ol>
                    <p>
                      O presente website foi criado para uso particular dos
                      clientes e/ou potenciais clientes da titular,
                      atrav&eacute;s do qual podem conhecer os servi&ccedil;os.
                    </p>
                    <br />

                    <p>
                      Desde j&aacute; se adverte que os conte&uacute;dos,
                      servi&ccedil;os, condi&ccedil;&otilde;es de
                      utiliza&ccedil;&atilde;o do site e a pol&iacute;tica de
                      privacidade, podem ser modificados pela sua titular,
                      conforme permitido pela lei aplic&aacute;vel, quando a
                      altera&ccedil;&atilde;o seja exigida por lei ou esteja
                      relacionada com a expans&atilde;o ou
                      introdu&ccedil;&atilde;o de novos servi&ccedil;os e/ou
                      funcionalidades ou de quaisquer outras
                      altera&ccedil;&otilde;es que se revelem
                      necess&aacute;rias. A titular do site levar&aacute; a cabo
                      os melhores esfor&ccedil;os para indicar de forma escrita
                      ou online a data da &uacute;ltima
                      atualiza&ccedil;&atilde;o. N&atilde;o obstante,
                      aconselha-se a sua consulta com regularidade.
                    </p>
                    <br />

                    <p>
                      Ao aceder ao website, est&aacute; a concordar em
                      n&atilde;o usar o mesmo, ou o seu conte&uacute;do, em
                      viola&ccedil;&atilde;o de qualquer norma legal bem como em
                      n&atilde;o reproduzir, modificar, ou transmitir o seu
                      conte&uacute;do para qualquer finalidade p&uacute;blica ou
                      privada, sem pr&eacute;vio e expresso consentimento
                      escrito da titular.
                    </p>
                    <br />

                    <p>
                      Todas as informa&ccedil;&otilde;es do utilizador, por ele
                      carregadas no presente website, s&atilde;o da sua
                      exclusiva responsabilidade, comprometendo-se o mesmo a
                      n&atilde;o carregar informa&ccedil;&atilde;o ofensiva e/ou
                      que infrinja os nossos direitos, os de terceiros ou as
                      disposi&ccedil;&otilde;es dos avisos legais.
                    </p>
                    <br />

                    <p>
                      Todo o conte&uacute;do do presente website e dos demais
                      canais de comunica&ccedil;&atilde;o digital que lhe
                      est&atilde;o associados (como s&atilde;o, sem limitar, os
                      meios de comunica&ccedil;&atilde;o eletr&oacute;nica e
                      redes sociais) incluindo textos, log&oacute;tipos, imagens
                      e material de &aacute;udio ou v&iacute;deo, &eacute;
                      propriedade exclusiva da titular e est&aacute; protegido
                      por direitos de autor, cuja viola&ccedil;&atilde;o pode
                      consubstanciar a pr&aacute;tica do crime de
                      usurpa&ccedil;&atilde;o ou contrafa&ccedil;&atilde;o,
                      respetivamente previstos e punidos pelos artigos
                      195.&ordm;, 196.&ordm; e 197.&ordm; do C&oacute;digo dos
                      Direitos de Autor e dos Direitos Conexo.
                    </p>
                    <br />

                    <p>
                      Para entrar em contacto com a propriet&aacute;ria
                      atrav&eacute;s do presente website, o utilizador declara
                      ter lido e estar consciente dos presentes termos e
                      condi&ccedil;&otilde;es e ainda da pol&iacute;tica de
                      privacidade. Raz&atilde;o pela se solicita ao utilizador
                      que conhe&ccedil;a os presentes termos e
                      condi&ccedil;&otilde;es e a pol&iacute;tica de privacidade
                      antes de submeter os seus dados, seja de que forma for.
                    </p>
                    <br />

                    <p>
                      A titular n&atilde;o &eacute; respons&aacute;vel por
                      quaisquer preju&iacute;zos sofridos pelo cliente, utilizou
                      e/ou terceiros, em virtude de atrasos,
                      interrup&ccedil;&otilde;es, erros e suspens&otilde;es de
                      comunica&ccedil;&otilde;es que n&atilde;o dependam do seu
                      controlo e que por isso s&oacute; possam ser
                      imput&aacute;veis a terceiros, como s&atilde;o os
                      respons&aacute;veis pela gest&atilde;o da rede de
                      telecomunica&ccedil;&otilde;es; pelos canais
                      eletr&oacute;nicos usados pela titular; pelo sistema
                      inform&aacute;tico e sua manuten&ccedil;&atilde;o; pelos
                      modems; pelo software de liga&ccedil;&atilde;o ou
                      eventuais v&iacute;rus inform&aacute;ticos ou decorrentes
                      de download e ficheiros infetados realizado pelo cliente.
                    </p>
                    <br />

                    <p>
                      Se n&atilde;o estiver totalmente esclarecido, pode colocar
                      as suas d&uacute;vidas atrav&eacute;s do endere&ccedil;o
                      de e-mail{" "}
                      <a href="mailto:solicitadora8611@gmail.com">
                        solicitadora8611@gmail.com
                      </a>
                      .
                    </p>
                  </DialogDescription>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border/40 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ana Patrícia de Oliveira — Solicitadora
      </div>
    </div>
  </footer>
);

export default Footer;
