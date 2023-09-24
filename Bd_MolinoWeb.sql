/* *************** INTEGRADOR II SISTEMAS ***************
                SCRIPT BASES DE DATOS 13/09/23                                                                                           
 ***************************************************** */                                  
/*CREACIÓN DE LA BASE DE DATOS 'bdmolinoweb' */
drop database if exists bdmolinoweb;
create database bdmolinoweb;

CREATE TABLE IF NOT EXISTS public.rolusuario
(
    idrol serial NOT NULL,
    nombre character varying(100) NOT NULL,
    CONSTRAINT grupousuario_pkey PRIMARY KEY (idrol)
);

CREATE TABLE IF NOT EXISTS public.usuario
(
    idusuario serial NOT NULL,
	idrol int ,
    username character varying(50) NOT NULL,
    contraseña character varying(32),
    idpersona int,
    email character varying(200) ,
	estado character(1)DEFAULT '0' NOT NULL,
    sistema character(1) ,
	user_create int,
	f_create date,
	user_delete int,
	f_delete date, 
    CONSTRAINT usuarios_pkey PRIMARY KEY (idusuario),
    CONSTRAINT fk_usuario_rolusuario FOREIGN KEY (idrol)
        REFERENCES public.rolesusuario (idrol)
);
CREATE TABLE IF NOT EXISTS public.tipo_doc_identidad
(
    idtipo_doc_identidad character(2)  NOT NULL,
    descripcion character varying(200),
    longitud numeric(2,0) DEFAULT 0,
    CONSTRAINT tipo_doc_identidad_pkey PRIMARY KEY (idtipo_doc_identidad)
);

CREATE TABLE IF NOT EXISTS public.ubigeo
(
    idubigeo character (6)  NOT NULL,
    distrito character varying(100) NOT NULL,
    provincia character varying(100) ,
	departamento character varying(100),
	CONSTRAINT ubigeo_pkey PRIMARY KEY (idubigeo)
);

CREATE TABLE IF NOT EXISTS public.tipo_persona
(
    idtipo_persona serial NOT NULL,
    descripcion character varying(100),
    estado character(1)DEFAULT '0',
    CONSTRAINT idtipo_persona_pkey PRIMARY KEY (idtipo_persona)
);
CREATE TABLE IF NOT EXISTS public.persona
(
    idpersona serial NOT NULL,
	idtipo_persona int,
	idtipo_doc_identidad character(2)  DEFAULT '00'::bpchar,
	idubigeo character(6) ,
    nombre character varying(200) ,
    nro_doc_identidad character varying(20) ,
    direccion character varying(200) ,
    celular character varying(20) ,
    observacion character varying(200) ,
	user_create int,
	f_create date,
	user_delete int,
	f_delete date,
    estado character(1) DEFAULT '0',
    sistema character(1),
	CONSTRAINT persona_pkey PRIMARY KEY (idpersona),
    CONSTRAINT fk_persona_ubigeo FOREIGN KEY (idubigeo)
        REFERENCES public.rolesusuario (idubi),
    CONSTRAINT fk_persona_tipo_doc_ide FOREIGN KEY (idtipodoc_ide)
        REFERENCES public.tipo_doc_ide (idtipodoc_ide),
    CONSTRAINT fk_persona_tipo_persona FOREIGN KEY (idtipo_persona)
        REFERENCES public.tipo_persona (idtipo_persona)
);

