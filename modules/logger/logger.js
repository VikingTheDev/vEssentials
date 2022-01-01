// TODO
// - Add discord logger (regular and embed messages)
// - Add protection against "breakout" symbols
// - Set up error reporting and callbacks for all functions

module.exports = () => {
    onNet('vEssentials/logger:console', (module, message, cb) => {
        console.log(`[${ module }] | ${ message }`);
    });

    on('Vessentials/logger:discord', (module, message, type, channel, cb ) => {

    });

    on('vEssentials/logger:error', (module, error, cb) => {

    });
};