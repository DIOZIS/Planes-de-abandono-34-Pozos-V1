var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Vias_2 = new ol.format.GeoJSON();
var features_Vias_2 = format_Vias_2.readFeatures(json_Vias_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vias_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vias_2.addFeatures(features_Vias_2);
var lyr_Vias_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vias_2, 
                style: style_Vias_2,
                popuplayertitle: 'Vias',
                interactive: true,
    title: 'Vias<br />\
    <img src="styles/legend/Vias_2_0.png" /> Acceso<br />\
    <img src="styles/legend/Vias_2_1.png" /> Carretera<br />\
    <img src="styles/legend/Vias_2_2.png" /> Vía<br />' });
var format_Plataforma_3 = new ol.format.GeoJSON();
var features_Plataforma_3 = format_Plataforma_3.readFeatures(json_Plataforma_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plataforma_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plataforma_3.addFeatures(features_Plataforma_3);
var lyr_Plataforma_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plataforma_3, 
                style: style_Plataforma_3,
                popuplayertitle: 'Plataforma',
                interactive: false,
                title: '<img src="styles/legend/Plataforma_3.png" /> Plataforma'
            });
var format_Gasoducto_4 = new ol.format.GeoJSON();
var features_Gasoducto_4 = format_Gasoducto_4.readFeatures(json_Gasoducto_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gasoducto_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gasoducto_4.addFeatures(features_Gasoducto_4);
var lyr_Gasoducto_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gasoducto_4, 
                style: style_Gasoducto_4,
                popuplayertitle: 'Gasoducto',
                interactive: true,
                title: '<img src="styles/legend/Gasoducto_4.png" /> Gasoducto'
            });
var format_Pozos_5 = new ol.format.GeoJSON();
var features_Pozos_5 = format_Pozos_5.readFeatures(json_Pozos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pozos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pozos_5.addFeatures(features_Pozos_5);
var lyr_Pozos_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pozos_5, 
                style: style_Pozos_5,
                popuplayertitle: 'Pozos',
                interactive: true,
                title: '<img src="styles/legend/Pozos_5.png" /> Pozos'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_Vias_2.setVisible(true);lyr_Plataforma_3.setVisible(true);lyr_Gasoducto_4.setVisible(true);lyr_Pozos_5.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleRoad_1,lyr_Vias_2,lyr_Plataforma_3,lyr_Gasoducto_4,lyr_Pozos_5];
lyr_Vias_2.set('fieldAliases', {'name': 'name', 'Jerarquia': 'Jerarquia', });
lyr_Plataforma_3.set('fieldAliases', {'FID': 'FID', });
lyr_Gasoducto_4.set('fieldAliases', {'SubClasses': 'SubClasses', });
lyr_Pozos_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Lote': 'Lote', 'X': 'X', 'Y': 'Y', });
lyr_Vias_2.set('fieldImages', {'name': 'TextEdit', 'Jerarquia': 'TextEdit', });
lyr_Plataforma_3.set('fieldImages', {'FID': 'TextEdit', });
lyr_Gasoducto_4.set('fieldImages', {'SubClasses': 'TextEdit', });
lyr_Pozos_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Lote': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Vias_2.set('fieldLabels', {'name': 'no label', 'Jerarquia': 'inline label - always visible', });
lyr_Plataforma_3.set('fieldLabels', {'FID': 'no label', });
lyr_Gasoducto_4.set('fieldLabels', {'SubClasses': 'no label', });
lyr_Pozos_5.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'Lote': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', });
lyr_Pozos_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});