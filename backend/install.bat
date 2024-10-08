@echo off


pip --version >nul 2>&1
IF ERRORLEVEL 1 (
    echo pip no está disponible en el entorno virtual.
    PAUSE
)

echo Instalando dependencias...

pip install flask flask_cors requests Flask-Migrate Flask-SQLAlchemy psycopg2

IF ERRORLEVEL 1 (
    echo Hubo un error al instalar las dependencias.
    PAUSE
)

echo Dependencias instaladas correctamente.
pause
