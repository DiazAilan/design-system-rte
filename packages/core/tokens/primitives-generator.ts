import fs from "fs";

enum Collection {
  COLORS = "Primitive : Colors",
  TYPOGRAPHY = "Primitive : Type",
}

interface CollectionItem {
  collection: Collection;
  variables: Record<string, Record<string, { $value: string }>>;
}

const inputPath = "./tokens/sourceFiles/primitives.json";
const outputDir = "./tokens/primitives/";
const UNIT = "px";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

function extractScssVariables(json: CollectionItem[]) {
  for (const tokenItem of json) {
    let scss = "";
    let filename = "";
    switch (tokenItem.collection) {
      case Collection.COLORS:
        filename = "_colors.scss";
        scss += extractColors(tokenItem);
        generateScssFile(scss, filename);
        break;

      case Collection.TYPOGRAPHY:
        filename = "_typography.scss";
        scss += extractTypography(tokenItem);
        generateScssFile(scss, filename);
        break;
    }
  }
}

function extractColors(colorCollection: CollectionItem): string {
  let scss = "";
  for (const color in colorCollection.variables) {
    for (const colorValue in colorCollection.variables[color]) {
      const colorVariable = colorCollection.variables[color][colorValue];
      scss += `$${color}-${colorValue}: ${colorVariable.$value};\n`.toLowerCase();
    }
  }
  return scss;
}

function extractTypography(typographyCollection: CollectionItem): string {
  let scss = "";
  for (const category in typographyCollection.variables) {
    for (const subCategory in typographyCollection.variables[category]) {
      const typographyVariable = typographyCollection.variables[category][subCategory];
      if (category === "font-weight") {
        scss += `$${category}-${subCategory}: ${typographyVariable.$value};\n`.toLowerCase();
      } else if (category === "font-family") {
        scss += `$${category}-${subCategory}: "${typographyVariable.$value}";\n`;
      } else {
        scss += `$${category}-${subCategory}: ${typographyVariable.$value}${UNIT};\n`.toLowerCase();
      }
    }
  }
  return scss;
}

function generateScssFile(scssValue: string, filename: string) {
  fs.writeFileSync(outputDir + filename, scssValue);
}

const raw = JSON.parse(fs.readFileSync(inputPath, "utf8"));
extractScssVariables(raw);
