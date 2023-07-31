## Introducción

En este apartado se especificara como ejecutar la aplicacion.
El proyecto esta divididoen frontend y backend

Para la Ejecucion correcta es necesario instalar previamente Node.js y .NET

## Installation

Para iniciar el backend primero ubicarse en la carpeta relizandoun cd a practica-backen y otra vez en el poryecto practica-backen luego ejecutar el comando :

```bash
dotnet run
```
En el frontend lo principal sera instalar las dependecias :

```bash
npm i 
```

Y para inicar el proyecto  :

```bash
npm run dev
```

##Base de Datos

La base de datos se puede crear con .NET con el comando:
```bash
dotnet ef database update
```
O con el siguiente Script:
```bash

```
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema db_practica
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `db_practica` ;

-- -----------------------------------------------------
-- Schema db_practica
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_practica` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `db_practica` ;

-- -----------------------------------------------------
-- Table `db_practica`.`__efmigrationshistory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_practica`.`__efmigrationshistory` (
  `MigrationId` VARCHAR(150) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NOT NULL,
  `ProductVersion` VARCHAR(32) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NOT NULL,
  PRIMARY KEY (`MigrationId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `db_practica`.`guest`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_practica`.`guest` (
  `Id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NOT NULL,
  `Nombre` VARCHAR(100) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NOT NULL,
  `Identificacion` VARCHAR(100) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NOT NULL,
  `Habitacion` INT NOT NULL,
  `Ingreso` DATETIME NOT NULL,
  `Salida` DATETIME NOT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE INDEX `FK_IndexIdGuest` ON `db_practica`.`guest` (`Id` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `db_practica`.`log`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_practica`.`log` (
  `Id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NOT NULL,
  `IdHuesped` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NOT NULL,
  `Nombre` VARCHAR(100) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NOT NULL,
  `Identificacion` VARCHAR(100) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NOT NULL,
  `Habitacion` INT NOT NULL,
  `Ingreso` DATETIME NOT NULL,
  `Salida` DATETIME NOT NULL,
  `Accion` VARCHAR(100) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NOT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE INDEX `FK_IndexIdLog` ON `db_practica`.`log` (`Id` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
[Read the docs](https://docusaurus.io/docs/installation) for any further information.
