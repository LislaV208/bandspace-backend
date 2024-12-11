# BandSpace Backend

Backend service for BandSpace - a platform for amateur music bands to collaborate on audio materials.

## Features

- User authentication (Auth0)
- Workspace management
- Audio file management (AWS S3)
- Comments and collaboration
- Premium features (Stripe integration)

## Prerequisites

- Node.js (v18 or later)
- PostgreSQL
- AWS Account (for S3)
- Auth0 Account
- Stripe Account (for premium features)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and fill in your configuration:
   ```bash
   cp .env.example .env
   ```

3. Set up your database:
   ```bash
   # Generate Prisma Client
   npx prisma generate
   
   # Run migrations
   npx prisma migrate dev
   ```

4. Start the development server:
   ```bash
   npm run start:dev
   ```

The server will be running at http://localhost:3000

## Project Structure

- `/src` - Source code
  - `/prisma` - Database models and migrations
  - `/auth` - Authentication logic
  - `/workspaces` - Workspace management
  - `/files` - File management
  - `/comments` - Comment functionality

## API Documentation

API documentation will be available at http://localhost:3000/api when running in development mode.

## Testing

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```
