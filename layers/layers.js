var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_SOIL_SITUBONDO_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SOIL_SITUBONDO<br />\
    <img src="styles/legend/SOIL_SITUBONDO_1_0.png" /> 1<br />\
    <img src="styles/legend/SOIL_SITUBONDO_1_1.png" /> 7<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SOIL_SITUBONDO_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12642642.106810, -892853.133427, 12742597.716925, -848845.888255]
        })
    });
var lyr_SLOPE_SITUBONDO_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SLOPE_SITUBONDO<br />\
    <img src="styles/legend/SLOPE_SITUBONDO_2_0.png" /> 0<br />\
    <img src="styles/legend/SLOPE_SITUBONDO_2_1.png" /> 75.422<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SLOPE_SITUBONDO_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12642810.000000, -892700.402101, 12742110.000000, -850247.106479]
        })
    });
var lyr_Rainfall_situbondo_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Rainfall_situbondo<br />\
    <img src="styles/legend/Rainfall_situbondo_3_0.png" /> 1237.73<br />\
    <img src="styles/legend/Rainfall_situbondo_3_1.png" /> 3033.92<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Rainfall_situbondo_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12642572.225719, -893414.620961, 12742855.869052, -848325.969031]
        })
    });
var lyr_ScoringSoil_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ScoringSoil<br />\
    <img src="styles/legend/ScoringSoil_4_0.png" /> 0<br />\
    <img src="styles/legend/ScoringSoil_4_1.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ScoringSoil_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12642572.225719, -893414.620961, 12742855.869052, -848325.969031]
        })
    });
var lyr_ScoringSlopeFIX_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ScoringSlopeFIX<br />\
    <img src="styles/legend/ScoringSlopeFIX_5_0.png" /> 2<br />\
    <img src="styles/legend/ScoringSlopeFIX_5_1.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ScoringSlopeFIX_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12634775.793842, -893463.751013, 12746095.284635, -837290.732342]
        })
    });
var lyr_ScoringRainfallFIX_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ScoringRainfallFIX<br />\
    <img src="styles/legend/ScoringRainfallFIX_6_0.png" /> -5<br />\
    <img src="styles/legend/ScoringRainfallFIX_6_1.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ScoringRainfallFIX_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12643058.792256, -891996.631710, 12742513.221812, -849234.377571]
        })
    });
var lyr_LANDUSE_SITUBONDO_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LANDUSE_SITUBONDO<br />\
    <img src="styles/legend/LANDUSE_SITUBONDO_7_0.png" /> 10<br />\
    <img src="styles/legend/LANDUSE_SITUBONDO_7_1.png" /> 95<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LANDUSE_SITUBONDO_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12642832.868119, -892686.230959, 12742435.982506, -849016.055328]
        })
    });
var lyr_ScoringDEMREVISI2_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ScoringDEMREVISI2<br />\
    <img src="styles/legend/ScoringDEMREVISI2_8_0.png" /> 2<br />\
    <img src="styles/legend/ScoringDEMREVISI2_8_1.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ScoringDEMREVISI2_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12643058.792256, -891996.631710, 12742513.221812, -849234.377571]
        })
    });
var format_Biomass_9 = new ol.format.GeoJSON();
var features_Biomass_9 = format_Biomass_9.readFeatures(json_Biomass_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Biomass_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Biomass_9.addFeatures(features_Biomass_9);
var lyr_Biomass_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Biomass_9, 
                style: style_Biomass_9,
                popuplayertitle: 'Biomass',
                interactive: true,
    title: 'Biomass<br />\
    <img src="styles/legend/Biomass_9_0.png" /> Formasi Hutan<br />\
    <img src="styles/legend/Biomass_9_1.png" /> Mangrove<br />\
    <img src="styles/legend/Biomass_9_2.png" /> Tumbuhan Non-Hutan Lainnya<br />\
    <img src="styles/legend/Biomass_9_3.png" /> Sawah<br />\
    <img src="styles/legend/Biomass_9_4.png" /> Pertanian Lainnya<br />\
    <img src="styles/legend/Biomass_9_5.png" /> Lubang Tambang<br />\
    <img src="styles/legend/Biomass_9_6.png" /> Non-Vegetasi Lainnya<br />\
    <img src="styles/legend/Biomass_9_7.png" /> Tambak<br />\
    <img src="styles/legend/Biomass_9_8.png" /> Sungai, Danau, Laut<br />' });
var format_KerentananBanjir_10 = new ol.format.GeoJSON();
var features_KerentananBanjir_10 = format_KerentananBanjir_10.readFeatures(json_KerentananBanjir_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KerentananBanjir_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KerentananBanjir_10.addFeatures(features_KerentananBanjir_10);
var lyr_KerentananBanjir_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KerentananBanjir_10, 
                style: style_KerentananBanjir_10,
                popuplayertitle: 'KerentananBanjir',
                interactive: true,
    title: 'KerentananBanjir<br />\
    <img src="styles/legend/KerentananBanjir_10_0.png" /> Rendah<br />\
    <img src="styles/legend/KerentananBanjir_10_1.png" /> Sedang<br />\
    <img src="styles/legend/KerentananBanjir_10_2.png" /> Tinggi<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_SOIL_SITUBONDO_1.setVisible(true);lyr_SLOPE_SITUBONDO_2.setVisible(true);lyr_Rainfall_situbondo_3.setVisible(true);lyr_ScoringSoil_4.setVisible(true);lyr_ScoringSlopeFIX_5.setVisible(true);lyr_ScoringRainfallFIX_6.setVisible(true);lyr_LANDUSE_SITUBONDO_7.setVisible(true);lyr_ScoringDEMREVISI2_8.setVisible(true);lyr_Biomass_9.setVisible(true);lyr_KerentananBanjir_10.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_SOIL_SITUBONDO_1,lyr_SLOPE_SITUBONDO_2,lyr_Rainfall_situbondo_3,lyr_ScoringSoil_4,lyr_ScoringSlopeFIX_5,lyr_ScoringRainfallFIX_6,lyr_LANDUSE_SITUBONDO_7,lyr_ScoringDEMREVISI2_8,lyr_Biomass_9,lyr_KerentananBanjir_10];
lyr_Biomass_9.set('fieldAliases', {'fid': 'fid', 'gridcode': 'gridcode', 'class_id': 'class_id', 'class_en': 'class_en', 'class_id_b': 'class_id_b', 'lv1_en': 'lv1_en', 'lv1_id': 'lv1_id', 'hex_color': 'hex_color', });
lyr_KerentananBanjir_10.set('fieldAliases', {'DN': 'DN', 'kategori': 'kategori', });
lyr_Biomass_9.set('fieldImages', {'fid': 'Range', 'gridcode': 'Range', 'class_id': 'Range', 'class_en': 'TextEdit', 'class_id_b': 'TextEdit', 'lv1_en': 'TextEdit', 'lv1_id': 'TextEdit', 'hex_color': 'TextEdit', });
lyr_KerentananBanjir_10.set('fieldImages', {'DN': 'Range', 'kategori': 'TextEdit', });
lyr_Biomass_9.set('fieldLabels', {'fid': 'no label', 'gridcode': 'no label', 'class_id': 'no label', 'class_en': 'no label', 'class_id_b': 'inline label - always visible', 'lv1_en': 'no label', 'lv1_id': 'no label', 'hex_color': 'no label', });
lyr_KerentananBanjir_10.set('fieldLabels', {'DN': 'no label', 'kategori': 'inline label - visible with data', });
lyr_KerentananBanjir_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});