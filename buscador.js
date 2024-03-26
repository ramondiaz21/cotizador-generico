let productosSeleccionados = [];
let productos = [
  { id: 1, categoria: "Categoria 1", servicio: "Servicio 1", precio: 0, cantidad: 1 },
  { id: 2, categoria: "Categoria 1", servicio: "Servicio 2", precio: 0, cantidad: 1 },
  { id: 3, categoria: "Categoria 1", servicio: "Servicio 3", precio: 0, cantidad: 1 },
  { id: 4, categoria: "Categoria 1", servicio: "Servicio 4", precio: 0, cantidad: 1 },
  { id: 5, categoria: "Categoria 1", servicio: "Servicio 5", precio: 0, cantidad: 1 },
  { id: 6, categoria: "Categoria 1", servicio: "Servicio 6", precio: 0, cantidad: 1 },
  { id: 7, categoria: "Categoria 1", servicio: "Servicio 7", precio: 0, cantidad: 1 },
  { id: 8, categoria: "Categoria 1", servicio: "Servicio 8", precio: 0, cantidad: 1 },
  { id: 9, categoria: "Categoria 1", servicio: "Servicio 9", precio: 0, cantidad: 1 },
  {
    id: 10,
    categoria: "Categoria 1",
    servicio: "Servicio 10",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 11,
    categoria: "Categoria 1",
    servicio: "Servicio 11",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 12,
    categoria: "Categoria 1",
    servicio: "Servicio 12",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 13,
    categoria: "Categoria 2",
    servicio: "Servicio 13",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 14,
    categoria: "Categoria 2",
    servicio: "Servicio 14",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 15,
    categoria: "Categoria 2",
    servicio: "Servicio 15",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 16,
    categoria: "Categoria 2",
    servicio: "Servicio 16",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 17,
    categoria: "Categoria 2",
    servicio: "Servicio 17",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 18,
    categoria: "Categoria 2",
    servicio: "Servicio 18",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 19,
    categoria: "Categoria 2",
    servicio: "Servicio 19",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 20,
    categoria: "Categoria 2",
    servicio: "Servicio 20",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 21,
    categoria: "Categoria 2",
    servicio: "Servicio 21",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 22,
    categoria: "Categoria 2",
    servicio: "Servicio 22",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 23,
    categoria: "Categoria 2",
    servicio: "Servicio 23",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 24,
    categoria: "Categoria 2",
    servicio: "Servicio 24",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 25,
    categoria: "Categoria 2",
    servicio: "Servicio 25",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 26,
    categoria: "Categoria 2",
    servicio: "Servicio 26",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 27,
    categoria: "Categoria 2",
    servicio: "Servicio 27",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 28,
    categoria: "Categoria 3",
    servicio: "Servicio 28",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 29,
    categoria: "Categoria 3",
    servicio: "Servicio 29",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 30,
    categoria: "Categoria 3",
    servicio: "Servicio 30",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 31,
    categoria: "Categoria 3",
    servicio: "Servicio 31",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 32,
    categoria: "Categoria 3",
    servicio: "Servicio 32",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 33,
    categoria: "Categoria 3",
    servicio: "Servicio 33",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 34,
    categoria: "Categoria 3",
    servicio: "Servicio 34",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 35,
    categoria: "Categoria 3",
    servicio: "Servicio 35",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 36,
    categoria: "Categoria 3",
    servicio: "Servicio 36",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 37,
    categoria: "Categoria 3",
    servicio: "Servicio 37",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 38,
    categoria: "Categoria 3",
    servicio: "Servicio 38",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 39,
    categoria: "Categoria 3",
    servicio: "Servicio 39",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 40,
    categoria: "Categoria 3",
    servicio: "Servicio 40",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 41,
    categoria: "Categoria 3",
    servicio: "Servicio 41",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 42,
    categoria: "Categoria 4",
    servicio: "Servicio 42",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 43,
    categoria: "Categoria 4",
    servicio: "Servicio 43",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 44,
    categoria: "Categoria 4",
    servicio: "Servicio 44",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 45,
    categoria: "Categoria 4",
    servicio: "Servicio 45",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 46,
    categoria: "Categoria 4",
    servicio: "Servicio 46",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 47,
    categoria: "Categoria 4",
    servicio: "Servicio 47",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 48,
    categoria: "Categoria 4",
    servicio: "Servicio 48",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 49,
    categoria: "Categoria 4",
    servicio: "Servicio 49",
    precio: 0,
    cantidad: 1,
  },
  {
    id: 50,
    categoria: "Categoria 4",
    servicio: "Servicio 50",
    precio: 0,
    cantidad: 1,
  },
];

