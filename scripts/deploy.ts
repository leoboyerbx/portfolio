import { exec } from 'node:child_process'
import { promisify } from 'node:util'
import { confirm, isCancel, log, spinner } from '@clack/prompts'
import { colors } from 'consola/utils'

const run = promisify(exec)

const branch = await run ('git rev-parse --abbrev-ref HEAD').then(res => res.stdout.trim())

if (branch === 'main') {
    log.info('Already on main branch')
}

const shouldDeploy = await confirm({
    message: `Push from ${colors.bold(colors.yellow(branch))} to ${colors.bold(colors.red('main'))}? The CI will deploy changes`,
})
if (!shouldDeploy || isCancel(shouldDeploy)) {
    log.info('Deployment cancelled')
    process.exit(0)
}

const s = spinner()
s.start('Deploying...')
try {
    await run(`git push origin ${branch}:main`)
}
catch (e: any) {
    s.stop('Deployment failed', 1)
    console.error(e)
    process.exit(1)
}
s.stop('Deployment successful')
