let rectangle_list;

function initRectangleList() {
    rectangle_list = {
        "Alabama": new Rectangle(mapWidth/1.54, mapHeight/1.56, 2, 7, "Alabama", 0),
        "Alaska": new Rectangle(mapWidth/7.2, mapHeight/1.18, 1, 1, "Alaska", mapWidth/170),
        "Arizona": new Rectangle(mapWidth/4.23, mapHeight/1.65, 3, 9, "Arizona", 0),
        "Arkansas": new Rectangle(mapWidth/1.791, mapHeight/1.66, 2, 4, "Arkansas", 0),
        "California": new Rectangle(mapWidth/17, mapHeight/2.3, 3, 52, "California", mapWidth/170),
        "Colorado": new Rectangle(mapWidth/3, mapHeight/2.085, 4, 8, "Colorado", 0),
        "Connecticut": new Rectangle(mapWidth/1.14, mapHeight/2.48, 3, 5, "Connecticut", 0),
        "Delaware": new Rectangle(mapWidth/1.19, mapHeight/2.05, 1, 1, "Delaware", 0),
        "Nevada": new Rectangle(mapWidth/6.4, mapHeight/2.16, 2, 4, "Nevada", 0)
    };
}