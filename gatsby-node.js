const Promise = require(`bluebird`)

const showcase = require(`./src/utils/node/showcase.js`)

const sections = [showcase]

exports.createPages = async (helpers) => {
  await Promise.all(sections.map((section) => section.createPages(helpers)))
}

// Create slugs for files, set released status for blog posts.
exports.onCreateNode = (helpers) => {
  sections.forEach((section) => section.onCreateNode(helpers))
}
