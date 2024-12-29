import Links from "./components/Links";

export default function Home() {
  return (
    <div className="w-full  flex flex-col justify-start items-center gap-20 p-6 mb-20">
      <h2 className="text-lg lg:text-3xl font-bold">
        Ferramentas de Inteligência
      </h2>
      <div className="flex max-w-7xl w-full mx-auto flex-wrap justify-around gap-7 lg:gap-14">
        <Links
          href="http://operacional.muralhapaulista.sp.gov.br/"
          src="/muralha.svg"
          text="Muralha Paulista"
          blank="_blank"
        />
        <Links
          href="http://inteligenciaweb.intranet.policiamilitar.sp.gov.br"
          src="/pmesp.svg"
          text="Inteligência Web"
          blank="_blank"
        />
        <Links
          href="https://alertabrasil.prf.gov.br/alertabrasil"
          src="/alertaBrasil.svg"
          text="Alerta Brasil"
          blank="_blank"
        />
        <Links
          href="http://dr.itsbrasil.net.br/"
          src="/rodoviaria2.png"
          text="DER - its brasil"
          blank="_blank"
        />
        <Links
          href="https://blitzsjc.sistemasfotosensores.com/"
          src="/fotoblitz.ico"
          text="fotobliz - sjc"
          blank="_blank"
        />

        <Links
          href="https://www.infocrim.ssp.sp.gov.br/login"
          src="/sspNovo.png"
          text="INFOCRIM 4.0"
          blank="_blank"
        />
        <Links
          href="https://copomonline.policiamilitar.sp.gov.br/Login/Login"
          src="/pmesp.svg"
          text="COPOM online"
          blank="_blank"
        />

        <Links
          href="https://seguranca.sinesp.gov.br/sinesp-seguranca/login.jsf?goto=INFOSEG"
          src="/infoseg.ico"
          text="INFOSEG"
          blank="_blank"
        />
        <Links
          href="https://www.hnprd.dipol.prodesp.sp.gov.br/web/(S(pqn0dkxyr0lb2ojxxwnkul5b))/Home/UnknownPage"
          src="/ssp.ico"
          text="PRODESP"
          blank="_blank"
        />
        <Links
          href="https://portalbnmp.cnj.jus.br/#/pesquisa-peca"
          src="/bnmp.ico"
          text="portal bnmp"
          blank="_blank"
        />
        <Links
          href="https://www6.intranet.policiamilitar.sp.gov.br/unidades/6bprv/inteligencia/"
          src="/rodoviaria2.png"
          text="bd inteligência"
          blank="_blank"
        />

        <Links
          href="http://www.intranet.policiamilitar.sp.gov.br/"
          src="/pmesp.svg"
          text="Intranet"
          blank="_blank"
        />

        <Links
          href="http://sistemasopr.intranet.policiamilitar.sp.gov.br/siopmweb/HSiopm.aspx"
          src="/pmesp.svg"
          text="SIOPM Web"
          blank="_blank"
        />
        <Links
          href="http://10.61.18.121/Funcional/6bprvinteligencia.nsf"
          src="/logoEmail.png"
          text="Email da Seção"
          blank="_blank"
        />
        <Links
          href="https://correio.policiamilitar.sp.gov.br"
          src="/logoEmail.png"
          text="Email Pessoal"
          blank="_blank"
        />
        <Links
          href="https://www.google.com/maps/d/u/0/viewer?mid=1IZQYhjM25zcrjnTEByfibpcDAE59r9o&g_ep=CAESCjExLjExMy4xMDIYACDdYioJLDQ3MDc1OTE1QgJCUg%3D%3D&shorturl=1&ll=-22.155562396118857%2C-49.17513321141613&z=8"
          src="/maps.png"
          text="Limites de área dos Batalhões"
          blank="_blank"
        />
        <Links
          href="https://ead.policiamilitar.sp.gov.br/"
          src="/pmesp.svg"
          text="PVT/ITP/EAP"
          blank="_blank"
        />
        <Links
          href="/consulta"
          src="/pmesp.svg"
          text="Consulta DEJEM/DELEGADA"
        />
        <Links
          href="https://sei.sp.gov.br/"
          src="/sspNovo.png"
          text="SEI - Sistema Eletrônico de Informações"
          blank="_blank"
        />
        <Links
          href="https://web.whatsapp.com/"
          src="/whatsapp.png"
          text="Whatsapp Web"
          blank="_blank"
        />
        <Links
          href="https://www.ciaf.policiamilitar.sp.gov.br/folhadepagamento/autenticacaosegura.aspx"
          src="/pmesp.svg"
          text="holerite"
          blank="_blank"
        />
        <Links
          href="http://10.36.216.220:8080/"
          src="/rodoviaria2.png"
          text="Servidor p2"
          blank="_blank"
        />
      </div>
    </div>
  );
}
