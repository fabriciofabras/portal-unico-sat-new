import { URL_SERVER } from "../../properties";

export const getServidores = (table) => {

    const getServidores = async () => {

        const url = `https://${URL_SERVER}/${table}`;
        const resp = await fetch(url);
        const results = await resp.json();

        let cmdbItems=  results.map(servidor => ({
            nombre: servidor.nombre,
            descipcionCI: servidor.descipcionCI,
            noSerie: servidor.noSerie,
            mantenimiento: servidor.mantenimiento,
            empresa: servidor.empresa,
            estado: servidor.estado,
            impacto: servidor.impacto,
            urgencia: servidor.urgencia,
            prioridad: servidor.prioridad,
            descripcion: servidor.descripcion,
            entorno: servidor.entorno,
            nivel1: servidor.nivel1,
            nivel2: servidor.nivel2,
            nivel3: servidor.nivel3,
            nombreProducto: servidor.nombreProducto,
            fabricante: servidor.fabricante,
            nombreProveedor: servidor.nombreProveedor,
            nube: servidor.nube,
            ciudad: servidor.ciudad,
            ubicacion: servidor.ubicacion,
            gpoResponsable: servidor.gpoResponsable,
            areaSat: servidor.areaSat,
            patchLevel: servidor.patchLevel,
            noDiscos: servidor.noDiscos,
            capacidad: servidor.capacidad,
            almacenamientoTotal: servidor.almacenamientoTotal,
            modeloCPU: servidor.modeloCPU,
            noCores: servidor.noCores,
            noCPUs: servidor.noCPUs,
            velocidadCPUs: servidor.velocidadCPUs,
            ipGestion: servidor.ipGestion,
            ipProductiva: servidor.ipProductiva,
            ipStorage: servidor.ipStorage,
            coordenadasRack: servidor.coordenadasRack,
            unidadRack: servidor.unidadRack,
            noTarjetas: servidor.noTarjetas,
            ambiente: servidor.ambiente,
            altaDisponibilidad: servidor.altaDisponibilidad,
            facturable: servidor.facturable,
            hostname: servidor.hostname,
            respaldo: servidor.respaldo,
            sistemaOperativo: servidor.sistemaOperativo,
            versionSistemaOperativo: servidor.versionSistemaOperativo,
            respaldoSistemaOperativo: servidor.respaldoSistemaOperativo,
            aplicaRespaldo: servidor.aplicaRespaldo,
            cluster: servidor.cluster,
            capa: servidor.capa,
            componente: servidor.componente,
            infraestructura: servidor.infraestructura,
            aplicacion: servidor.aplicacion,
            horarioOperacion: servidor.horarioOperacion,
            virtual: servidor.virtual,
            dominio: servidor.dominio,
            ipsAdicionales: servidor.ipsAdicionales,
            memoriaRam: servidor.memoriaRam,
            altaTomaOperativa: servidor.altaTomaOperativa
        }));

        console.log("results",results)

        switch (table) {

            case "servidor":
                cmdbItems = results.map(servidor => ({
                    nombre: servidor.nombre,
                    descipcionCI: servidor.descipcionCI,
                    noSerie: servidor.noSerie,
                    mantenimiento: servidor.mantenimiento,
                    empresa: servidor.empresa,
                    estado: servidor.estado,
                    impacto: servidor.impacto,
                    urgencia: servidor.urgencia,
                    prioridad: servidor.prioridad,
                    descripcion: servidor.descripcion,
                    entorno: servidor.entorno,
                    nivel1: servidor.nivel1,
                    nivel2: servidor.nivel2,
                    nivel3: servidor.nivel3,
                    nombreProducto: servidor.nombreProducto,
                    fabricante: servidor.fabricante,
                    nombreProveedor: servidor.nombreProveedor,
                    nube: servidor.nube,
                    ciudad: servidor.ciudad,
                    ubicacion: servidor.ubicacion,
                    gpoResponsable: servidor.gpoResponsable,
                    areaSat: servidor.areaSat,
                    patchLevel: servidor.patchLevel,
                    noDiscos: servidor.noDiscos,
                    capacidad: servidor.capacidad,
                    almacenamientoTotal: servidor.almacenamientoTotal,
                    modeloCPU: servidor.modeloCPU,
                    noCores: servidor.noCores,
                    noCPUs: servidor.noCPUs,
                    velocidadCPUs: servidor.velocidadCPUs,
                    ipGestion: servidor.ipGestion,
                    ipProductiva: servidor.ipProductiva,
                    ipStorage: servidor.ipStorage,
                    coordenadasRack: servidor.coordenadasRack,
                    unidadRack: servidor.unidadRack,
                    noTarjetas: servidor.noTarjetas,
                    ambiente: servidor.ambiente,
                    altaDisponibilidad: servidor.altaDisponibilidad,
                    facturable: servidor.facturable,
                    hostname: servidor.hostname,
                    respaldo: servidor.respaldo,
                    sistemaOperativo: servidor.sistemaOperativo,
                    versionSistemaOperativo: servidor.versionSistemaOperativo,
                    respaldoSistemaOperativo: servidor.respaldoSistemaOperativo,
                    aplicaRespaldo: servidor.aplicaRespaldo,
                    cluster: servidor.cluster,
                    capa: servidor.capa,
                    componente: servidor.componente,
                    infraestructura: servidor.infraestructura,
                    aplicacion: servidor.aplicacion,
                    horarioOperacion: servidor.horarioOperacion,
                    virtual: servidor.virtual,
                    dominio: servidor.dominio,
                    ipsAdicionales: servidor.ipsAdicionales,
                    memoriaRam: servidor.memoriaRam,
                    altaTomaOperativa: servidor.altaTomaOperativa
                }));
                return cmdbItems;

                case "almacenamiento": 
                cmdbItems = results.map(almacenamiento => ({
                    nombre: almacenamiento.nombre,
                    descripcionCI: almacenamiento.descripcionCI,
                    noSerie: almacenamiento.noSerie,
                    mantenimiento: almacenamiento.mantenimiento,
                    empresa: almacenamiento.empresa,
                    estado: almacenamiento.estado,
                    entorno: almacenamiento.entorno,
                    impacto: almacenamiento.impacto,
                    urgencia: almacenamiento.urgencia,
                    prioridad: almacenamiento.prioridad,
                    descripcion: almacenamiento.descripcion,
                    nivel1: almacenamiento.nivel1,
                    nivel2: almacenamiento.nivel2,
                    nivel3: almacenamiento.nivel3,
                    nombreProducto: almacenamiento.nombreProducto,
                    fabricante: almacenamiento.fabricante,
                    nombreProveedor: almacenamiento.nombreProveedor,
                    nube: almacenamiento.nube,
                    localidad: almacenamiento.localidad,
                    direccion: almacenamiento.direccion,
                    ubicacion: almacenamiento.ubicacion,
                    fechaInstalacion: almacenamiento.fechaInstalacion,
                    gpoResponsable: almacenamiento.gpoResponsable,
                    areaSat: almacenamiento.areaSat,
                    virtual: almacenamiento.virtual,
                    altaDisponibilidad: almacenamiento.altaDisponibilidad,
                    facturable: almacenamiento.facturable,
                    respaldo: almacenamiento.respaldo,
                    capacidad: almacenamiento.capacidad,
                    ipProductiva: almacenamiento.ipProductiva,
                    fechaAltaTomaOperativa: almacenamiento.fechaAltaTomaOperativa
                }));
                return cmdbItems;

                case "telecomunicaciones": 
                cmdbItems = results.map(almacenamiento => ({
                    nombre: almacenamiento.nombre,
                    descripcionCI: almacenamiento.descripcionCI,
                    noSerie: almacenamiento.noSerie,
                    mantenimiento: almacenamiento.mantenimiento,
                    empresa: almacenamiento.empresa,
                    estado: almacenamiento.estado,
                    impacto: almacenamiento.impacto,
                    urgencia: almacenamiento.urgencia,
                    prioridad: almacenamiento.prioridad,
                    entorno: almacenamiento.entorno,
                    nivel1: almacenamiento.nivel1,
                    nivel2: almacenamiento.nivel2,
                    nivel3: almacenamiento.nivel3,
                    nombreProducto: almacenamiento.nombreProducto,
                    fabricante: almacenamiento.fabricante,
                    nombreProveedor: almacenamiento.nombreProveedor,
                    nube: almacenamiento.nube,
                    localidad: almacenamiento.localidad,
                    ubicacion: almacenamiento.ubicacion,
                    fechaInstalacion: almacenamiento.fechaInstalacion,
                    gpoResponsable: almacenamiento.gpoResponsable,
                    areaSat: almacenamiento.areaSat,
                    sistemaOperativo: almacenamiento.sistemaOperativo,
                    servicePack: almacenamiento.servicePack,
                    ipProductiva: almacenamiento.ipProductiva,
                    altaDisponibilidad: almacenamiento.altaDisponibilidad,
                    facturable: almacenamiento.facturable,
                    virtual: almacenamiento.virtual,
                    fechaAltaTomaOperativa: almacenamiento.fechaAltaTomaOperativa
                }));
                return cmdbItems;

        }

        return cmdbItems;

    }

    return getServidores();
}


