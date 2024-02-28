import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:8788/graphql',
  documents: ['app/**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './app/types.ts': {
      plugins: [
        {
          typescript: {},
        },
      ],
    },
  },
};

export default config;
