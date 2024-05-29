function isHonoInstalled() {
  try {
    // Try to load the module as an ES6 module
    require.resolve('hono')
    return true
  } catch (e) {
    if (e.code === 'ERR_MODULE_NOT_FOUND') {
      try {
        // Try to load the module as a CommonJS module
        require.resolve('hono')
        return true
      } catch (err) {
        if (err.code === 'MODULE_NOT_FOUND') {
          return false
        }
      }
    }
  }

  return false
}

function isHono(obj) {
  if (!obj || typeof obj !== 'object' || !isHonoInstalled()) return false

  return true
}

console.log()
