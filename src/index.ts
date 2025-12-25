import config from '@/config.js';
import { routing } from '@/routing.js';
import { createServer } from 'express-zod-api';

await createServer(config, routing);
