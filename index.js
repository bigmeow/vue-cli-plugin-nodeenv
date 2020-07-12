const { info } = require("@vue/cli-shared-utils");

module.exports = api => {
    const { serve } = api.service.commands;
    const serveFn = serve.fn;
    serve.fn = (...args) => {
        process.env.NODE_ENV = "development";
        info("当前NODE_ENV：" + process.env.NODE_ENV);
        return serveFn(...args);
    };

    const { build } = api.service.commands;
    const buildFn = build.fn;
    build.fn = (...args) => {
        process.env.NODE_ENV = "production";
        info("当前NODE_ENV：" + process.env.NODE_ENV);
        return buildFn(...args);
    };
};
