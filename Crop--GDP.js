/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr(0, window.location.pathname.toLowerCase().lastIndexOf("/extensions") + 1);
var config = {
    host: window.location.hostname,
    prefix: prefix,
    port: window.location.port,
    isSecure: window.location.protocol === "https:"
};
require.config({
    baseUrl: (config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
});

require(["js/qlik"], function(qlik) {
    qlik.on("error", function(error) {
        $('#popupText').append(error.message + "<br>");
        $('#popup').fadeIn(1000);
    });
    $("#closePopup").click(function() {
        $('#popup').hide();
    });

    //callbacks -- inserted here --
    //open apps -- inserted here --
    var app = qlik.openApp('Crops-and-GDP.qvf', config);

    //get objects -- inserted here --
	app.getObject('QV48','myPE');
	app.getObject('QV47','mnptMRX');
	app.getObject('QV46','BVmJyp');
	app.getObject('QV45','GbxMSMu');
	app.getObject('QV44','HPzsNNn');
	app.getObject('QV43','VauaFEd');
	app.getObject('QV42','fyEzDpJ');
	app.getObject('QV41','dbhgLL');
	app.getObject('QV40','kpamAt');
	app.getObject('QV39','2d2eaf11-9967-4bac-a789-777a3a6fd1c8');
	app.getObject('QV38','df1f84e9-fbd8-414e-b2b5-2c193af0c816');
	app.getObject('QV37','97e6f535-8308-482c-aeac-8362de76f898');
	app.getObject('QV36','127236e9-7522-48be-bb5a-4e3c4418bb3d');
	app.getObject('QV35','hGkyDXj');
	app.getObject('QV34','cLXurLR');
	app.getObject('QV33','pjtpeQ');
	app.getObject('QV32','FKAmj');
	app.getObject('QV31','qMgpwJ');
	app.getObject('QV30','5127eaf1-9eeb-4813-9a52-7da1483af7a6');
	app.getObject('QV29','17110e13-5008-4cae-917b-d45bfafbe06b');
	app.getObject('QV28','TLZNu');
	app.getObject('QV27','MpAZZJ');
	app.getObject('QV26','ZLmBqyJ');
	app.getObject('QV25','NyJaPm');
	app.getObject('QV24','vPxnKSz');
	app.getObject('QV23','bjuLmJF');
	app.getObject('QV22','jsDGvD');
	app.getObject('QV21','eVwEx');
	app.getObject('QV20','JcUkz');
	app.getObject('QV19','pRxj');
	app.getObject('QV18','dmjTLcG');
	app.getObject('QV17','KWsEdP');
	app.getObject('QV16','cUJJkx');
	app.getObject('QV15','AVxcvsN');
	app.getObject('QV14','uVJDq');
	app.getObject('QV13','pvPZVW');
	app.getObject('QV11','fa88f113-944d-4c97-9ea2-32fb6d9b3269');
    app.getObject('QV10', 'fa88f113-944d-4c97-9ea2-32fb6d9b3269');
    app.getObject('QV12', 'ZNHAk');


    app.getObject('QV09', '2fa67c74-0313-4a6d-a0bf-dc4ecac4c686');
    app.getObject('QV08', '3a8bff75-f35c-4656-83d0-7ff0585917d6');
    app.getObject('QV01', 'NdYF');
    app.getObject('QV07', 'yZZBP');
    app.getObject('QV06', 'pkpFpF');
    app.getObject('QV05', 'FzTZW');
    app.getObject('QV04', 'MBVMkU');
    app.getObject('QV03', 'AMKdmEv');
    app.getObject('QV02', 'pwPEzj');




















    //create cubes and lists -- inserted here --

});