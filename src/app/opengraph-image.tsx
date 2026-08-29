import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Marks Soluções — ART para Reforma";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public/images/logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: 72,
          backgroundColor: "#0B1F33",
          backgroundImage: "linear-gradient(135deg, #0B1F33 0%, #122B47 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            backgroundColor: "#FFFFFF",
            borderRadius: 14,
            padding: "14px 20px",
          }}
        >
          <img src={logoSrc} height={48} alt="" />
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 920 }}>
          <div
            style={{
              display: "flex",
              color: "#8FB2FF",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            ART PARA QUALQUER TIPO DE REFORMA
          </div>
          <div style={{ display: "flex", color: "#FFFFFF", fontSize: 60, fontWeight: 800, lineHeight: 1.15 }}>
            Precisa de ART para sua reforma?
          </div>
          <div style={{ display: "flex", color: "rgba(255,255,255,0.75)", fontSize: 28, marginTop: 24 }}>
            Análise técnica e documentação com atendimento direto pelo WhatsApp.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#22C55E",
              borderRadius: 999,
              padding: "14px 28px",
              color: "#FFFFFF",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            Falar com um engenheiro pelo WhatsApp
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
