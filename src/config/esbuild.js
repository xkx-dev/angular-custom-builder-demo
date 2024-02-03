const wsdlPlugin = require('./plugins/xml.plugin');
const getPlugins = async () => {
    const plugins = []

    const svgPluginModule = await import('esbuild-plugin-svg');
    if (svgPluginModule.default) {
        plugins.push(svgPluginModule.default())
    }
    plugins.push(wsdlPlugin())
    return plugins
}
module.exports = { getPlugins: getPlugins }