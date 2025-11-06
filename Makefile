install:
	npm ci
brain-games:
	@script -q -c "node bin/brain-games.js" /dev/null
publish:
	npm publish --dry-run
make lint:
	npx eslint .