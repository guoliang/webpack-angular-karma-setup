if %1%==clean (
    rmdir /S /Q dist
    exit
)

if %1%==production set task=T
if %1%==development set task=T

if %task%==T (
    set NODE_ENV=%1
    webpack
)