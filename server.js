const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

// Configurar el middleware cors
app.use(cors());
app.use(bodyParser.json()); // Middleware para parsear JSON
app.use(bodyParser.urlencoded({ extended: true })); // Middleware para parsear datos urlencoded


// URL de conexión a MongoDB

const uri = 'mongodb://127.0.0.1:27017/';

// Nombre de la base de datos
const dbName = 'inventarioDB';

let db;
let productosCollection;
let sesionesCollection;
let usuariosCollection;
let almacenamientoCollection;
let servidoresCollection;
let telecomunicacionesCollection;

// Conectar a MongoDB y configurar la colección
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('Conectado a la base de datos MongoDB');
    db = client.db(dbName);
    productosCollection = db.collection('productos');
    almacenamientoCollection = db.collection('almacenamiento');
    usuariosCollection = db.collection('usuarios');
    telecomunicacionesCollection = db.collection('telecomunicaciones');
    servidoresCollection = db.collection('servidores');
    sesionesCollection = db.collection('sesiones');
  })
  .catch(error => console.error(error));

app.get('/productos', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  try {
    const productos = await productosCollection.find().toArray();
    res.json(productos);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/productosReduced', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  try {
    const productos = await productosCollection.find().toArray();
    res.json(productos);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/almacenamiento', async (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  try {
    const almacenamiento = await almacenamientoCollection.find().toArray();
    res.json(almacenamiento);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/servidores', async (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  try {
    const servidores = await servidoresCollection.find().toArray();
    res.json(servidores);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/telecomunicaciones', async (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  try {
    const telecomunicaciones = await telecomunicacionesCollection.find().toArray();
    res.json(telecomunicaciones);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/altaProducto', (req, res) => {

  const { tipo, noParte, desc, componente, sede, ubicacion, min_stock, cantidad, max_stock, reorden, proveedor, sendor, pn_vendor, sn_vendor, sn_emc, capacidad } = req.body;

  const nuevoRegistro = {
    tipo: tipo,
    noParte: noParte,
    desc: desc,
    componente: componente,
    sede: sede,
    ubicacion: ubicacion,
    min_stock: min_stock,
    cantidad: cantidad,
    max_stock: max_stock,
    reorden: reorden,
    proveedor: proveedor,
    sendor: sendor,
    pn_vendor: pn_vendor,
    sn_vendor: sn_vendor,
    sn_emc: sn_emc,
    capacidad: capacidad
  }

  try {
    const result = productosCollection.insertOne(nuevoRegistro);
    console.log("Result:", result)
    res.status(201).send('Registro creado exitosamente');
  } catch (error) {
    res.status(400).send(error);
  }

})

app.post('/altaUsuario', (req, res) => {

  const { usuario, nombre, correo, gobierno, password, perfil, telefono } = req.body;

  const nuevoRegistro = {
    usuario: usuario,
    nombre: nombre,
    correo: correo,
    gobierno: gobierno,
    password: password,
    perfil: perfil,
    telefono: telefono
  }

  try {
    const result = usuariosCollection.insertOne(nuevoRegistro);
    console.log("Result:", result)
    res.status(201).send('Registro creado exitosamente');
  } catch (error) {
    res.status(400).send(error);
  }

})

