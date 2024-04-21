FROM oven/bun
COPY tarot /app
WORKDIR /app
RUN bun install
CMD ["bun", "run", "dev", "--host", "0.0.0.0"]