const pool = require("./conexion");

const getCuenta= async (req, res) => {
  try {
      const email = req.params.email;
      const contrasena = req.params.contrasena;
    const response = await pool.query(
      `SELECT * FROM cuenta natural join  funcionario where funcionario.email = ${email} and cuenta.contraseña = ${contrasena}`
    );
    res.send(response.rows);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getCuenta,
  
};
