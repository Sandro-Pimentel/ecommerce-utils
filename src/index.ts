import PasswordGenerator from "./pwd-generator/PasswordGenerator";
import QRCodeGenerator from "./qrcode/QRCodeGenerator";

const passwordGenerator = new PasswordGenerator();
const qrcodeGenerator = new QRCodeGenerator();

export { passwordGenerator, qrcodeGenerator };
