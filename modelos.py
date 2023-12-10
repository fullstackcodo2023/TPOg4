from app import app, db

class Persona(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50))
    password = db.Column(db.String(50))

# 8. Crear la tabla al ejecutarse la app

class Producto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50))
    titulo=db.Column(db.String(50))
    receta=db.Column(db.String(2500))
    notas=db.Column(db.String(500))
    imagen=db.Column(db.String(400))

    def __init__(self,nombre,titulo,receta,notas,imagen):   #crea el  constructor de la clase
        self.nombre=nombre
        self.titulo=titulo
        self.receta=receta
        self.notas=notas
        self.imagen=imagen


with app.app_context():
    db.create_all()