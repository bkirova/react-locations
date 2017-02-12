var name = "reactChat";
var version = "1.0.0";

var config = {
    local: {
        mode: 'local',
        port : 7777,
        name : name,
        version : version,
    },
    development: {
        mode: 'dev',
        port : 7778,
        name : name,
        version : version,
    },
    production: {
        mode: 'production',
        port : 7779,
        name : name,
        version : version,
    }
}

module.exports = {
    config: function(mode) {
        return config[mode || process.argv[2] || process.env.NODE_ENV || "local"] || config.local;
    },
    variables: function(mode) {
        var modeVars = mode || process.env.NODE_ENV || process.argv[2] || "local";
        return require("./"+modeVars+"/variables");
    },
    constants: function(mode) {
        var modeVars = mode || process.env.NODE_ENV|| process.argv[2] || "local";
        return require("./"+modeVars+"/constants");
    }
};