# showcase--nestjs--configuration

1. Set up by copying `.env.template` as `.env`.
2. Enable "REST Client" extension in VSCode and run the requests in `./api/requests.http` file.

## Migrations

```bash
# Show typeorm CLI command help
npm run typeorm -- --help

# Create a new blank migration
npm run typeorm -- migration:create ./src/migrations/<migration-name>

# Generate a new migration based on required changes
npm run typeorm -- migration:generate ./src/migrations/<migration-name>

# Run migrations
npm run typeorm -- migration:run

# Revert migrations
npm run typeorm -- migration:revert

# Show status of all migrations
npm run typeorm -- migration:show
```