$(document).on("input", ".precio-input", function () {
  let nuevoPrecio = $(this).val();
  let titulo = $(this).data("titulo");
  let indice = $(this).data("indice");
  actualizarPrecio(titulo, indice, nuevoPrecio);
});

$(document).on("change", ".check", function () {
  let nombreServicio = $(this).data("nombre");
  if ($(this).is(":checked")) {
    agregarProducto(nombreServicio);
  } else {
    quitarProducto(nombreServicio);
  }
});

function buscarProducto() {
  let nombreServicio = document
    .getElementById("nombreServicio")
    .value.toLowerCase();
  let resultadoDiv = document.getElementById("resultadoBusqueda");

  if (nombreServicio.trim() === "") {
    resultadoDiv.innerHTML = "";
    return;
  }

  let resultadosBusqueda = productos.filter((producto) =>
    producto.servicio.toLowerCase().includes(nombreServicio)
  );

  resultadoDiv.innerHTML = "";

  if (resultadosBusqueda.length > 0) {
    resultadoDiv.innerHTML = "<h5>Resultados encontrados:</h5>";
    resultadosBusqueda.forEach((resultado) => {
      let checked = productosSeleccionados.some(
        (p) => p.servicio === resultado.servicio
      );
      resultadoDiv.innerHTML += `
          <div class="search-wrapper">
            <div class="info-wrapper">
              <p>Título: ${resultado.categoria}</p>
              <p>Nombre del Servicio: <span class="result">${
                resultado.servicio
              }</span></p>
            </div>
            <div class="check-wrapper">
              <input class="check" type="checkbox" data-nombre="${
                resultado.servicio
              }" ${checked ? "checked" : ""}>
            </div>
          </div>
          <hr style="width:100%; margin-left:0">
        `;
    });
  } else {
    resultadoDiv.innerHTML = "<p>No se encontraron resultados</p>";
  }
}

function agregarProducto(nombreServicio) {
  let producto = productos.find((p) => p.servicio === nombreServicio);
  if (producto && !productosSeleccionados.includes(producto)) {
    productosSeleccionados.push(producto);
    actualizarModalBody();
  }
}

function quitarProducto(nombreServicio) {
  productosSeleccionados = productosSeleccionados.filter(
    (p) => p.servicio !== nombreServicio
  );
  actualizarModalBody();
}

function actualizarModalBody() {
  let modalBody = $("#modalBody");
  modalBody.html("");

  let productosAgrupados = agruparProductosPorCategoria();
  let totalAntesIva = 0;

  for (let titulo in productosAgrupados) {
    modalBody.append(`<div class="categoria-modal-wrapper">
      <h5>${titulo}</h5> <input class="form-control numeroTitulo" type="text" data-titulo="${titulo}" placeholder="Número de título"> </input>
    </div>`);
    productosAgrupados[titulo].forEach((producto) => {
      // Multiplicar cantidad por precio para obtener el precio total del producto
      let precioTotal = producto.precio * producto.cantidad;
      totalAntesIva += precioTotal;
      modalBody.append(`
        <div class="partida-wrapper">
          <input class="form-control input-sm" value="${
            producto.cantidad
          }" type="number" 
            onchange="actualizarCantidad('${
              producto.servicio
            }', this.value)">
          </input>
          <input class="form-control" value="${
            producto.servicio
          }" disabled>
          <input class="form-control" type="number" value="${producto.precio}" 
            onchange="actualizarPrecio('${
              producto.servicio
            }', this.value)">
          </input>
          <input class="form-control" type="text" value="${precioTotal.toFixed(
            2
          )}" disabled>
          </input>
          <button class="btn btn-danger btn-sm eliminar-partida" data-nombre="${
            producto.servicio
          }">Eliminar</button>
        </div>
      `);
    });
    modalBody.append("<hr>");
  }

  // Asociar la función de eliminar a los botones de eliminar partida
  $(".eliminar-partida").click(function () {
    let nombreServicio = $(this).data("nombre");
    eliminarPartida(nombreServicio);
  });

  // Actualizar el contenido en el modal-footer con el nuevo total antes del IVA y el total después del IVA
  let iva = parseFloat($("#iva").val()) || 0;
  let montoIva = totalAntesIva * (iva / 100);
  let totalDespuesIva = totalAntesIva + montoIva;

  $("#totalAntesIva").text(`Total antes de IVA: $${totalAntesIva.toFixed(2)}`);
  $("#totalDespuesIva").text(
    `Total después de IVA: $${totalDespuesIva.toFixed(2)}`
  );
}

