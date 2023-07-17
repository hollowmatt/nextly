import Layout, { siteTitle } from '../components/layout';

export default function Custom404() {
  return(
    <Layout>
      <div>
        <h1>This is not the page you are looking for</h1>
        <p>
          Please hangup and try your call again... this is a recording.
        </p>
      </div>
    </Layout>

  )
}