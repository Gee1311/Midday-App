import path from "node:path";
import {
    defineWorkersProject,
    readD1Migrations,
} from "@cloudflare/vitest-pool-workers/config";

export default defineWorkersProject(async () => {
    // Read all migrations in the `migrations` directory
    const migrationsPath = path.join(__dirname, "migrations");
    const migrations = await readD1Migrations(migrationsPath);

    return {
        test: {
            setupFiles: ["./test/apply-migrations.ts"],
            include: ["./src/**/*.test.ts"],
            exclude: ["./src/integration/**", "./src/routes/**", "./src/benchmarks/**"],
            reporters: ["html", "verbose"],
            outputFile: "./.vitest/html",
            alias: {
                "@/": new URL("./src/", import.meta.url).pathname,
            },
            poolOptions: {
                workers: {
                    singleWorker: true,
                    wrangler: {
                        configPath: "./wrangler.toml",
                        environment: "production",
                    },
                    miniflare: {
                        // Add a test-only binding for migrations, so we can apply them in a
                        // setup file
                        bindings: { TEST_MIGRATIONS: migrations },
                    },
                },
            },
        },
    };
});
