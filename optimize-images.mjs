import sharp from "sharp";
import fs from "fs";
import path from "path";

const root="assets";

async function processImage(filePath){
  const ext=path.extname(filePath).toLowerCase();
  const base=filePath.replace(ext,"");
  try{
    await sharp(filePath).webp({quality:80}).toFile(base+".webp");
    console.log("Converted:",filePath);
  }catch(e){console.error("Error:",filePath,e.message);}
}

function walk(dir){
  for(const f of fs.readdirSync(dir)){
    const p=path.join(dir,f);
    if(fs.statSync(p).isDirectory()) walk(p);
    else if(/\.(png|jpg|jpeg)$/i.test(f)) processImage(p);
  }
}
walk(root);
