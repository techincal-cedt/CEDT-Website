import React from "react"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import HomepageFeatures from "@site/src/components/HomepageFeatures"

import styles from "./index.module.css"

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div>
          The Centre for Electronics Design and Technology is a design centre
          visioned by Dr. B.N. Mishra, founder director NSIT, and brought to
          reality by Dhananjay V. Gadre. Since its inception, CEDT has been a
          place where students from all majors have tinkered and innovated
          during their stay at NSIT. One can do almost anything at CEDT, during
          any time of the day and any day of the year! This is an open access
          lab, where the students work on interesting projects and mentor
          others, helping in spreading the “Maker Keeda“.
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from CEDT`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>Home Page </main>
    </Layout>
  )
}
