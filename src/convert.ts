import sharp from 'sharp';

const TARGET_FORMATS = ['image/png', 'image/jpeg', 'image/webp'];

type ConvertType = 'png';

export const convert = async (path: string | undefined, to: ConvertType) => {
  if (!path) {
    throw new Error('No file specified');
  }

  const file = Bun.file(path);
  if (!TARGET_FORMATS.includes(file.type)) {
    throw new Error('Unsupported file format');
  }

  const name = file.name || 'output';
  const output = `${name}.${to}`;
  const image = await file.arrayBuffer();
  await sharp(image).toFile(output);
};
