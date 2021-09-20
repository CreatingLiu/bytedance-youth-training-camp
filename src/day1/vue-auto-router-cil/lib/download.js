const {promisify} = require('util')

module.exports.clone = async function(repo, desc) {
    const ora = (await import('ora')).default
    const download = promisify(require('download-git-repo'))
    const process = ora('下载...' + repo)
    process.start()
    await download(repo, desc);
    process.succeed()
}