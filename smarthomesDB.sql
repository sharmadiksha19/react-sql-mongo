CREATE DATABASE smarthomesDB;
USE smarthomesDB;
Show tables;
CREATE TABLE user(
 userName VARCHAR(40) NOT NULL,
 password VARCHAR(40) NOT NULL,
 repassword VARCHAR(40) NOT NULL,
 usertype VARCHAR(40) NOT NULL,
 PRIMARY KEY(userName)
);

Select * from productdetails;

CREATE TABLE ProductDetails(
productType VARCHAR(40) NOT NULL,
Id VARCHAR(40) NOT NULL,
productName VARCHAR(255) NOT NULL,
productPrice DOUBLE NOT NULL,
productImage VARCHAR(40) NOT NULL,
productManufacturer VARCHAR(40) NOT NULL,
productCondition VARCHAR(40) NOT NULL,
productDiscount DOUBLE NOT NULL,
inventory INTEGER NOT NULL,
PRIMARY KEY(Id)
);

CREATE TABLE Bestseller(
productType VARCHAR(40) NOT NULL,
Id VARCHAR(40) NOT NULL,
productName VARCHAR(255) NOT NULL,
productPrice DOUBLE NOT NULL,
productImage VARCHAR(40) NOT NULL,
productManufacturer VARCHAR(40) NOT NULL,
productCondition VARCHAR(40) NOT NULL,
productDiscount DOUBLE NOT NULL,
inventory INTEGER NOT NULL,
PRIMARY KEY(Id)
);

INSERT INTO productdetails 
(ProductType,Id,productName,productPrice,productImage,
productManufacturer,productCondition,productDiscount,inventory)
VALUES
("bell", "AnkerEufy", "Anker Wireless", 450.99, "B1.jpg", "eufy", "new",10,1),
("bell", "Arlo", "Arlo Essentials WIFI", 299.99, "B2.jpg", "Arlo", "new",15,2),
("bell", "Blink", "Blink Smart Wifi", 249.99, "B3.jpg", "Blink", "new",20,3),
("bell", "AnkerEufy1", "Anker Wireless", 450.99, "B1.jpg", "eufy", "new",10,4),
("bell", "Arlo1", "Arlo Essentials WIFI", 299.99, "B2.jpg", "Arlo", "new",15,5),
("bell", "Blink1", "Blink Smart Wifi", 249.99, "B3.jpg", "Blink", "new",20,6),
("bell", "AnkerEufy2", "Anker Wireless", 450.99, "B1.jpg", "eufy", "new",10,7),
("bell", "Arlo2", "Arlo Essentials WIFI", 299.99, "B2.jpg", "Arlo", "new",15,8),
("bell", "Blink2", "Blink Smart Wifi", 249.99, "B3.jpg", "Blink", "used",20,9),
("bell", "Blink3", "Blink Smart Wifi", 249.99, "B3.jpg", "Blink", "used",20,10),

("lock", "eufy", "eufy Security Smart Lock C210", 99.99, "L1.jpg", "eufy", "new",10,1),
("lock", "Kwisket", "Kwisket Halo Keypad",599.99, "L2.jpg", "Kwisket", "new",0,2),
("lock", "LockStar", "Lock Star", 379.9, "L3.jpg", "LockStar", "new",20,3),
("lock", "eufy1", "eufy Security Smart Lock C210", 99.99, "L1.jpg", "eufy", "new",10,4),
("lock", "Kwisket1", "Kwisket Halo Keypad",599.99, "L2.jpg", "Kwisket", "new",0,5),
("lock", "LockStar1", "Lock Star", 379.9, "L3.jpg", "LockStar", "new",20,6),
("lock", "eufy2", "eufy Security Smart Lock C210", 99.99, "L1.jpg", "eufy", "new",10,7),
("lock", "Kwisket2", "Kwisket Halo Keypad",599.99, "L2.jpg", "Kwisket", "new",0,8),
("lock", "LockStar2", "Lock Star", 379.9, "L3.jpg", "LockStar", "used",20,9),
("lock", "LockStar3", "Lock Star", 379.9, "L3.jpg", "LockStar", "used",20,10),

("speaker", "Apple", "Apple HomePod(2nd Gen)", 89.9, "S1.jpg", "Apple", "new",10,1),
("speaker", "Echo", "Echo (4th Gen)", 429.9, "S2.jpg", "Echo", "new",11,2),
("speaker", "Google", "Google Nest Audio", 123.9, "S3.jpg", "Google", "new",12,3),
("speaker", "Apple1", "Apple HomePod(2nd Gen)", 89.9, "S1.jpg", "Apple", "new",10,4),
("speaker", "Echo1", "Echo (4th Gen)", 429.9, "S2.jpg", "Echo", "new",11,5),
("speaker", "Google1", "Google Nest Audio", 123.9, "S3.jpg", "Google", "new",12,6),
("speaker", "Apple2", "Apple HomePod(2nd Gen)", 89.9, "S1.jpg", "Apple", "new",10,7),
("speaker", "Echo2", "Echo (4th Gen)", 429.9, "S2.jpg", "Echo", "new",11,8),
("speaker", "Google2", "Google Nest Audio", 123.9, "S3.jpg", "Google", "used",12,9),
("speaker", "Google3", "Google Nest Audio", 123.9, "S3.jpg", "Google", "used",12,10),

