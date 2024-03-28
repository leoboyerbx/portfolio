module.exports = {
    apps: [
        {
            name: 'PortfolioAdmin',
            port: '1337',
            script: "npm",
            args: "start",
            env: {
                "NODE_ENV": "production",
            }
        },
    ],
}