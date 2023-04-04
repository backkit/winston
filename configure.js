const autoconf = require("@backkit/autoconf");

autoconf('logger')
.generator(self => ([
  {
    mkdirp: self.rootServiceDir
  },
  {
    putFileOnce: self.serviceCodeMainJS,
    content: `module.exports = require('${self.npmModuleName}');`
  },
  {
    putFileOnce: self.serviceConfigMainYML,
    contentYml: self.config
  }
]))
.default(self => ({}))
.prompt(self => ([]))
.run()
