
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/BanderaFinal');
require('./assets/Scripts/Enemigo 1');
require('./assets/Scripts/Enemigo 2');
require('./assets/Scripts/Enemigo 3');
require('./assets/Scripts/FinalScore');
require('./assets/Scripts/Game');
require('./assets/Scripts/InstruccionesButton');
require('./assets/Scripts/MainCamera');
require('./assets/Scripts/MenuButton');
require('./assets/Scripts/Moneda');
require('./assets/Scripts/Plataforma Movil');
require('./assets/Scripts/PlayButton');
require('./assets/Scripts/Player');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();