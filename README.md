# showcase--nestjs--typeorm-postgresql

## Showcase

1. Run `pnpm install`
2. Copy `.env.template` as `.env`
3. Run `./scripts/docker-infra-up-sync.sh` (or inspect it and run commands manually)
4. Run `npm run dev`
5. Enable "REST Client" extension in VSCode and run the requests in `./api/requests.http` file

## Migrations

```bash
# Show typeorm CLI command help
npm run typeorm -- --help

# Create a new blank migration
npm run typeorm -- migration:create ./src/migrations/<migration-name>

# Generate a new migration based on required changes
npm run typeorm-ds -- migration:generate ./src/migrations/<migration-name>

# Run migrations
npm run typeorm-ds -- migration:run

# Revert migrations
npm run typeorm-ds -- migration:revert

# Show status of all migrations
npm run typeorm-ds -- migration:show
```
