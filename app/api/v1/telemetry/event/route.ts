import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const startTime = performance.now();
  try {
    const body = await request.json();
    const {
      event_id,
      silo_id,
      project_name,
      identity_fingerprint,
      compliance_verdict,
      risk_score,
      violations,
    } = body;

    const txId = `tx_${Math.random().toString(36).substring(2, 12)}_${Date.now().toString(36)}`;
    const timestamp = new Date().toISOString();

    console.log(`[TELEMETRY INGEST ${timestamp}] Tx: ${txId} | Node: ${silo_id} | Project: ${project_name} | Verdict: ${compliance_verdict}`);

    return NextResponse.json({
      status: "LOGGED",
      transaction_id: txId,
      received_at: timestamp,
      event_id: event_id || "evt_unnamed",
      processing_latency_us: Math.round((performance.now() - startTime) * 1000),
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || 'Telemetry ingestion error' },
      { status: 400 }
    );
  }
}
