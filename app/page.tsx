import Image from 'next/image'
import { Header } from './(componensts)/Header'
import { BannerHome } from './(componensts)/banners/BannerHome'
import { Skills } from './(componensts)/Skills'
import { Projects } from './(componensts)/Projects'
import { Experiencies } from './(componensts)/Experiencies'
import { Contact } from './(componensts)/Contact'

export default function Home() {
  return (
    <main>
      <Header />
      <BannerHome />
      <Skills />
      <Projects />
      <Experiencies />
      <Contact />
    </main>
  )
}
