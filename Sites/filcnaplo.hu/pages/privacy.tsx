import Footer from 'lib/components/footer'
import FilcNavBar from 'lib/components/navbar'
import Head from 'next/head'
import Link from 'next/link'

export default function Privacy () {
  return (
    <>
      <Head>
        <title>Privacy</title>
      </Head>
      <FilcNavBar />
      <div
        style={{
          background: 'linear-gradient(#FFFFFF00, #0DE3B533 100vh, #0DE3B533)'
        }}
        className='h-full'
      >
        <div className='flex flex-col'>
          <div className='flex flex-col justify-center w-full px-4 lg:px-0 lg:w-2/5 m-auto gap-8'>
            <h1
              className='text-5xl text-left lg:text-8xl font-extrabold mb-5 mt-12'
              style={{ lineHeight: 1 }}
            >
              Adatkezelési tájékoztató
            </h1>
            <div className='flex flex-col lg:text-xl justify-center gap-8 font-medium'>
              <p>
                A Filc Napló egy kliensalkalmazás, segítségével az e-Kréta
                rendszeréből letöltheted és felhasználóbarát módon
                megjelenítheted az adataidat. Tanulmányi adataid csak
                közvetlenül az alkalmazás és a Kréta-szerverek között
                közlekednek, titkosított kapcsolaton keresztül.
              </p>
              <p>
                A Filc fejlesztői és üzemeltetői a tanulmányi adataidat
                semmilyen célból nem másolják, nem tárolják és harmadik félnek
                nem továbbítják. Ezeket így az e-Kréta Informatikai Zrt. kezeli,
                az ő tájékoztatójukat itt találod:
              </p>
              <Link
                target='_blank'
                href='https://tudasbazis.ekreta.hu/pages/viewpage.action?pageId=4065038'
              >
                <p>
                  https://tudasbazis.ekreta.hu/pages/viewpage.action?pageId=4065038
                </p>
              </Link>
              <p>
                Azok törlésével vagy módosítával kapcsolatban keresd az
                osztályfőnöködet vagy az iskolád rendszergazdáját.
              </p>
              <p>
                Az alkalmazás névtelen használati statisztikákat gyűjt, ezek
                alapján tudjuk meghatározni a felhasználók és a telepítések
                számát. Ezt a beállításokban kikapcsolhatod.
              </p>
              <p>
                Kérünk, hogy ha csak teheted, hagyd ezt a funkciót bekapcsolva.
              </p>
              <p>
                Amikor az alkalmazás hibába ütközik, lehetőség van hibajelentés
                küldésére. Ez személyes- vagy tanulmányi adatokat nem tartalmaz,
                viszont részletes információval szolgál a hibáról és
                eszközödről. A küldés előtt megjelenő képernyőn a te
                felelősséged átnézni a továbbításra kerülő adatsort. A
                hibajelentéseket a Filc fejlesztői felületén és egy privát
                Discord szobában tároljuk, ezekhez csak az app fejlesztői férnek
                hozzá.
              </p>
              <p>
                Az alkalmazás belépéskor a GitHub API segítségével ellenőrzi,
                hogy elérhető-e új verzió, és kérésre innen is tölti le a
                telepítőt.
              </p>
              <p>
                Ha az adataiddal kapcsolatban bármilyen kérdésed van (törlés,
                módosítás, adathordozás), keress minket a{' '}
                <Link href='mailto:filcnaplo@filcnaplo.hu'>
                  filcnaplo@filcnaplo.hu
                </Link>{' '}
                címen.
              </p>
              <p>
                Az alkalmazás használatával jelzed, hogy ezt a tájékoztatót
                tudomásul vetted.
              </p>
              <p>Utolsó módosítás: 2021. 09. 25.</p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}
