// reference: https://qiita.com/kohsukeve/items/87cba0e63f4b119c1757

import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json("Hello!")
}
