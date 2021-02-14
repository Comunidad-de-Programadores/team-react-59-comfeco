const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    
  },
  images: {
    deviceSizes: [256, 384, 640, 750, 828, 1080, 1200, 1920, 2048],
  },
}