("light", "Govee", "Govee DreamView G1s", 1299.9, "iL1.jpg", "Govee", "new",12,1),
("light", "Lifx", "Lifx LightStrip 120", 129.9, "iL1.jpg", "Lifx", "new",10,2),
("light", "NanoLeaf", "NanoLeaf Lines 60", 129.9, "iL1.jpg", "NanoLeaf", "new",16,3),
("light", "Govee1", "Govee DreamView G1s", 1299.9, "iL1.jpg", "Govee", "new",12,4),
("light", "Lifx1", "Lifx LightStrip 120", 129.9, "iL1.jpg", "Lifx", "new",10,5),
("light", "NanoLeaf1", "NanoLeaf Lines 60", 129.9, "iL1.jpg", "NanoLeaf", "new",16,6),
("light", "Govee2", "Govee DreamView G1s", 1299.9, "iL1.jpg", "Govee", "new",12,7),
("light", "Lifx2", "Lifx LightStrip 120", 129.9, "iL1.jpg", "Lifx", "new",10,8),
("light", "NanoLeaf2", "NanoLeaf Lines 60", 129.9, "iL1.jpg", "NanoLeaf", "used",16,9),
("light", "NanoLeaf3", "NanoLeaf Lines 60", 129.9, "iL1.jpg", "NanoLeaf", "used",16,10),

("thermostat", "Amazon", "Amazon Smart with Alexa", 1029.9, "T1.jpg", "Amazon", "new",20,1),
("thermostat", "ecobee", "ecobee Premium Smart", 579.9, "T2.jpg", "ecobee", "new",13,2),
("thermostat", "Emerson", "Emerson Sensi Lite", 189.9, "T3.jpg", "Emerson", "new",12,3),
("thermostat", "Amazon1", "Amazon Smart with Alexa", 1029.9, "T1.jpg", "Amazon", "new",20,4),
("thermostat", "ecobee1", "ecobee Premium Smart", 579.9, "T2.jpg", "ecobee", "new",13,5),
("thermostat", "Emerson1", "Emerson Sensi Lite", 189.9, "T3.jpg", "Emerson", "new",12,6),
("thermostat", "Amazon2", "Amazon Smart with Alexa", 1029.9, "T1.jpg", "Amazon", "new",20,7),
("thermostat", "ecobee2", "ecobee Premium Smart", 579.9, "T2.jpg", "ecobee", "new",13,8),
("thermostat", "Emerson2", "Emerson Sensi Lite", 189.9, "T3.jpg", "Emerson", "used",12,9),
("thermostat", "Emerson3", "Emerson Sensi Lite", 189.9, "T3.jpg", "Emerson", "used",12,10);
SELECT * FROM productdetails;

INSERT INTO Bestseller 
(ProductType,Id,productName,productPrice,productImage,
productManufacturer,productCondition,productDiscount,inventory)
VALUES
("bell", "AnkerEufy", "Anker Wireless", 450.99, "B1.jpg", "eufy", "new",10,1),
("lock", "eufy", "eufy Security Smart Lock C210", 99.99, "L1.jpg", "eufy", "new",10,1),
("speaker", "Apple", "Apple HomePod(2nd Gen)", 89.9, "S1.jpg", "Apple", "new",10,1),
("light", "Govee", "Govee DreamView G1s", 1299.9, "iL1.jpg", "Govee", "new",12,1),
("thermostat", "Amazon", "Amazon Smart with Alexa", 1029.9, "T1.jpg", "Amazon", "new",20,1);

SELECT * FROM Bestseller;

CREATE TABLE orders(
orderId INTEGER NOT NULL,
userName VARCHAR(40) NOT NULL,
orderName VARCHAR(40) NOT NULL,
orderPrice DOUBLE,
userAddress VARCHAR(40) NOT NULL,
creditCardNo VARCHAR(40) NOT NULL,
purchaseDate DATE NOT NULL,
shipDate Date NOT NULL,
quantity INTEGER NOT NULL,
shippingCost DOUBLE NOT NULL,
discount double NOT NULL,
saleAmount INTEGER NOT NULL,
PRIMARY KEY(OrderId,userName)
);
SELECT * FROM orders;

CREATE TABLE StoreLocations(
storeId VARCHAR(40) NOT NULL,
storestreet VARCHAR(40) NOT NULL,
storezip VARCHAR(40) NOT NULL,
storecity VARCHAR(40) NOT NULL,
storestate VARCHAR(40) NOT NULL,
PRIMARY KEY(storeId)
);
INSERT INTO StoreLocations (storeId,storestreet,storezip,storecity,storestate)
VALUES (1, "new", "10001", "loc1", "state1"),
(2, "new1", "10002", "loc1", "state1"),
(3, "ne2", "10003", "loc1", "state1"),
(4, "ne3", "10004", "loc1", "state1"),
(5, "new4", "10005", "loc1", "state1"),
(6, "new5", "10006", "loc1", "state1"),
(7, "new6", "10007", "loc1", "state1"),
(8, "new7", "10008", "loc1", "state1"),
(9, "new8", "10009", "loc1", "state1"),
(10, "new9", "10011", "loc1", "state1"),
(11, "new11", "10021", "loc1", "state1"),
(12, "new12", "10031", "loc1", "state1"),
(13, "new13", "10041", "loc1", "state1"),
(14, "new14", "10051", "loc1", "state1"),
(15, "new15", "10061", "loc1", "state1"),
(16, "new3", "10071", "loc1", "state1"),
(17, "new4", "10081", "loc1", "state1"),
(18, "new7", "10091", "loc1", "state1"),
(19, "new2", "10111", "loc1", "state1"),
(20, "new9", "11111", "loc2", "state2");
SELECT * FROM StoreLocations;