CREATE TABLE IF NOT EXISTS public.categoria
(
    idcategoria serial NOT NULL,
    descripcion character varying(100) ,
    CONSTRAINT linea_pkey PRIMARY KEY (idlinea)
);
CREATE TABLE IF NOT EXISTS public.sub_categoria
(
    idsub_categoria serial NOT NULL,
    descripcion character varying(150) ,
    idcategoria int,
    CONSTRAINT idsub_categoria_pkey PRIMARY KEY (sub_categoria)
);
CREATE TABLE IF NOT EXISTS public.marca
(
    idmarca serial NOT NULL,
    descripcion character varying(100) ,
    CONSTRAINT marca_pkey PRIMARY KEY (idmarca)
);
CREATE TABLE IF NOT EXISTS public.unidad_medida
(
    idunidad_medida serial NOT NULL,
    descripcion character varying(100) ,
    CONSTRAINT unidad_medida_pkey PRIMARY KEY (idunidad_medida)
);
CREATE TABLE IF NOT EXISTS public.articulo
(
    idarticulo serial NOT NULL,
	idsub_categoria int,
	idmarca int,
	idunidad_medida int,
    descripcion character varying(150) ,
    peso numeric(7,2),
	precio_selectora numeric(14,2),
	precio_bolsa numeric(14,2),
	pre_pilado numeric(14,2),
	prod character(1) DEFAULT 'N',
    idienvase int ,
	afectacion character(1) DEFAULT 'E',
	img bytea,
    detalle character varying(1000) ,
	sistema character(1),
	estado character(1)DEFAULT '0',
    CONSTRAINT articulo_pkey PRIMARY KEY (idarticulo),
    CONSTRAINT fk_articulo_sub_categoria FOREIGN KEY (idsub_categoria)
        REFERENCES public.sub_categoria (idsub_categoria),
	CONSTRAINT fk_articulo_marca FOREIGN KEY (idmarca)
        REFERENCES public.marca (idmarca) ,
	CONSTRAINT fk_articulo_unidad_medidaFOREIGN KEY (idunidad_medida)
        REFERENCES public.unidad_medida (idunidad_medida) 
);
CREATE TABLE IF NOT EXISTS public.zona
(
    idzona serial NOT NULL,
	idubigeo character(6),
    descripcion character varying(100),
    CONSTRAINT zona_pkey PRIMARY KEY (idzona),
    CONSTRAINT fk_zona_ubigeo FOREIGN KEY (idubigeo)
        REFERENCES public.ubigeo (idubigeo)
);
CREATE TABLE IF NOT EXISTS public.almacen
(
    idalmacen serial NOT NULL,
    descripcion character varying(100) ,
	estado character(1) DEFAULT '0',
    CONSTRAINT almacen_pkey PRIMARY KEY (idalmacen)
);
CREATE TABLE IF NOT EXISTS public.variedad
(
    idvariedad serial NOT NULL,
    descripcion character varying(100),
	estado character(1) DEFAULT '0',
    CONSTRAINT variedad_pkey PRIMARY KEY (idvariedad)
);
CREATE TABLE IF NOT EXISTS public.ingreso_cascara
(
    idingreso_cascara serial NOT NULL,
	idpersona int,
	idvariedad int,
	idmodalidad character(1),
	idzona int,
	idalmacen int,
    fecha_ing date,
    cod_fun character(6),
    idpersona_envase int,
    idtransportista int,
    transportista character varying(100) ,
    placa character varying(7) ,
    
    
    humedad numeric(14,2),
    num_sac_ing numeric(14,2),
    pes_bru numeric(14,2),
    hor_ing character(12) ,
    tara numeric(14,2),
    hor_sal character(12) ,
    destarado character(1),
    pes_neto numeric(14,2),
    
    por_imp numeric(14,2),
    mod_des character(1) ,
    can_sac_des numeric(14,2),
    cod_cua character(6) ,
    tar_cua numeric(14,2),
    tar_cli numeric(14,2),
    imp_cua numeric(14,2),
    imp_cli numeric(14,2),
    observacion character varying(200),
    fecha_salida date,
    usuario_ing character varying(50) ,
    usuario_sal character varying(50) ,
    num_sac_sec numeric(14,2) DEFAULT 0,
    num_kil_sec numeric(14,2) DEFAULT 0,
    sal_tot_sac_sec numeric(14,2) DEFAULT 0,
    sal_tot_kil_sec numeric(14,2) DEFAULT 0,
    estado integer DEFAULT 0,
    retirado character(1) ,
    lote_seco character(1) ,
    cod_pro_ant character(6) ,
    tipo_documento character(2)  NOT NULL,
    nro_doc character(10)  NOT NULL,
    cod_art character(6) ,
    num_sac_maq numeric(14,2) DEFAULT 0,
    num_kil_maq numeric(14,2) DEFAULT 0,
    sal_tot_sac_maq numeric(14,2) DEFAULT 0,
    sal_tot_kil_maq numeric(14,2) DEFAULT 0,
    maquila character(1)   DEFAULT 'N',
    liquidacion character(1)  DEFAULT 'N',
    CONSTRAINT ingreso_ingreso_arroz_cascara_pkey PRIMARY KEY (nro_ing),
    CONSTRAINT ingreso_ingreso_arroz_cascara_fk2 FOREIGN KEY (cod_variedad)
        REFERENCES public.variedades (cod_variedad) ,
    CONSTRAINT ingreso_ingreso_arroz_cascara_fk3 FOREIGN KEY (cod_zona)
        REFERENCES public.zona (cod_zona)
)

CREATE TABLE IF NOT EXISTS public.permisos
(
    cod_usu character varying(3)  NOT NULL,
    cod_men character varying(50)NOT NULL,
    nuevo character(1)  DEFAULT 0,
    modificar character(1)  DEFAULT 0,
    eliminar character(1) DEFAULT 0,
    anular character(1) DEFAULT 0,
    imprimir character(1) DEFAULT 0,
    estado character(1) DEFAULT 0,
    CONSTRAINT permisos_key PRIMARY KEY (cod_usu, cod_men),
    CONSTRAINT fk_permisos_usuario FOREIGN KEY (cod_usu)
        REFERENCES public.usuarios (codusu) 
);