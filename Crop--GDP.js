/*
 * Basic responsive mashup template modified by
 * @David Silva Troya
 */
/*
 *    Fill in host and port for Qlik engine
 */



//My Variables!
var obj = {
    progressBar: null,
}
var btn = {
    index: null,
    about: null,
    global: null,
    crops: null,
    population: null,
    economy: null,
    cropopulation: null,
    globalFilter: null,
}
var section = {
    index: null,
    loading: null,
    about: null,
    global: null,
    crops: null,
    population: null,
    economy: null,
    cropopulation: null,
}

//Just a load function to show progress
const loadProgressBar = (porcentage) => {
    console.log(`loading ${porcentage}%`)
    if (obj.progressBar == null) {
        obj.progressBar = document.querySelector('div#dast-progress-bar');
    } else {
        obj.progressBar.style.width = `${porcentage}%`;
    }
}


loadProgressBar(20);
var prefix = window.location.pathname.substr(0, window.location.pathname.toLowerCase().lastIndexOf("/extensions") + 1);
loadProgressBar(30);
var config = {
    host: window.location.hostname,
    prefix: prefix,
    port: window.location.port,
    isSecure: window.location.protocol === "https:"
};
loadProgressBar(50);
require.config({
    baseUrl: (config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
});
loadProgressBar(60);
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
    loadProgressBar(65);
    //get objects -- inserted here --
    app.getObject('QV46', 'BVmJyp');
    app.getObject('QV45', 'GbxMSMu');
    app.getObject('QV47', 'mnptMRX');
    app.getObject('QV44', 'HPzsNNn');
    app.getObject('QV43', 'VauaFEd');
    app.getObject('QV48', 'myPE');


    app.getObject('QV11', 'b2290a85-2282-49a5-ae34-7db3425164a7');


    app.getObject('QV42', 'fyEzDpJ');
    app.getObject('QV41', 'dbhgLL');
    app.getObject('QV40', 'kpamAt');
    app.getObject('QV39', '2d2eaf11-9967-4bac-a789-777a3a6fd1c8');
    app.getObject('QV38', 'df1f84e9-fbd8-414e-b2b5-2c193af0c816');
    app.getObject('QV37', '97e6f535-8308-482c-aeac-8362de76f898');
    app.getObject('QV36', '127236e9-7522-48be-bb5a-4e3c4418bb3d');
    app.getObject('QV35', 'hGkyDXj');
    app.getObject('QV34', 'cLXurLR');
    app.getObject('QV33', 'pjtpeQ');
    app.getObject('QV32', 'FKAmj');
    app.getObject('QV31', 'qMgpwJ');
    app.getObject('QV30', '5127eaf1-9eeb-4813-9a52-7da1483af7a6');
    app.getObject('QV29', '17110e13-5008-4cae-917b-d45bfafbe06b');
    app.getObject('QV28', 'TLZNu');
    app.getObject('QV27', 'MpAZZJ');
    app.getObject('QV26', 'ZLmBqyJ');
    app.getObject('QV25', 'NyJaPm');
    app.getObject('QV24', 'vPxnKSz');
    app.getObject('QV23', 'bjuLmJF');
    app.getObject('QV22', 'jsDGvD');
    app.getObject('QV21', 'eVwEx');
    app.getObject('QV20', 'JcUkz');
    app.getObject('QV19', 'pRxj');
    app.getObject('QV18', 'dmjTLcG');
    app.getObject('QV17', 'KWsEdP');
    app.getObject('QV16', 'cUJJkx');
    app.getObject('QV15', 'AVxcvsN');
    app.getObject('QV14', 'uVJDq');
    app.getObject('QV13', 'pvPZVW');

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
    loadProgressBar(90);





    window.onload = () => {
        console.log('File ready!');
        btn.index = document.querySelector('button#btn-index');
        btn.about = document.querySelector('div#btn-about');
        btn.global = document.querySelector('a#btn-global');
        btn.crops = document.querySelector('a#btn-crops');
        btn.population = document.querySelector('a#btn-population');
        btn.economy = document.querySelector('a#btn-economy');
        btn.cropopulation = document.querySelector('a#btn-cropopulation');
        btn.globalFilter = document.querySelector('button#btn-global-filters');

        section.index = document.querySelector('section#index');
        section.loading = document.querySelector('section#loading');
        section.about = document.querySelector('section#about');
        section.global = document.querySelector('section#global-view');
        section.crops = document.querySelector('section#crop-view');
        section.population = document.querySelector('section#population-view');
        section.economy = document.querySelector('section#economy-view');
        section.cropopulation = document.querySelector('section#crop-and-population');

        console.log(btn);

        btn.index.addEventListener("click", () => {
            showIndex();
            hideAll();
        });
        btn.global.addEventListener("click", () => {
            hideIndex();
            showGlobal();
        });
        btn.crops.addEventListener("click", () => {
            hideIndex();
            showCrops();
        });
        btn.population.addEventListener("click", () => {
            hideIndex();
            showPopulation();
        });
        btn.economy.addEventListener("click", () => {
            hideIndex();
            showEconomy();
        });
        btn.cropopulation.addEventListener("click", () => {
            hideIndex();
            showCropopulation();
        });
        btn.about.addEventListener("click", () => {
            hideIndex();
            showAbout();
        });
        btn.globalFilter.addEventListener("click", () => {
            document.querySelector('div#global-filters').classList.toggle("dast-w-filter")
            document.querySelector('div#global-charts').classList.toggle("dast-w-charts")
            app.getObject('QV13', 'pvPZVW');
            app.getObject('QV12', 'ZNHAk');
        });

        loadProgressBar(99);
        hideLoading();
        hideAll();
        console.log('All ready!');
        loadProgressBar(100);
    };

    const showLoading = () => {
        section.loading.classList.remove("d-none");
    }
    const hideLoading = () => {
        section.loading.classList.add("d-none");
    }
    const showIndex = () => {
        section.index.classList.remove("d-none");
        btn.index.classList.add("d-none");
    }
    const hideIndex = () => {
        section.index.classList.add("d-none");
        btn.index.classList.remove("d-none");
    }
    const showAbout = () => {
        section.about.classList.remove("d-none");
    }
    const hideAbout = () => {
        section.about.classList.add("d-none");
    }
    const showGlobal = () => {
        section.global.classList.remove("d-none");
    }
    const hideGlobal = () => {
        section.global.classList.add("d-none");
    }
    const showCrops = () => {
        section.crops.classList.remove("d-none");
    }
    const hideCrops = () => {
        section.crops.classList.add("d-none");
    }
    const showPopulation = () => {
        section.population.classList.remove("d-none");
    }
    const hidePopulation = () => {
        section.population.classList.add("d-none");
    }
    const showEconomy = () => {
        section.economy.classList.remove("d-none");
    }
    const hideEconomy = () => {
        section.economy.classList.add("d-none");
    }
    const showCropopulation = () => {
        section.cropopulation.classList.remove("d-none");
    }
    const hideCropopulation = () => {
        section.cropopulation.classList.add("d-none");
    }
    const hideAll = () => {
        hideAbout();
        hideCrops();
        hideGlobal();
        hideEconomy();
        hideCropopulation();
        hidePopulation()
        showIndex();
    }

















    //create cubes and lists -- inserted here --

});