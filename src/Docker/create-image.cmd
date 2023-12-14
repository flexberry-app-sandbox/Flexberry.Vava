docker build --no-cache -f SQL\Dockerfile.PostgreSql -t vava/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t vava/app ../..
