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

# 4. Crear la app
app = Flask(__name__)

CORS(app)


# 5. Configurar a la app la DB
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://usuario:contraseña@localhost:3306/nombre_de_la_base_de_datos'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:0011@localhost:3306/db_23529'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# 6. Crear un objeto db, para informar a la app que se trabajará con sqlalchemy
db = SQLAlchemy(app)

# 7. Definir la tabla 
class Persona(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50))
    password = db.Column(db.String(50))

# 8. Crear la tabla al ejecutarse la app
with app.app_context():
    db.create_all()

# Crear ruta de acceso
# / es la ruta de inicio
@app.route("/")
def index():
    return f'App Web para registrar nombres de personas'

# Ruta para insertar un registro en la DB
@app.route("/registro", methods=['POST'])
def registro():
    # {
    #   "nombre": "Fernando"
    # }
    #    <input type="text" name="nombre" id="nombre">
    
    nombre_recibido = request.json["nombre"]
    password_recibido = request.json["password"]

    nuevo_registro = Persona(nombre=nombre_recibido, password=password_recibido)
    db.session.add(nuevo_registro)
    db.session.commit()

    return "Solicitud vía post recibida."
    

# Retornar en un Json todos los registros de la tabla persona. 
@app.route("/personas",  methods=['GET'])
def personas():
    all_personas = Persona.query.all()
    # all_personas lista de objetos

    # Transformar all_personas (lista de objetos) a una lista de diccionarios
    data_serializada = []
    for registro in all_personas:
        data_serializada.append({"id":registro.id, "nombre":registro.nombre, "password":registro.password})

    return jsonify(data_serializada)

# Retornar en un Json todos los registros de la tabla persona. 
# @app.route("/usuario")
# def usuario():

#     usuario_recibido = request.json["nombre"]
#     password_recibido = request.json["password"]

#     usuario_tabla = Persona.query.get('nombre')
#     # password_tabla = Persona.query.get('password')
#     # all_personas lista de objetos

#     # Transformar all_personas (lista de objetos) a una lista de diccionarios
#     # data_serializada=[{"id":usuario_tabla.id, "nombre":usuario_tabla.nombre, "password":usuario_tabla.password}]

#     if usuario_recibido in usuario_tabla and usuario_tabla[usuario_recibido] == password_recibido:
#         return jsonify({"autenticado": True})
#     else:
#         return jsonify({"autenticado": False})




    # return jsonify(data_serializada)


# # Modificar un registro
# @app.route('/update/<id>', methods=['PUT'])
# def update(id):
#     # Buscar a quién modificar, por id
#     update_persona = Persona.query.get(id)
#     # one_persona -> objeto

#     # Recibir los nuevos datos
#     nombre = request.json["nombre"]

#     update_persona.nombre = nombre
#     db.session.commit() 

#     # Transformando update_persona (lista de objeto) a lista de diccionario
#     data_serializada = [{"id":update_persona.id, "nombre": update_persona.nombre}]

#     return jsonify(data_serializada)

    
# Eliminar un registro
@app.route('/borrar/<id>', methods=['DELETE'])
def borrar(id):
    # Buscar a quién modificar, por id
    delete_persona = Persona.query.get(id)
    # delete_persona -> objeto

    db.session.delete(delete_persona)
    db.session.commit()

    data_serializada = [{"id":delete_persona.id, "nombre": delete_persona.nombre,"password": delete_persona.password}]

    return jsonify(data_serializada)


if __name__ == "__main__":
    app.run(debug=True)

