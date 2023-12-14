docker build --no-cache -f SQL\Dockerfile.PostgreSql -t vava-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t vava-java/app ../../..
