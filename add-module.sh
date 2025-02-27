#!/bin/bash

# Cek apakah argumen minimal sudah diberikan (module-name)
if [ "$#" -lt 1 ]; then
  echo "Usage: add-module module-name [--skip-api]"
  exit 1
fi

MODULE_NAME=$1
SKIP_API=false

# Jika parameter kedua adalah --skip-api, maka set flag untuk melewati pembuatan file _api
if [ "$2" = "--skip-api" ]; then
  SKIP_API=true
fi

# Pastikan MODULE_NAME dalam kebab-case, misalnya "product-merchant"
KEBAB_CASE=$(echo "$MODULE_NAME" | tr '[:upper:]' '[:lower:]')

# Konversi MODULE_NAME dari kebab-case ke camelCase, contoh: "product-merchant" -> "productMerchant"
MODULE_NAME_CAMEL=$(echo "$KEBAB_CASE" | sed -E 's/-([a-z])/\U\1/g')

# Konversi MODULE_NAME_CAMEL ke PascalCase, contoh: "productMerchant" -> "ProductMerchant"
MODULE_NAME_PASCAL=$(echo "$MODULE_NAME_CAMEL" | sed -E 's/^(.)/\U\1/')

# Tentukan path direktori module di dalam src/features
MODULE_DIR="src/features/$MODULE_NAME"
API_DIR="$MODULE_DIR/_api"
COMPONENTS_DIR="$MODULE_DIR/_components"
PAGES_DIR="$MODULE_DIR/_pages"

# Buat direktori yang diperlukan
mkdir -p "$MODULE_DIR" "$COMPONENTS_DIR" "$PAGES_DIR"

# Jika tidak skip API, buat direktori _api dan file-file di dalamnya
if [ "$SKIP_API" = false ]; then
  mkdir -p "$API_DIR"

  # Buat file _api/index.ts dengan mock exports
  cat > "$API_DIR/index.ts" <<EOF
export * from './create-${KEBAB_CASE}';
export * from './update-${KEBAB_CASE}';
export * from './delete-${KEBAB_CASE}';
export * from './get-${KEBAB_CASE}';
EOF

  # Buat file _api/get-<module-name>.ts
  GET_FILE="$API_DIR/get-${KEBAB_CASE}.ts"
  cat > "$GET_FILE" <<EOF
// Get ${MODULE_NAME} module
// Tambahkan kode untuk mengambil data ${MODULE_NAME}
export async function get${MODULE_NAME_PASCAL}() {
  // Implement get logic here
}
EOF

  # Buat file _api/create-<module-name>.ts
  CREATE_FILE="$API_DIR/create-${KEBAB_CASE}.ts"
  cat > "$CREATE_FILE" <<EOF
// Create ${MODULE_NAME} module
// Tambahkan kode untuk membuat data ${MODULE_NAME}
export async function create${MODULE_NAME_PASCAL}(data: any) {
  // Implement create logic here
}
EOF

  # Buat file _api/update-<module-name>.ts
  UPDATE_FILE="$API_DIR/update-${KEBAB_CASE}.ts"
  cat > "$UPDATE_FILE" <<EOF
// Update ${MODULE_NAME} module
// Tambahkan kode untuk mengubah data ${MODULE_NAME}
export async function update${MODULE_NAME_PASCAL}(id: string, data: any) {
  // Implement update logic here
}
EOF

  # Buat file _api/delete-<module-name>.ts
  DELETE_FILE="$API_DIR/delete-${KEBAB_CASE}.ts"
  cat > "$DELETE_FILE" <<EOF
// Delete ${MODULE_NAME} module
// Tambahkan kode untuk menghapus data ${MODULE_NAME}
export async function delete${MODULE_NAME_PASCAL}(id: string) {
  // Implement delete logic here
}
EOF
fi

# Buat file _components/index.ts
cat > "$COMPONENTS_DIR/index.ts" <<EOF
// Components for the $MODULE_NAME module
// Komponen untuk modul $MODULE_NAME
EOF

# Buat file _pages/{module-name}-page.tsx
PAGE_FILE="$PAGES_DIR/${MODULE_NAME}-page.tsx"
cat > "$PAGE_FILE" <<EOF
import React from 'react';

interface ${MODULE_NAME_PASCAL}PageProps {}

const ${MODULE_NAME_PASCAL}Page: React.FC<${MODULE_NAME_PASCAL}PageProps> = ({}) => {
  return <div>${MODULE_NAME_PASCAL}Page</div>;
};

export default ${MODULE_NAME_PASCAL}Page;
EOF

# Buat file schema di root module dengan nama kebab-case-schema.ts
SCHEMA_FILE="$MODULE_DIR/${KEBAB_CASE}-schema.ts"
cat > "$SCHEMA_FILE" <<EOF
// Schema for the ${KEBAB_CASE} module
// Skema untuk modul ${KEBAB_CASE}
// Import dan definisikan schema Zod sesuai kebutuhan
// Import and define the Zod schema as needed
import { z } from 'zod';

export const ${MODULE_NAME_CAMEL}Schema = z.object({
  // contoh: id: z.string(),
  // example: id: z.string(),
});

export const ${MODULE_NAME_CAMEL}ResponseSchema = z.object({
  data: z.array(${MODULE_NAME_CAMEL}Schema),
});

export type ${MODULE_NAME_PASCAL}Type = z.infer<typeof ${MODULE_NAME_CAMEL}Schema>;
export type ${MODULE_NAME_PASCAL}ResponseType = z.infer<typeof ${MODULE_NAME_CAMEL}ResponseSchema>;
EOF

echo "Module '$MODULE_NAME' berhasil diinisialisasi di direktori '$MODULE_DIR'."
echo "Module '$MODULE_NAME' has been initialized in directory '$MODULE_DIR'."
