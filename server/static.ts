import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  // Replace __SITE_URL__ placeholders for social crawler compatibility
  const indexHtml = fs.readFileSync(
    path.resolve(distPath, "index.html"),
    "utf-8",
  );
  const siteUrl = process.env.SITE_URL || "";
  const renderedHtml = indexHtml.replace(/__SITE_URL__/g, siteUrl);

  app.use("*", (_req, res) => {
    res.status(200).set({ "Content-Type": "text/html" }).end(renderedHtml);
  });
}
