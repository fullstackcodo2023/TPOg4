"""La línea de comando:
pip install Flask SQLAlchemy mysql-connector-python 

se utiliza para instalar
tres paquetes en tu entorno de Python. 
Aquí está una breve descripción de cada uno de ellos:

Flask: Flask es un framework ligero de desarrollo
web para Python. Facilita la creación de aplicaciones
web de manera rápida y sencilla. Con Flask, puedes
definir rutas, gestionar solicitudes HTTP, y construir
aplicaciones web de manera eficiente.

SQLAlchemy: SQLAlchemy es una biblioteca de
SQL en Python que proporciona un conjunto
de herramientas de alto nivel para interactuar
con bases de datos relacionales. Facilita la
creación, el acceso y la manipulación de bases
de datos utilizando objetos Python en lugar de escribir directamente SQL.

mysql-connector-python: Este paquete es un conector oficial
de MySQL para Python. Permite a tu aplicación Python conectarse y 
comunicarse con una base de datos MySQL. En el contexto de Flask
y SQLAlchemy, se utiliza para establecer la conexión entre tu 
aplicación y la base de datos MySQL ."""

# 3. Importar las herramientas
# Acceder a las herramientas para crear la app web
from flask import Flask, request, jsonify

# Para manipular la DB
from flask_sqlalchemy import SQLAlchemy 

# Módulo cors es para que me permita acceder desde el frontend al backend
from flask_cors import CORS

from flask_marshmallow import Marshmallow

# 4. Crear la app
app = Flask(__name__)

CORS(app)


# 5. Configurar a la app la DB
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://usuario:contraseña@localhost:3306/nombre_de_la_base_de_datos'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:0011@localhost:3306/db_23529'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# 6. Crear un objeto db, para informar a la app que se trabajará con sqlalchemy
db = SQLAlchemy(app)
ma = Marshmallow(app)


from controladores import *
# 7. Definir la tabla 


# Crear ruta de acceso
# / es la ruta de inicio


if __name__ == "__main__":
    app.run(debug=True)

