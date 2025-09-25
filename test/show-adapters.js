import { create } from 'webgpu';

try {
  // dawn.node throws an error with the list of available adapters
  // if it can't find a matching adapter.
  const gpu = create(['adapter=notexists']);
  const adapter = await gpu.requestAdapter();
} catch (e) {
  console.error(e.message);
}


