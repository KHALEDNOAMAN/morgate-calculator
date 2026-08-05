import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

/**
 * Stands in for the PHP lead endpoint during `vite dev`, so the inquiry form's
 * success and error paths can both be exercised locally. Does nothing in the
 * production build — there, the real api/lead.php on the PHP host answers.
 */
function mockLeadApi() {
  return {
    name: 'mock-lead-api',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/lead.php', (req, res, next) => {
        if (req.method !== 'POST') return next()

        let body = ''
        req.on('data', (chunk) => (body += chunk))
        req.on('end', () => {
          let payload = {}
          try {
            payload = JSON.parse(body || '{}')
          } catch {
            // fall through to the validation error below
          }

          res.setHeader('Content-Type', 'application/json')

          if (!payload.name || !payload.email) {
            res.statusCode = 422
            res.end(
              JSON.stringify({ message: 'Name and email are required.' }),
            )
            return
          }

          server.config.logger.info(
            `[mock lead] ${payload.name} <${payload.email}> — ${payload.unit || 'no unit'}`,
          )
          res.end(
            JSON.stringify({
              message: 'Registered successfully. Our team will be in touch.',
            }),
          )
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    mockLeadApi(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
