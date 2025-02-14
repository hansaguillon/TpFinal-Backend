import { DataSource } from "typeorm";
import { constants } from "src/constants/constants";

// Exporta un array de proveedores de base de datos que serán usados en otros módulos de la aplicación
export const databaseProviders = [
    {
        // El proveedor se identifica por la cadena 'DATA_SOURCE'
        provide: constants.dataSource,

        // Define una fábrica asíncrona que crea e inicializa un objeto DataSource
        useFactory: async () => {
            // Crea una nueva instancia de DataSource con la configuración especificada
            const dataSource = new DataSource({
                type: 'mysql',                // Tipo de base de datos (MySQL)
                host: 'localhost',            // Dirección del host de la base de datos
                port: 3306,                   // Puerto en el que se ejecuta la base de datos
                username: 'admin',             // Nombre de usuario para acceder a la base de datos
                password: 'admin',             // Contraseña para acceder a la base de datos
                database: 'einstein',     // Nombre de la base de datos a la que se conectará
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}', // Ruta donde se encuentran las entidades
                ],
                synchronize: false,            // Sincroniza la base de datos con el esquema de las entidades en cada ejecución (útil solo en desarrollo)
            });
 
            // Inicializa la conexión al DataSource y devuelve la instancia inicializada
            return dataSource.initialize()
        },
    },
];