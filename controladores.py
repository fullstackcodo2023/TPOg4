from flask import Flask, request, jsonify
from app import app,ma
from modelos import *


class PersonaSchema(ma.Schema):
    class Meta:
        fields = ("id", "nombre", "password")

@app.route("/")
def index():
    return f'App Web para registrar nombres de personas'

# Ruta para insertar un registro en la DB
@app.route("/registro_usuario", methods=['POST'])
def registro_usuario():
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
@app.route("/usuarios",  methods=['GET'])
def usuarios():
    all_personas = Persona.query.all()
    # all_personas lista de objetos

    # Transformar all_personas (lista de objetos) a una lista de diccionarios
    data_serializada = []
    for registro in all_personas:
        data_serializada.append({"id":registro.id, "nombre":registro.nombre, "password":registro.password})

    return jsonify(data_serializada)

  
# Eliminar un registro
@app.route('/borrar_usuario/<id>', methods=['DELETE'])
def borrar_usuario(id):
    # Buscar a quién modificar, por id
    delete_persona = Persona.query.get(id)
    # delete_persona -> objeto

    db.session.delete(delete_persona)
    db.session.commit()

    data_serializada = [{"id":delete_persona.id, "nombre": delete_persona.nombre,"password": delete_persona.password}]

    return jsonify(data_serializada)

@app.route("/registro", methods=['POST']) 
def registro():
    # {"nombre": "Felipe", ...} -> input tiene el atributo name="nombre"
    nombre_recibido = request.json["nombre"]
    titulo=request.json["titulo"]
    receta=request.json["receta"]
    notas=request.json["notas"]
    imagen=request.json["imagen"]

    nuevo_registro = Producto(nombre=nombre_recibido,titulo=titulo,receta=receta,notas=notas,imagen=imagen)
    db.session.add(nuevo_registro)
    db.session.commit()

    return "Solicitud de post recibida"
    

# Retornar todos los registros en un Json
@app.route("/productos",  methods=['GET'])
def productos():
    # Consultar en la tabla todos los registros
    # all_registros -> lista de objetos
    all_registros = Producto.query.all()

    # Lista de diccionarios
    data_serializada = []
    
    for objeto in all_registros:
        data_serializada.append({"id":objeto.id, "nombre":objeto.nombre, "titulo":objeto.titulo, "receta":objeto.receta, "notas":objeto.notas, "imagen":objeto.imagen})

    return jsonify(data_serializada)


# Modificar un registro
@app.route('/update/<id>', methods=['PUT'])
def update(id):
    # Buscar el registro a modificar en la tabla por su id
    producto = Producto.query.get(id)

    # {"nombre": "Felipe"} -> input tiene el atributo name="nombre"
    nombre = request.json["nombre"]
    titulo=request.json["titulo"]
    receta=request.json["receta"]
    notas=request.json["notas"]
    imagen=request.json["imagen"]

    producto.nombre=nombre
    producto.titulo=titulo
    producto.receta=receta
    producto.notas=notas
    producto.imagen=imagen
    db.session.commit()

    data_serializada = [{"id":producto.id, "nombre":producto.nombre, "titulo":producto.titulo, "receta":producto.receta, "notas":producto.notas, "imagen":producto.imagen}]
    
    return jsonify(data_serializada)

   
@app.route('/borrar/<id>', methods=['DELETE'])
def borrar(id):
    
    # Se busca a la productos por id en la DB
    producto = Producto.query.get(id)

    # Se elimina de la DB
    db.session.delete(producto)
    db.session.commit()

    data_serializada = [{"id":producto.id, "nombre":producto.nombre, "titulo":producto.titulo, "receta":producto.receta, "notas":producto.notas, "imagen":producto.imagen}]

    return jsonify(data_serializada)