function eliminarPartida(nombreServicio) {
  productosSeleccionados = productosSeleccionados.filter(
    (p) => p.servicio !== nombreServicio
  );
  actualizarModalBody();

  // Desmarcar el checkbox correspondiente al nombre del servicio eliminado
  $(`.check[data-nombre="${nombreServicio}"]`).prop("checked", false);
}

function actualizarPrecio(nombreServicio, nuevoPrecio) {
  let producto = productosSeleccionados.find(
    (p) => p.servicio === nombreServicio
  );
  if (producto) {
    producto.precio = parseFloat(nuevoPrecio) || 0;
    actualizarModalBody();
  }
}

function actualizarCantidad(nombreServicio, nuevoCantidad) {
  let producto = productosSeleccionados.find(
    (p) => p.servicio === nombreServicio
  );
  if (producto) {
    producto.cantidad = parseFloat(nuevoCantidad) || 0;
    actualizarModalBody();
  }
}

// Agregar nuevo servicio desde el formulario
$("#agregarNuevoServicioBtn").click(function () {
  let nuevoServicioTitulo = $("#nuevoServicioTitulo").val();
  let nuevoServicioNombre = $("#nuevoServicioNombre").val();

  if (nuevoServicioTitulo && nuevoServicioNombre) {
    // Crear un nuevo producto con título y nombre proporcionados
    let nuevoProducto = {
      categoria: nuevoServicioTitulo,
      servicio: nuevoServicioNombre,
      precio: 0,
      cantidad: 1, // Puedes establecer un valor predeterminado o dejarlo en 0
    };

    // Agregar el nuevo producto a la lista de productos seleccionados
    productosSeleccionados.push(nuevoProducto);

    // Actualizar el contenido del modal-body
    actualizarModalBody();

    // Limpiar los campos del formulario
    //$("#nuevoServicioTitulo").val("");
    $("#nuevoServicioNombre").val("");
  }
});

function agruparProductosPorCategoria() {
  let productosAgrupados = {};

  productosSeleccionados.forEach((producto) => {
    if (!productosAgrupados[producto.categoria]) {
      productosAgrupados[producto.categoria] = [];
    }
    productosAgrupados[producto.categoria].push({
      servicio: producto.servicio,
      precio: producto.precio,
      cantidad: producto.cantidad,
    });
  });

  return productosAgrupados;
}

