ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.611409, 37.201122],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.611409, 37.201122]
            },
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        });
        
    myMap.geoObjects
        .add(new ymaps.Placemark([55.611409, 37.201122], {
            iconCaption: 'Ремонт квартир',
            balloonContent: 'Россия, Москва, посёлок Толстопальцево, улица Ленина, 10'
        }, {
            preset: 'islands#blueRepairShopIcon',
            iconColor: '#FF8C00'
        }));
        
}