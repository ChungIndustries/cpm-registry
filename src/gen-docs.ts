import { Documentation } from 'express-zod-api';
import { routing } from './routing.js';
import config, { env } from './config.js';
import fs from 'node:fs';

const specification = new Documentation({
  routing,
  config,
  version: '1.0.0',
  title: 'CPM Registry API',
  serverUrl: 'https://registry.cpm.chungindustries.com',
  tags: {
    Packages: {
      description: 'Endpoints for browsing and retrieving cpm packages.'
    }
  }
});

specification.addDescription(
  'API for the CPM Registry, used by the Chung Package Manager (cpm) to host and distribute ComputerCraft-focused Lua packages.'
);

fs.writeFileSync(env.apiSpecPath, specification.getSpecAsYaml());