app.get('/producto/:id', async (req, res) => {

  console.log(req.params.id)
  try {
    const id = req.params.id;
    const item = await productosCollection.findOne({ _id: new ObjectId(id) });
    console.log("item", item)
    if (!item) {

      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }


}
);

app.get('/usuario/:id', async (req, res) => {

  try {
    const id = req.params.id;
    const item = await usuariosCollection.findOne({ _id: new ObjectId(id) });
    console.log("item", item)
    if (!item) {

      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }


}
);

app.post('/login', async (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  const { usuario, password, confirmNewSession, userId } = req.body;

  console.log("usuario", usuario)
  console.log("password", password)
  console.log("confirmNewSession", confirmNewSession)
  let result;

  try {
    // const usuario = req.params.usuario;
    const item = await usuariosCollection.findOne({ usuario });
    console.log("item", item)
    let mensaje;

    if (item != null) {

      console.log("IF")
      if (item.password === password) {

        if (confirmNewSession === true) {

          try {

            // Eliminar el documento basado en el sessionId
            const result = await sesionesCollection.deleteOne({ _id: new ObjectId(userId) });

          } catch (error) {
            res.status(500).json({ message: 'Server error.', error: error.message });
          }

        } else {

          try {

            const usuarioSesionBD = await sesionesCollection.findOne({ usuario: item.usuario });
            console.log("Usuario con Sesion Activa:", confirmNewSession)
            console.log("Usuario con Sesion usuarioSesionBD:", usuarioSesionBD)


            //Se ejecuta si hay una sesión activa
            if (usuarioSesionBD != null) {
              console.log("Entró if")

              mensaje = "El usuario ya se encuentra loggeado,¿Desea iniciar sesión en esta ventana?";
              return res.status(200).json({ message: mensaje, usuarioSesion: usuarioSesionBD });

            }
          } catch (error) {
            console.log("Error sesion activa")
          }
        }
        console.log("el usuario ha sido logueado")
        mensaje = "El usuario ha sido logueado"

        const nuevaSesion = {
          usuario: item.usuario
        }

        try {
          result = await sesionesCollection.insertOne(nuevaSesion);
          console.log("Result:", result)
        } catch (error) {
          res.status(400).send(error);
        }


      } else {
        mensaje = "El usuario y/o contraseña son incorrectos"
      }
      // res.json(item);

      return res.status(200).json({ message: mensaje, usuarioSesion: result, perfil: item.perfil });

    } else {
      return res.status(404).json({ message: 'El usuario no existe' });

    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }


}
);

app.get('/usuarios', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  try {
    const usuarios = await usuariosCollection.find().toArray();
    res.json(usuarios);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


// Ruta para actualizar un producto por ID
app.put('/updateProduct/:id', async (req, res) => {
  const { id } = req.params;
  const { cantidad, minStock, maxStock, reorden } = req.body; // otros campos

  console.log("id", id)
  console.log("req.body ", req.body)
  console.log("cantidad", cantidad)

  if (!ObjectId.isValid(id)) {
    return res.status(400).send('ID inválido');
  }

  try {
    const result = await productosCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { cantidad, minStock, maxStock, reorden } }, // otros campos
      { returnOriginal: false }
    );

    console.log("result", result)
    if (!result) {
      return res.status(404).send('Producto no encontrado');
    }

    res.status(200).json("El producto se actualizó correctamente");
  } catch (error) {
    res.status(500).json({ error: 'Error actualizando el producto' });
  }
});

// Ruta para actualizar un usuario por ID
app.put('/updateUsuario/:id', async (req, res) => {
  const { id } = req.params;
  const { telefono, correo, perfil, gobierno, password } = req.body; // otros campos

  console.log("id", id)
  console.log("req.body ", req.body)

  if (!ObjectId.isValid(id)) {
    return res.status(400).send('ID inválido');
  }

  try {
    const result = await usuariosCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { telefono, correo, perfil, gobierno, password } }, // otros campos
      { returnOriginal: false }
    );

    console.log("result", result)
    if (!result) {
      return res.status(404).send('Producto no encontrado');
    }

    res.status(200).json("El producto se actualizó correctamente");
  } catch (error) {
    res.status(500).json({ error: 'Error actualizando el producto' });
  }
});

app.post('/logoutUser/:sesionId', async (req, res) => {
  const sesionId = req.params.sesionId;

  console.log("Sesion Id", sesionId)
  try {

    // Eliminar el documento basado en el sessionId
    const result = await sesionesCollection.deleteOne({ _id: new ObjectId(sesionId) });

    // Verificar si algún documento fue eliminado
    return result.deletedCount > 0;

  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
});

// Ruta a tus archivos de certificado
const sslOptions = {
  key: fs.readFileSync(path.join(__dirname, 'sari2p1.atalait.com.mx/private.key')),
  cert: fs.readFileSync(path.join(__dirname, 'sari2p1.atalait.com.mx/certificate.crt')),
  ca: fs.readFileSync(path.join(__dirname, 'sari2p1.atalait.com.mx/ca_bundle.crt')),
  secureOptions: require('constants').SSL_OP_NO_TLSv1 | require('constants').SSL_OP_NO_TLSv1_1
  // si tienes un archivo de cadena de certificados
};

// Middleware y rutas de tu aplicación
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Crear servidor HTTPS
https.createServer(sslOptions, app).listen(443, () => {
  console.log('Servidor HTTPS corriendo en el puerto 443');
});