#!/bin/bash

# Cek apakah argumen sudah diberikan
# Check if an argument is provided
if [ "$#" -ne 1 ]; then
  echo "Usage: add-module module-name"
  exit 1
fi

MODULE_NAME=$1

# Pastikan MODULE_NAME dalam kebab-case, misalnya "product-merchant"
# Ensure MODULE_NAME is in kebab-case, e.g., "product-merchant"
KEBAB_CASE=$(echo "$MODULE_NAME" | tr '[:upper:]' '[:lower:]')

# Konversi MODULE_NAME dari kebab-case ke camelCase, contoh: "product-merchant" -> "productMerchant"
# Convert MODULE_NAME from kebab-case to camelCase, e.g., "product-merchant" -> "productMerchant"
MODULE_NAME_CAMEL=$(echo "$KEBAB_CASE" | sed -E 's/-([a-z])/\U\1/g')

# Konversi MODULE_NAME_CAMEL ke PascalCase, contoh: "productMerchant" -> "ProductMerchant"
# Convert MODULE_NAME_CAMEL to PascalCase, e.g., "productMerchant" -> "ProductMerchant"
MODULE_NAME_PASCAL=$(echo "$MODULE_NAME_CAMEL" | sed -E 's/^(.)/\U\1/')

# Tentukan path direktori module di dalam src/features
# Determine the module directory path inside src/features
MODULE_DIR="src/features/$MODULE_NAME"
API_DIR="$MODULE_DIR/_api"
COMPONENTS_DIR="$MODULE_DIR/_components"
PAGES_DIR="$MODULE_DIR/_pages"

# Buat direktori yang diperlukan
# Create the required directories
mkdir -p "$API_DIR" "$COMPONENTS_DIR" "$PAGES_DIR"

# Buat file _api/index.ts
# Create file _api/index.ts
cat > "$API_DIR/index.ts" <<EOF
// API functions for the $MODULE_NAME module
// Fungsi API untuk modul $MODULE_NAME
EOF

# Buat file _components/index.ts
# Create file _components/index.ts
cat > "$COMPONENTS_DIR/index.ts" <<EOF
// Components for the $MODULE_NAME module
// Komponen untuk modul $MODULE_NAME
EOF

# Buat file _pages/{module-name}-page.tsx
# Create file _pages/{module-name}-page.tsx
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
# Create schema file in the module root with the name kebab-case-schema.ts
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
