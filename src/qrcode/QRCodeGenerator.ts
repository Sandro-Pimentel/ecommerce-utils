import qrcode from "qrcode";

export default class QRCodeGenerator {
    public async generate(link: string) {
        const qr = await qrcode.toString(link);

        return qr;
    }
}
