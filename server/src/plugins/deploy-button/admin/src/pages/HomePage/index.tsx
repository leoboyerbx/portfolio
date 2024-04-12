/*
 *
 * HomePage
 *
 */

import { Button } from '@strapi/design-system'
import { Rocket } from '@strapi/icons'
import { useState } from 'react';

const HomePage = () => {
  const [loading, setLoading] = useState(false)
  const [triggered, setTriggered] = useState(false)
  const triggerDeploy = async () => {
    setLoading(true)
    await fetch('/deploy-button/trigger')
    setLoading(false)
    setTriggered(true)
    setTimeout(() => {
      setTriggered(false)
    }, 3000);
  }

  return (
    <div style={{ margin: '24px' }}>
      <h1 style={{
        fontSize: "24px",
        fontWeight: '700',
        marginBottom: 32
      }}>Deploy</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 12 }}>
        <p>This triggers a rebuild on cloudflare side.</p>
        <Button
          startIcon={<Rocket />}
          loading={loading}
          variant={triggered ? 'success' : 'default'}
          onClick={triggerDeploy}
        >
          {triggered ? 'Build triggered !' : 'Deploy cloudflare build'}
        </Button>
        <p>Check deployment progress in <a href="https://dash.cloudflare.com">the Cloudlfare dashboard</a></p>
      </div>
    </div>
  );
};

export default HomePage;