function imprimirCotizacion() {
  let pdfContent = [];
  let fechaActual = getFechaActual();
  let nombreCotizacion = $("#nombreCotizacion").val();

  pdfContent.push({
    text: fechaActual,
    alignment: "right",
    margin: [0, 10, 20, 0],
  });

  pdfContent.push({
    image:
      "data:image/png;base64,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", // Ruta de la imagen
    width: 100, // Ancho de la imagen
    height: 100,
    absolutePosition: { x: 40, y: 40 }, // Posición absoluta en la esquina superior izquierda
  });

  pdfContent.push({
    text: `NOMBRE DE TU EMPRESA AQUI\nDOMICILIO
     DE TU EMPRESA AQUI\n${nombreCotizacion}`,
    alignment: "center",
    margin: [0, 0, 0, 45],
  });

  let tablaEncabezados = [
    { text: "CONCEPTO", bold: true, alignment: "left", margin: [20, 0, 0, 0] },
    { text: "PRECIO", bold: true, alignment: "right" },
  ];

  let productosAgrupados = generarDetalleProductos();
  let tablaProductos = [];

  let totalAntesIva = 0;

  for (let titulo in productosAgrupados) {
    let numeroTitulo = productosAgrupados[titulo].numeroTitulo;
    tablaProductos.push([
      {
        text: titulo + " " + numeroTitulo,
        style: "subheader",
        colSpan: 2,
        alignment: "left",
      },
      {},
    ]);

    productosAgrupados[titulo].productos.forEach((producto) => {
      let precioTotal = producto.precioTotal;
      totalAntesIva += precioTotal;

      tablaProductos.push([
        {
          text: producto.cantidad + "  " + producto.concepto,
          margin: [20, 0, 0, 0],
        },
        { text: "$" + precioTotal.toFixed(2), alignment: "right" },
      ]);
    });
  }

  pdfContent.push({
    table: {
      widths: ["*", "auto"],
      body: [tablaEncabezados, ...tablaProductos],
    },
    layout: {
      hLineWidth: function (i, node) {
        return i === 0 || i === node.table.body.length ? 1 : 0;
      },
      vLineWidth: function (i, node) {
        return 0;
      },
      paddingLeft: function (i, node) {
        return 5;
      },
      paddingRight: function (i, node) {
        return 5;
      },
      paddingTop: function (i, node) {
        return 5;
      },
      paddingBottom: function (i, node) {
        return 5;
      },
    },
  });

  let iva = 0.16;
  let montoIva = totalAntesIva * iva;
  let totalDespuesIva = totalAntesIva + montoIva;

  pdfContent.push({
    text: [
      {
        text: `SUBTOTAL: $${totalAntesIva.toFixed(2)}`,
        bold: true,
        alignment: "right",
      },
      "\n",
      {
        text: `IVA (16%): $${montoIva.toFixed(2)}`,
        bold: true,
        alignment: "right",
      },
      "\n",
      {
        text: `TOTAL: $${totalDespuesIva.toFixed(2)}`,
        bold: true,
        alignment: "right",
      },
    ],
    margin: [0, 20, 0, 20],
  });

  pdfContent.push({
    text: [
      "COTIZACIONES QUE EXCEDAN DE 48 HORAS DE AUTORIZACIÓN\n",
      "PODRÁN CAMBIAR DE PRECIO\n",
      "TELÉFONO DE CONTACTO PARA CUALQUIER ACLARACIÓN O DUDA\n",
      "3121078034 ING. RAMÓN DÍAZ",
    ],
    alignment: "center",
  });

  let pdfDoc = {
    content: pdfContent,
  };

  pdfMake
    .createPdf(pdfDoc)
    .download(`cotizacion_${nombreCotizacion}_${fechaActual}.pdf`);
}

function generarDetalleProductos() {
  let detalleAgrupado = {};

  // Obtener los números de título para cada categoría
  $(".numeroTitulo").each(function () {
    let titulo = $(this).data("titulo");
    let numeroTitulo = $(this).val();
    detalleAgrupado[titulo] = {
      numeroTitulo: numeroTitulo,
      productos: [],
    };
  });

  // Agrupar los productos por título
  productosSeleccionados.forEach((producto) => {
    detalleAgrupado[producto.categoria].productos.push({
      concepto: producto.servicio,
      precio: producto.precio,
      cantidad: producto.cantidad,
    });
  });

  // Calcular el precio total de cada producto
  for (let titulo in detalleAgrupado) {
    detalleAgrupado[titulo].productos.forEach((producto) => {
      producto.precioTotal = producto.precio * producto.cantidad;
    });
  }

  return detalleAgrupado;
}

function getFechaActual() {
  let fechaActual = new Date();
  let dia = fechaActual.getDate();
  let mes = fechaActual.getMonth() + 1;
  let anio = fechaActual.getFullYear();

  // Ajuste para que tenga siempre dos dígitos
  if (dia < 10) {
    dia = "0" + dia;
  }
  if (mes < 10) {
    mes = "0" + mes;
  }

  return dia + "/" + mes + "/" + anio;
}

$("#imprimirCotizacionBtn").click(function () {
  imprimirCotizacion();
});
