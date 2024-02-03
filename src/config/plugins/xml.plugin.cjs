const fs = require('fs');
const path = require('path');

const wsdlPlugin = {
    name: 'xml-plugin',
    setup(build) {
        build.onResolve({ filter: /^!raw-loader!.*\.wsdl$/ }, (args) => {
            // Resolve the path to the wsdl file
            const wsdlPath = path.resolve(args.resolveDir, args.path.replace(/^!raw-loader!/, '../'));
            // Return the resolved path and the `namespace` as the `pluginData`
            return {
                path: wsdlPath,
                namespace: 'wsdl-namespace'
            };
        });

        build.onLoad({ filter: /.*/, namespace: 'wsdl-namespace' }, (args) => {
            // Load the wsdl file using the `text` loader
            const contents = fs.readFileSync(args.path, 'utf8');

            // Return the contents as the result
            return {
                contents,
                loader: 'text'
            };
        });
    }
};

module.exports = wsdlPlugin;
