# ----------- Build Stage -----------
FROM node:18-alpine AS builder

WORKDIR /app

# Install production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy the rest of the app source code
COPY . .

# ----------- Production Stage -----------
FROM node:18.20.2-alpine

WORKDIR /app

# Install dumb-init and set up user
RUN apk update && apk upgrade && \
    apk add --no-cache dumb-init && \
    addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy the built app from the builder stage
COPY --from=builder --chown=appuser:appgroup /app .

# Switch to non-root user
USER appuser

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose the app port
EXPOSE 3000

# Add a lightweight health check (no curl/wget required)
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD node -e "\
    require('http').get('http://localhost:3000/health', \
    res => process.exit(res.statusCode === 200 ? 0 : 1)).on('error', () => process.exit(1))"

# Use dumb-init for proper signal handling (especially for Docker stop/restart)
ENTRYPOINT ["dumb-init", "--"]

# Start your app
CMD ["node", "server.js"]
